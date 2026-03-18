import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://red-stack.com',
  integrations: [sitemap()],
  compressHTML: true,
});
