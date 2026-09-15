import { site } from './site';
import { families, services, serviceUrl, type Service } from './services';

const abs = (path: string) => `${site.url}${path === '/' ? '' : path}`;

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function servicesItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de Inteligencia Artificial — Quantum Factory',
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: abs(serviceUrl(s.slug)),
    })),
  };
}

export function catalogPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${abs('/servicios')}#webpage`,
    url: abs('/servicios'),
    name: 'Servicios de Inteligencia Artificial | Quantum Factory',
    inLanguage: site.lang,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` },
  };
}

export function serviceJsonLd(s: Service) {
  const url = abs(serviceUrl(s.slug));
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    url,
    name: s.title,
    alternateName: s.code,
    description: s.description,
    serviceType: s.title,
    category: families[s.family].name,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: site.areaServed.map((a) => ({ '@type': 'Country', name: a })),
    availableLanguage: ['es', 'en'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      url: `${site.url}/#contacto`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${s.title} — capacidades incluidas`,
      itemListElement: s.capabilities.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c.title, description: c.text },
      })),
    },
  };
}

export function faqJsonLd(s: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
