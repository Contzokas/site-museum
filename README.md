# Museum website — hosting handoff

This repository contains the Next.js application, public images, configuration, and dependency lockfile. Use the repository root as the hosting project root.

## Hosting requirements

Use hosting that supports Node.js and Next.js. This folder is source code and must be built; uploading it directly to a static HTML hosting directory will not run the website.

1. Install a Node.js version supported by the included Next.js version (20.9 or newer).
2. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin, for example `https://museum.gr`. See `.env.example`. For a local production build, copy this file to `.env.local` and replace the example address before building. Production builds reject missing URLs, localhost, HTTP, paths, queries, and credentials.
3. Run `npm ci`.
4. Run `npm run build`.
5. Run `npm start` (default port 3000), or use the hosting platform's Next.js deployment integration.

For a managed platform, select Next.js, use the repository root as the project root, and set the environment variable before building. Rebuild if the public address changes; it is used for site metadata, robots, and sitemap URLs. Local development with `npm run dev` works without this setting.

This application requires Next.js hosting; GitHub stores the source, and GitHub Pages cannot run this Node.js application as configured.

## Search and sharing

- `/sitemap.xml` includes the home page, all eight tour pages, and their cover images.
- `/robots.txt` allows crawling and points to the sitemap.
- Every page has a title, description, canonical URL, Open Graph metadata, and Twitter sharing metadata.
- The home page includes Museum structured data matching the displayed contact details and hours.
- Greek language metadata, a web manifest, an icon, security headers, and noindex 404 responses are included.

Sitemap modification dates are omitted rather than claiming that every page changed on every build. Add accurate dates if content starts being managed with a publication history.

After connecting the real domain, enable HTTPS and redirect alternate domains to the configured canonical origin in the hosting provider. Check the live sitemap and robots URLs, verify the domain in Google Search Console, and submit `/sitemap.xml`. Keep staging deployments private or configure the host to send `X-Robots-Tag: noindex` for them. Search engines decide when to index; a sitemap does not guarantee inclusion.

## Automated checks

Run `npm run build` followed by `npm run check` with the same `NEXT_PUBLIC_SITE_URL` used for the build. If using `.env.local`, also provide the URL in the shell when running `npm run check`. The checks start and stop a temporary production server and verify URL validation, all sitemap pages, canonical and sharing URLs, referenced images, structured data, robots, the manifest, security headers, and 404 responses.

GitHub Actions runs the build and checks on pushes and pull requests. Its `https://museum.example` URL is only a test fixture; set the real domain separately in the hosting provider.

## Before publishing

Run `npm audit` before publishing and review any reported advisories. Confirm the museum's contact details and opening hours, and check the live site on mobile and desktop after deployment.

## Folder contents

- `app/`: pages, styles, metadata, and tour content.
- `public/`: website images and other public assets.
- `next.config.js`: Next.js configuration and security response headers.
- `package.json` and `package-lock.json`: commands and dependency versions.
- `.env.example`: public address configuration template.
- `scripts/check-site.mjs`: production smoke checks.
- `.github/workflows/check.yml`: build and smoke checks on GitHub.
