/**
 * Klaro Cookie-Consent Konfiguration.
 *
 * Maxim-Marken-Regel 1.7: Cleanit-Name nicht in user-facing.
 * Master-Etappe-6: Cookie-Consent vor allen Tracking-Skripten.
 *
 * Aktivierung erfolgt automatisch sobald in Cloudflare-Pages (Production)
 * mindestens eine der folgenden Env-Vars gesetzt ist:
 *   - PUBLIC_GA4_MEASUREMENT_ID  (Format: G-XXXXXXXXXX)
 *   - PUBLIC_GTM_CONTAINER_ID    (Format: GTM-XXXXXXX)
 *   - PUBLIC_CLARITY_PROJECT_ID  (Format: xxxxxxxxxx)
 *
 * CookieConsent.astro liest die Env-Vars beim Build, injiziert Klaro via CDN
 * (kein npm install notwendig) und wraps die Tracking-Scripts mit
 * type="text/plain" + data-name -> Klaro aktiviert sie nach Consent.
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
 * Aktivierungs-Schritte (Stand 2026-05-13):
 *
 * 1. Cloudflare-Pages > katharis-v2 > Settings > Environment-Variables (Production):
 *    - PUBLIC_GA4_MEASUREMENT_ID = G-XXXXXXXXXX (sobald GA4-Property angelegt)
 *    - PUBLIC_GTM_CONTAINER_ID   = GTM-XXXXXXX (optional, wenn Tag-Manager genutzt)
 *    - PUBLIC_CLARITY_PROJECT_ID = xxxxxxxxxx (optional, Clarity-Heatmaps)
 *
 * 2. Naechster Build deployed automatisch:
 *    - CookieConsent.astro rendert Klaro-Banner + blocked Scripts
 *    - Klaro wird via jsdelivr-CDN geladen (kein npm-Install noetig)
 *    - User-Consent via Banner -> Scripts werden aktiviert
 *
 * 3. Ohne Env-Vars:
 *    - CookieConsent rendert NICHTS
 *    - Cloudflare Web Analytics laeuft ohne Cookie (no consent needed)
 *    - Keine User-Konfrontation mit unnoetigem Banner
 */
