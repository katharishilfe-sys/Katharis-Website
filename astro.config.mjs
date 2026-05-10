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
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE' },
      },
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        // Hauptseite: hoechste Prio
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Service-Pages: Conversion-relevant
        else if (path.startsWith('/service/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Pflegekasse + Pflegegrad-Antrag: YMYL-Trust
        else if (path === '/pflegekasse/' || path === '/pflegegrad-antrag/') {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Standorte: lokales SEO
        else if (path.startsWith('/standorte/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Ratgeber-Index + Ueber-uns + Kontakt
        else if (path === '/ratgeber/' || path === '/ueber-uns/' || path === '/kontakt/') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Einzelne Ratgeber-Artikel
        else if (path.startsWith('/ratgeber/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Legal: niedrigste Prio, selten geaendert
        else if (
          path === '/impressum/' ||
          path === '/datenschutz/' ||
          path === '/agb/' ||
          path === '/barrierefreiheit/'
        ) {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        return item;
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
