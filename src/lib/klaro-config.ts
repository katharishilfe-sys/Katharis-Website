/**
 * Klaro Cookie-Consent Konfiguration (Stub).
 *
 * Maxim-Marken-Regel 1.7: Cleanit-Name nicht in user-facing.
 * Master-Etappe-6: Cookie-Consent vor allen Tracking-Skripten.
 *
 * Stub-Status (2026-05-07): Klaro-NPM-Paket noch nicht installiert.
 * Aktivierung sobald Daniel folgende IDs liefert:
 *   - GA4 Measurement-ID (G-XXXXXXXXXX)
 *   - GTM Container-ID (GTM-XXXXXXX) - optional
 *   - Microsoft Clarity Project-ID (xxxxxxxxxx) - optional
 */

export interface KlaroService {
  name: string;
  title: string;
  description: string;
  purposes: string[];
  cookies?: Array<RegExp | string>;
  required?: boolean;
  default?: boolean;
  onAccept?: string;
  onDecline?: string;
}

export const klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie' as const,
  cookieName: 'klaro-consent',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/datenschutz/',
  default: false,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  htmlTexts: true,

  translations: {
    de: {
      consentModal: {
        title: 'Datenschutz-Einstellungen',
        description:
          'Wir verwenden technisch notwendige Cookies fuer den Betrieb der Website. ' +
          'Optional setzen wir mit Ihrer Einwilligung Analyse-Tools ein, um die Nutzung der Website ' +
          'zu verstehen und zu verbessern. Sie koennen Ihre Auswahl jederzeit aendern. ' +
          'Mehr Informationen in der <a href="/datenschutz/">Datenschutzerklaerung</a>.',
      },
      consentNotice: {
        title: 'Datenschutz',
        changeDescription: 'Es gibt aktualisierte Datenschutz-Hinweise.',
        description:
          'Wir verwenden Cookies und vergleichbare Technologien. Einige sind technisch notwendig, ' +
          'andere helfen uns die Nutzung zu verstehen. Sie entscheiden, was Sie zulassen.',
        learnMore: 'Auswahl anpassen',
      },
      ok: 'Alle akzeptieren',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl akzeptieren',
      decline: 'Nur notwendige',
      close: 'Schliessen',
      poweredBy: '',
      purposes: {
        functional: { title: 'Funktional', description: 'Technisch notwendig fuer den Betrieb der Website.' },
        analytics: { title: 'Analyse', description: 'Hilft uns Nutzung zu verstehen, anonymisiert.' },
        marketing: { title: 'Marketing', description: 'Hilft uns Werbung gezielt auszuspielen.' },
      },
    },
  },

  services: [
    {
      name: 'cloudflare-insights',
      title: 'Cloudflare Web Analytics',
      description:
        'Privacy-friendly Analytics ohne Cookie. Hilft uns Performance und Nutzung der Website ' +
        'zu verstehen ohne personenbezogene Daten zu erheben.',
      purposes: ['functional'],
      required: true,
      default: true,
    },
    {
      name: 'google-analytics',
      title: 'Google Analytics 4',
      description:
        'Hilft uns Nutzung der Website zu analysieren. IP-Adresse wird anonymisiert. ' +
        'Cookies _ga, _ga_*, _gid mit max 24 Monaten Laufzeit.',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, '_gat'],
      onAccept: `
        if (typeof window.gtag === 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() { window.dataLayer.push(arguments); };
        }
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
        });
      `,
      onDecline: `
        if (typeof window.gtag !== 'undefined') {
          window.gtag('consent', 'update', { analytics_storage: 'denied' });
        }
      `,
      default: false,
    },
    {
      name: 'google-ads',
      title: 'Google Ads Conversion-Tracking',
      description:
        'Hilft uns die Wirksamkeit unserer Werbeanzeigen zu messen. ' +
        'Setzt Cookies _gcl_au, _gcl_aw mit max 90 Tagen Laufzeit.',
      purposes: ['marketing'],
      cookies: [/^_gcl/],
      onAccept: `
        if (typeof window.gtag !== 'undefined') {
          window.gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
        }
      `,
      onDecline: `
        if (typeof window.gtag !== 'undefined') {
          window.gtag('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        }
      `,
      default: false,
    },
    {
      name: 'microsoft-clarity',
      title: 'Microsoft Clarity',
      description:
        'Heatmaps und Session-Recordings (anonymisiert) zur UX-Optimierung. ' +
        'Cookies _clck, _clsk mit max 12 Monaten Laufzeit.',
      purposes: ['analytics'],
      cookies: [/^_cl/],
      default: false,
    },
  ] as KlaroService[],
};

/**
 * Aktivierungs-Schritte:
 *
 * 1. npm install klaro
 * 2. Klaro-CSS importieren in src/styles/global.css:
 *      @import 'klaro/dist/klaro.css';
 * 3. Klaro-Bootstrap als Astro-Komponente unter src/components/CookieConsent.astro:
 *      <script>
 *        import { klaroConfig } from '@lib/klaro-config';
 *        import * as Klaro from 'klaro';
 *        window.klaro = Klaro;
 *        window.klaroConfig = klaroConfig;
 *        Klaro.setup(klaroConfig);
 *      </script>
 *      <div id="klaro"></div>
 * 4. CookieConsent-Komponente in PageLayout.astro vor StickyMobileBar einbinden.
 * 5. GA4/GTM/Clarity-Snippets in BaseLayout.astro mit data-name Attribut versehen
 *    (Klaro liest data-name und blockt das Skript bis Consent gegeben ist).
 *
 * Warum erst spaeter aktivieren:
 * - Solange noch kein GA4 / GTM Account aktiv ist, gibt es nichts zu blocken.
 * - Cloudflare Web Analytics ist privacy-friendly ohne Cookie und braucht keinen Consent.
 * - Vorher unnoetig den User mit einem Cookie-Banner zu konfrontieren = schlechte UX.
 */
