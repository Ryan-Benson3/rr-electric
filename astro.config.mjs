import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rr-electric.pages.dev',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
