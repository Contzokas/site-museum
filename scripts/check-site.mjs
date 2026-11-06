import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout } from "node:timers/promises";

const source = await readFile(new URL("../app/site-config.js", import.meta.url), "utf8");
const loadConfig = () => import(`data:text/javascript;base64,${Buffer.from(source + `\n// ${Math.random()}`).toString("base64")}`);
const originalUrl = process.env.NEXT_PUBLIC_SITE_URL;
const originalMode = process.env.NODE_ENV;
try {
  process.env.NODE_ENV = "production";
  for (const invalid of [undefined, "http://museum.gr", "https://localhost", "https://127.0.0.1", "https://[::1]", "https://museum.gr/path", "https://museum.gr/?q=1", "https://museum.gr/#x", "https://user:pass@museum.gr", "invalid"]) {
    if (invalid === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = invalid;
    await assert.rejects(loadConfig, `Must reject production URL: ${invalid}`);
  }
  process.env.NEXT_PUBLIC_SITE_URL = "https://museum.gr/";
  assert.equal((await loadConfig()).siteUrl, "https://museum.gr");
  process.env.NODE_ENV = "development";
  delete process.env.NEXT_PUBLIC_SITE_URL;
  assert.equal((await loadConfig()).siteUrl, "http://localhost:3000");
} finally {
  if (originalUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
  else process.env.NEXT_PUBLIC_SITE_URL = originalUrl;
  if (originalMode === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalMode;
}

const { siteUrl } = await loadConfig();
const { tourSpaces } = await import(`data:text/javascript;base64,${Buffer.from(await readFile(new URL("../app/tour-data.js", import.meta.url), "utf8")).toString("base64")}`);
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "0"], { stdio: ["ignore", "pipe", "pipe"] });
let output = "";
server.stdout.on("data", (data) => { output += data; });
server.stderr.on("data", (data) => { output += data; });
try {
  let localUrl;
  for (let attempt = 0; attempt < 100; attempt++) {
    localUrl = output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
    if (localUrl && output.includes("Ready")) break;
    assert.equal(server.exitCode, null, output);
    await setTimeout(100);
  }
  assert.ok(localUrl && output.includes("Ready"), `Server did not start: ${output}`);
  const get = async (path, status = 200) => {
    const response = await fetch(`${localUrl}${path}`, { headers: { "user-agent": "Googlebot" } });
    assert.equal(response.status, status, path);
    return response;
  };
  const robots = await (await get("/robots.txt")).text();
  assert.ok(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
  assert.ok(robots.includes("Allow: /"));
  const sitemap = await (await get("/sitemap.xml")).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, [siteUrl, ...tourSpaces.map(({ slug }) => `${siteUrl}/perigisi/${slug}`)]);
  for (const [index, url] of urls.entries()) {
    const response = await get(new URL(url).pathname);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    const html = await response.text();
    assert.ok(html.includes('<html lang="el"'), url);
    assert.ok(html.includes(`rel="canonical" href="${url}"`), url);
    assert.ok(html.includes(`property="og:url" content="${url}"`), url);
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), url);
    const image = index ? tourSpaces[index - 1].cover : "/assets/hero.png";
    assert.ok(html.includes(`name="twitter:image" content="${siteUrl}${image}"`), url);
    for (const match of html.matchAll(/(?:src|href)="(\/(?:assets\/[^"?]+|icon.png))(?:\?[^\"]*)?"/g)) await get(match[1]);
    if (index === 0) {
      const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.equal(data["@type"], "Museum");
      assert.equal(data.url, siteUrl);
    }
  }
  for (const path of ["/missing-page", "/perigisi/missing-space"]) {
    const html = await (await get(path, 404)).text();
    assert.ok(html.includes('name="robots" content="noindex"'), path);
  }
  const manifest = await (await get("/manifest.webmanifest")).json();
  assert.equal(manifest.lang, "el");
  for (const icon of manifest.icons) await get(icon.src);
  console.log(`Passed URL validation and production checks for ${urls.length} pages, sitemap, robots, structured data, images, manifest, headers, and 404s.`);
} finally {
  if (server.exitCode === null) {
    server.kill();
    await once(server, "exit");
  }
}
