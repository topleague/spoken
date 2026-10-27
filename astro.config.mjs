import { defineConfig } from 'astro/config';

// Fully static output: `npm run build` writes everything to dist/.
export default defineConfig({
  output: 'static',
  site: 'https://04071979.xyz',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
