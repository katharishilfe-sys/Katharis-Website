/**
 * Schema.org JSON-LD-Generatoren (Master v2.0 Etappe 7 Aufgabe 6)
 */

import { kontakt, traeger } from '@data/content';

const SITE_URL = 'https://katharis.de';

export const PERSON_DANIEL = {
  '@type': 'Person',
  '@id': `${SITE_URL}/ueber-uns/#daniel`,
  name: 'Daniel Altenhof',
  jobTitle: 'Initiator und operativer Leiter Katharis',
  url: `${SITE_URL}/ueber-uns/`,
};

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Katharis',
    description: 'Entlastungsleistungen für komplexe Pflegefälle nach §45a SGB XI',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'de-DE',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Katharis',
    legalName: traeger.firma,
    url: SITE_URL,
    logo: `${SITE_URL}/katharis-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description: 'Anerkannter Anbieter für Entlastungsleistungen nach §45a SGB XI in Stadt Stuttgart und Landkreis Böblingen. Schwerpunkt Messie-Hilfe und Vollräumung vor dem Pflegeheim-Umzug, mit Pflegekassen-Direktabrechnung.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: kontakt.adresse.operativeZentrale.strasse,
      addressLocality: kontakt.adresse.operativeZentrale.ort,
      postalCode: kontakt.adresse.operativeZentrale.plz,
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: kontakt.telefon,
      email: kontakt.email,
      contactType: 'customer service',
      areaServed: traeger.para45aGeltungsbereich,
      availableLanguage: 'German',
    },
    areaServed: traeger.para45aGeltungsbereich,
    founder: [
      { '@id': `${SITE_URL}/ueber-uns/#daniel` },
    ],
    knowsAbout: [
      'Pflegekassen-Entlastungsleistungen nach §45a SGB XI',
      'Messie-Hilfe und Wohnungs-Tiefenreinigung',
      'Vollräumung vor Pflegeheim-Umzug',
      'Pflegekassen-Direktabrechnung',
      'Pflegegrad-Antragsverfahren',
    ],
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: kontakt.adresse.operativeZentrale.strasse,
      addressLocality: kontakt.adresse.operativeZentrale.ort,
      postalCode: kontakt.adresse.operativeZentrale.plz,
      addressCountry: 'DE',
    },
    areaServed: opts?.areaServed ?? traeger.para45aGeltungsbereich,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.6856,
      longitude: 9.0142,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [],
  };
}

export function generateServiceSchema(opts: {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  category?: string;
  serviceOutput?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.serviceName,
    serviceType: 'Entlastungsleistungen für Pflegebedürftige',
    category: opts.category ?? 'Pflegekassen-Leistungen nach §45a SGB XI',
    description: opts.serviceDescription,
    url: opts.serviceUrl,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: traeger.para45aGeltungsbereich,
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Pflegebedürftige und ihre Angehörigen',
    },
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceLocation: {
          '@type': 'Place',
          name: 'Operative Zentrale Böblingen',
          address: {
            '@type': 'PostalAddress',
            streetAddress: kontakt.adresse.operativeZentrale.strasse,
            addressLocality: kontakt.adresse.operativeZentrale.ort,
            postalCode: kontakt.adresse.operativeZentrale.plz,
            addressCountry: 'DE',
          },
        },
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: kontakt.telefon,
          contactType: 'customer service',
          availableLanguage: 'German',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '20:00',
          },
        },
        availableLanguage: 'German',
      },
    ],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: 'Individuell nach Aufwand. Bei vorhandenem Pflegegrad bis zu 100% Kostenübernahme durch die Pflegekasse möglich (§45a, §45b, §42a, §40 SGB XI).',
      },
      eligibleRegion: traeger.para45aGeltungsbereich,
      url: opts.serviceUrl,
    },
    ...(opts.serviceOutput ? { serviceOutput: opts.serviceOutput } : {}),
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
