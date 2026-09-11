// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Render sets RENDER_EXTERNAL_URL automatically at build time (e.g.
// https://laogrocery-website.onrender.com). Falls back to the eventual
// production domain once that's pointed at the service.
const site = process.env.RENDER_EXTERNAL_URL ?? 'https://www.laogrocery.com';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
