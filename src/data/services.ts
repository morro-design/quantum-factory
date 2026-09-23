import raw from './services.json';

export type FamilyKey = 'A' | 'B' | 'C' | 'D';

export interface Service {
  slug: string;
  code: string; // "QF·01"
  family: FamilyKey;
  title: string;
  metaTitle: string;
  description: string;
  summary: string; // catalog card copy
  tagline: string; // detail hero copy
  problem: string;
  solution: string;
  capabilities: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  outcomes: string[];
  faq: { q: string; a: string }[];
  related: string[]; // slugs
}

export interface Family {
  key: FamilyKey;
  name: string;
  // Tailwind accent classes — kept as full literals so the JIT picks them up.
  text: string;
  textSoft: string;
  bg: string;
  bgSoft: string;
  border: string;
  borderHover: string;
  dot: string;
  hoverText: string;
  gradient: string; // inline style for the hero orb
}

export const families: Record<FamilyKey, Family> = {
  A: {
    key: 'A',
    name: 'Automatización & Agentes',
    text: 'text-brand-lima',
    textSoft: 'text-brand-lima/70',
    bg: 'bg-brand-lima',
    bgSoft: 'bg-brand-lima/10',
    border: 'border-brand-lima/20',
    borderHover: 'hover:border-brand-lima/60',
    dot: 'bg-brand-lima',
    hoverText: 'group-hover:text-brand-lima',
    gradient:
      'radial-gradient(circle at 70% 30%, rgba(204, 255, 0, 0.55) 0%, rgba(120, 150, 20, 0.45) 35%, rgba(30, 40, 15, 0.9) 70%, rgba(8, 9, 13, 0.98) 100%)',
  },
  B: {
    key: 'B',
    name: 'Documentos, Conocimiento & Contenido',
    text: 'text-amber-400',
    textSoft: 'text-amber-400/70',
    bg: 'bg-amber-400',
    bgSoft: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    borderHover: 'hover:border-amber-400/60',
    dot: 'bg-amber-400',
    hoverText: 'group-hover:text-amber-300',
    gradient:
      'radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.75) 0%, rgba(140, 80, 10, 0.6) 35%, rgba(40, 25, 10, 0.9) 70%, rgba(8, 9, 13, 0.98) 100%)',
  },
  C: {
    key: 'C',
    name: 'Datos, Integración & Medida',
    text: 'text-cyan-300',
    textSoft: 'text-cyan-300/70',
    bg: 'bg-cyan-400',
    bgSoft: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    borderHover: 'hover:border-cyan-400/60',
    dot: 'bg-cyan-400',
    hoverText: 'group-hover:text-cyan-200',
    gradient:
      'radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.75) 0%, rgba(10, 90, 110, 0.6) 35%, rgba(10, 30, 40, 0.9) 70%, rgba(8, 9, 13, 0.98) 100%)',
  },
  D: {
    key: 'D',
    name: 'Estrategia & Consultoría',
    text: 'text-brand-coral',
    textSoft: 'text-brand-coral/70',
    bg: 'bg-brand-coral',
    bgSoft: 'bg-brand-coral/10',
    border: 'border-brand-coral/20',
    borderHover: 'hover:border-brand-coral/60',
    dot: 'bg-brand-coral',
    hoverText: 'group-hover:text-brand-coral',
    gradient:
      'radial-gradient(circle at 70% 30%, rgba(255, 107, 122, 0.95) 0%, rgba(158, 59, 66, 0.9) 35%, rgba(45, 20, 35, 0.92) 70%, rgba(8, 9, 13, 0.98) 100%)',
  },
};

export const services = raw as Service[];

export const familyOrder: FamilyKey[] = ['A', 'B', 'C', 'D'];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByFamily(key: FamilyKey): Service[] {
  return services.filter((s) => s.family === key);
}

export function serviceUrl(slug: string): string {
  return `/servicios/${slug}`;
}

/** Copy shared by every detail page (identical across the 12 originals). */
export const detailShared = {
  spec: {
    modalidad: 'A medida / Llave en mano',
    despliegue: 'EU-hosted · 100% RGPD',
    prototipo: '≈ 2 semanas',
  },
  sectors: [
    'Clínicas & Salud',
    'E-commerce & Retail',
    'Despachos Legales',
    'Inmobiliarias',
    'Hostelería & Turismo',
    'Finanzas & Seguros',
    'Logística & Distribución',
    'Agencias & Marketing',
    'Servicios Profesionales',
  ],
  heads: {
    capabilities: {
      eyebrow: 'Capacidades incluidas',
      h2: 'Lo que construimos para tu empresa',
      p: 'Módulos diseñados e integrados a la medida de tu infraestructura operativa.',
    },
    method: {
      eyebrow: 'Metodología',
      h2: 'De la idea a producción en semanas',
      p: 'Hitos claros con entregas funcionales. Pruebas sobre tus datos antes de escalar.',
    },
    outcomes: { eyebrow: 'Impacto directo', h2: 'Resultados tangibles', p: '' },
    sectors: {
      eyebrow: 'Sectores habituales',
      h2: 'Dónde aporta mayor retorno',
      p: 'Cualquier empresa con volumen operativo, procesos recurrentes o datos estratégicos.',
    },
    faq: { eyebrow: 'Dudas frecuentes', h2: 'Preguntas y respuestas', p: '' },
    related: { eyebrow: 'Ecosistema modular', h2: 'Servicios que suelen combinarse', p: '' },
  },
  cta: {
    eyebrow: 'Hablemos',
    h2: '¿Tiene sentido para tu empresa?',
    p: 'Escríbenos para una conversación de 20 minutos. Revisamos tu operativa, valoramos si tiene sentido aplicar IA y te proponemos un camino claro. Sin compromiso de contratación.',
    fine: 'Respuesta en menos de 24h · Prototipo funcional en 2 semanas',
  },
};

/** Copy for the /servicios catalog page. */
export const catalog = {
  eyebrow: 'Catálogo Oficial de Capacidades',
  h1: 'Servicios de Inteligencia Artificial',
  p: 'Doce líneas de servicio especializadas para resolver problemas operativos reales, con despliegue en servidores seguros en Europa y código 100% propietario.',
  combos: {
    eyebrow: 'Enfoque de Integración',
    h2: '¿Cómo se combinan estos servicios?',
    p: 'Rara vez un proyecto usa una sola pieza. Lo habitual es combinar varias líneas, o convertirlas en un sistema a medida.',
    items: [
      {
        title: 'Captación & Soporte',
        html: 'Combinamos <b>Chatbots (QF·03)</b> con <b>Agentes de Voz (QF·09)</b> y <b>Automatización CRM (QF·04)</b> para cerrar el ciclo del cliente.',
      },
      {
        title: 'Operaciones & Backoffice',
        html: 'Unimos <b>Procesamiento de Documentos (QF·07)</b> con <b>Automatización (QF·01)</b> e <b>Integraciones (QF·11)</b> hacia tu ERP.',
      },
      {
        title: 'Decisión & Inteligencia',
        html: 'Conectamos <b>Asistentes Internos (QF·06)</b> con <b>Análisis de Datos (QF·08)</b> y <b>Estrategia (QF·12)</b> para directivos.',
      },
    ],
  },
  cta: {
    eyebrow: 'Siguiente paso',
    h2: 'Diagnóstico técnico gratuito',
    p: 'Analizamos en 20 minutos qué servicios tienen el mayor retorno para tu empresa y te entregamos una propuesta concreta sin compromiso.',
    fine: 'Respuesta garantizada en menos de 24 horas',
  },
};
