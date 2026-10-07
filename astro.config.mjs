import { defineConfig } from 'astro/config';

// Fully static output: `npm run build` writes everything to dist/.
// Set `site` to your real domain before launch (used for canonical URLs and RSS).
export default defineConfig({
  output: 'static',
  // site: 'https://example.com',
});
