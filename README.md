# Old Mate Cranes

Static marketing site for Old Mate Cranes & Rigging. The live app has been migrated from Create React App to Astro so the page sections render as static HTML with only a small browser script for the mobile navigation menu.

## Stack

- Astro 6 static output
- Bootstrap CSS and local SCSS styles
- Public image, icon, manifest, and robots assets in `public/`
- Vercel deployment headers in `vercel.json`

## Requirements

- Node.js `22.12.0` or newer
- npm

The Node requirement is recorded in `package.json` and `.nvmrc`.

## Local Development

Install dependencies:

```sh
npm install
```

Start the Astro dev server:

```sh
npm run dev
```

Astro serves the site locally at `http://localhost:4321/` by default.

## Validation

Run Astro type and content checks:

```sh
npm run check
```

Build the static site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

The production build is written to `dist/`.

## Project Layout

- `src/pages/index.astro` composes the one-page site route.
- `src/layouts/BaseLayout.astro` owns document metadata, fonts, Bootstrap CSS, and global styles.
- `src/components/` contains Astro sections for the header, hero, content sections, contact block, and footer.
- `src/styles/global.scss` contains shared site styling.
- `public/` contains site assets served from the web root.

## Security And Repository Hygiene

- `.gitignore` excludes dependencies, build output, Astro metadata, environment files, local deployment state, editor files, and imported backup folders.
- `.github/dependabot.yml` requests weekly npm dependency update pull requests.
- `vercel.json` applies response headers such as CSP, HSTS, frame restrictions, MIME sniffing protection, permissions policy, and referrer policy.
- `package.json` includes a narrow npm override for the Astro checker YAML language-server chain so `npm audit --audit-level=moderate` resolves cleanly with the current lockfile.

Do not commit secrets, `.env` files, generated build output, dependency directories, or imported backup archives.

## Deployment

The app is configured as a static Astro site. Vercel can build it with `npm run build` and serve the generated `dist/` output while applying the headers in `vercel.json`. The Vercel config pins `dist/` as the output directory so migrated deployments do not reuse Create React App's old `build/` output setting.
