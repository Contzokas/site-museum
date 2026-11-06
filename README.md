# Museum website — hosting handoff

Send this entire `site-museum` folder to the hosting provider. It contains the Next.js application, public images, configuration, and dependency lockfile.

## Hosting requirements

Use hosting that supports Node.js and Next.js. This folder is source code and must be built; uploading it directly to a static HTML hosting directory will not run the website.

1. Install a Node.js version supported by the included Next.js version (20.9 or newer).
2. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS address, without a trailing slash. See `.env.example`. For a local production build, copy this file to `.env.local` and replace the example address before building.
3. Run `npm ci`.
4. Run `npm run build`.
5. Run `npm start` (default port 3000), or use the hosting platform's Next.js deployment integration.

For a managed platform, select Next.js, use this folder as the project root, and set the environment variable before building. Rebuild if the public address changes; it is used for site metadata, robots, and sitemap URLs.

## Before publishing

Next.js has been updated to 16.4.3 to address the reported vulnerabilities. The dependency audit reported no known vulnerabilities on November 1, 2026. Run `npm audit` again before publishing, since new advisories may appear over time.

## Folder contents

- `app/`: pages, styles, metadata, and tour content.
- `public/`: website images and other public assets.
- `next.config.js`: Next.js configuration and security response headers.
- `package.json` and `package-lock.json`: commands and dependency versions.
- `.env.example`: public address configuration template.

Git history, local dependencies, build output, screenshots, and the older export are kept separately in `../museum-development/`. They are not required for this handoff.
