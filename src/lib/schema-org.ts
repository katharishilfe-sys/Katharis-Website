/**
 * Schema.org JSON-LD-Generatoren (Master v2.0 Etappe 7 Aufgabe 6)
 */

import { kontakt, traeger } from '@data/content';

const SITE_URL = 'https://katharis.de';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Katharis',
    url: SITE_URL,
    logo: `${SITE_URL}/katharis-logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: kontakt.telefon,
      email: kontakt.email,
      contactType: 'customer service',
      areaServed: traeger.para45aGeltungsbereich,
      availableLanguage: 'German',
    },
  };
}

export function generateLocalBusinessSchema(opts?: { areaServed?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Katharis',
    url: SITE_URL,
    telephone: kontakt.telefon,
    email: kontakt.email,
    image: `${SITE_URL}/og-image.png`,
    priceRange: 'EUR EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: kontakt.adresse.operativeZentrale.strasse,
      addressLocality: kontakt.adresse.operativeZentrale.ort,
      postalCode: kontakt.adresse.operativeZentrale.plz,
      addressCountry: 'DE',
    },
    areaServed: opts?.areaServed ?? traeger.para45aGeltungsbereich,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  };
}

export function generateServiceSchema(opts: {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.serviceName,
    serviceType: 'Entlastungsleistungen für Pflegebedürftige',
    description: opts.serviceDescription,
    url: opts.serviceUrl,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: traeger.para45aGeltungsbereich,
    termsOfService: `${SITE_URL}/agb/`,
  };
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbListSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateHowToSchema(opts: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
