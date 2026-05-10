/**
 * Lighthouse-CI-Konfiguration fuer Performance-Regression-Schutz.
 *
 * Ausfuehrung lokal: npx @lhci/cli@0.14.x autorun
 * CI: aufgerufen via .github/workflows/lighthouse.yml
 *
 * Schwellen orientieren sich am Soll-Stand 2026-05-10 (alle 100 score).
 * Performance + A11y + Best-Practices + SEO duerfen nicht regressieren.
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost/index.html',
        'http://localhost/service/messie-hilfe/index.html',
        'http://localhost/pflegekasse/index.html',
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --headless',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
