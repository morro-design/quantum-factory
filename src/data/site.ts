/** Single source of truth for organization / site-wide SEO data. */
export const site = {
  name: 'Quantum Factory',
  legalName: 'Quantum Factory — Boutique AI & Data',
  tagline: 'Boutique AI & Data',
  url: 'https://quantumfactory.io',
  locale: 'es_ES',
  lang: 'es',
  email: 'hola@quantumfactory.io',
  phone: '+34918082412',
  phoneDisplay: '+34 918 08 24 12',
  logo: '/logo-lima.svg',
  ogImage: '/og.png',
  themeColor: '#08090D',
  areaServed: ['ES', 'EU'],
  locations: ['Madrid', 'Valencia'],
  openingHours: 'Mo-Fr 09:00-19:00',
  founded: '2026',
  defaultTitle: 'Quantum Factory — Boutique AI & Data | Inteligencia Artificial Aplicada',
  defaultDescription:
    'Diagnóstico económico antes de escribir código. Prototipo funcional en 15 días con tus datos, código 100% transferido y despliegue europeo conforme a RGPD.',
  keywords: [
    'inteligencia artificial empresas',
    'automatización de procesos con IA',
    'agentes de IA',
    'chatbots atención al cliente',
    'consultoría IA',
    'RAG empresarial',
    'agentes de voz IA',
    'Madrid',
    'Valencia',
  ],
} as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  logo: {
    '@type': 'ImageObject',
    url: `${site.url}${site.logo}`,
  },
  image: `${site.url}${site.ogImage}`,
  email: site.email,
  telephone: site.phone,
  foundingDate: site.founded,
  areaServed: site.areaServed.map((a) => ({ '@type': 'Country', name: a })),
  address: site.locations.map((city) => ({
    '@type': 'PostalAddress',
    addressLocality: city,
    addressCountry: 'ES',
  })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.phone,
      availableLanguage: ['es', 'en'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    },
  ],
  knowsAbout: [
    'Inteligencia artificial',
    'Automatización de procesos',
    'Agentes de IA',
    'Procesamiento de lenguaje natural',
    'RAG',
    'Análisis de datos',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: site.lang,
  publisher: { '@id': `${site.url}/#organization` },
};

/** Honest contact until a booking URL exists. Opens the mail client with the ask already written. */
export const diagnosticMailto = `mailto:${site.email}?subject=${encodeURIComponent('Diagnóstico 20 min')}&body=${encodeURIComponent('Hola,\n\nQuiero el diagnóstico gratuito de 20 minutos.\n\nEmpresa:\nProceso a revisar:\n')}`;
