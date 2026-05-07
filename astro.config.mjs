// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://katharis.de',
  trailingSlash: 'always',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/standorte/sindelfingen/') &&
        !page.includes('/standorte/leonberg/') &&
        !page.includes('/standorte/herrenberg/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@supabase/supabase-js'],
    },
  },
});
