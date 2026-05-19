/**
 * Tracking-Helper fuer Etappe 6 (GA4/GTM/Clarity).
 *
 * Bietet:
 *   - Consent-Mode-V2 Default-Deny (GDPR-Best-Practice fuer EU)
 *   - dataLayer-Push-Helper mit konsistenter Event-Struktur
 *   - Type-safe Event-Definitionen
 *
 * Lifecycle:
 *   1. BaseLayout.astro inlinet `consentModeBootstrap()` als <script> ganz oben im <head>
 *      -> setzt Consent-Mode auf "denied" fuer alle Storage-Kategorien
 *   2. Wenn User Consent gibt: Klaro ruft window.gtag('consent','update', ...) auf
 *      -> Storage wird "granted"
 *   3. Komponenten (LeadFormModal, CallCTA, StickyMobileBar) rufen `pushEvent()`
 *      -> wird im dataLayer gepusht, GTM/GA4 reagieren wenn Consent gegeben
 */

export const CONSENT_MODE_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
window.gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500,
});
`.trim();

export type TrackingEvent =
  | { event: 'call_initiated'; source_cta: string; source_page: string; matelso_pool?: string }
  | { event: 'form_submit_success'; source_cta: string; source_page: string }
  | { event: 'form_submit_error'; source_cta: string; source_page: string; error: string }
  | { event: 'modal_opened'; source_cta: string; source_page: string }
  | { event: 'page_scroll_50'; source_page: string }
  | { event: 'page_scroll_90'; source_page: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushEvent(event: TrackingEvent): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function getCurrentPage(): string {
  if (typeof window === 'undefined') return '';
  return window.location.pathname;
}
