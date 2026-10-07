# Plainspoken: a minimal Astro blog theme

Static, editorial, no CMS, no database, no server runtime.

```bash
npm install
npm run build   # outputs to dist/
npm run dev     # local preview
```

## Write

Add Markdown files to `src/content/posts/` with this frontmatter:

```md
---
title: My post
description: One line shown in the list.
date: 2026-10-01
draft: false
---
```

Edit the site name, tagline and nav in `src/config.ts`. Set `site` in `astro.config.mjs` to your domain.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repository (`git init && git add . && git commit -m "Initial commit"`).
2. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git, and pick the repo.
3. Settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node 18.20+ or 20+ (set `NODE_VERSION` if needed)
