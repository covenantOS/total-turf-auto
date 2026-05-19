// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the final production domain once it is confirmed.
export default defineConfig({
  site: 'https://www.totalturfandauto.com',
  integrations: [sitemap()],
});
