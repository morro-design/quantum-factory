# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally, both Spanish-speaking and based in Spain/EU:

- **SME owner or general manager** (clinics, e-commerce/retail, law firms, real estate, hospitality, finance/insurance, logistics, agencies, professional services). Non-technical. Has recurring manual work and strategic data; is deciding whether AI is worth the money and whom to trust with it. Needs ROI clarity and low-risk first step.
- **CTO / IT lead at a mid-size company.** Technical buyer comparing vendors on architecture, code ownership, EU hosting, RGPD, and integration with existing systems (CRM, ERP, WhatsApp, Slack, Gmail, Notion, databases).

Every surface must serve both at once: the owner reads for trust and return; the technical lead reads for ownership, compliance, and stack.

## Product Purpose

Quantum Factory is a boutique AI & Data agency ("Boutique AI & Data") that designs and puts into production applied-AI systems for businesses: automation, agents, chatbots, voice agents, document processing, internal assistants, data analysis, integrations, custom solutions, and AI strategy. The site (quantumfactory.io) exists to convert visitors into a free 20-minute diagnostic call. Success = qualified diagnostic requests from the two audiences above.

## Positioning

The claim is the **package**, not any single piece:

1. **Economic diagnostic first** — quantify hours and € impact before writing code; only build where return is proven.
2. **Working prototype in ~15 days on the client's real data** before any larger commitment.
3. **100% of the code transferred to the client**, deployed on the client's own or EU-sovereign infrastructure — no monthly license, no vendor lock-in.

Diagnostic → 15-day prototype → transferred code. A neighboring agency can copy one of these; the sequence as a standing promise is the position.

## Operating Context

- Language: Spanish (`es`), locale `es_ES`. Contact hours Mo–Fr 09:00–19:00. Locations: Madrid and Valencia. Area served: Spain and EU.
- Conversion path: free 20-minute diagnostic session → response promised in < 24h → prototype in ~2 weeks. NDA on request. No hiring commitment.
- Service catalog: 12 lines, coded `QF·01`–`QF·12`, grouped in 4 families (A: Automatización & Agentes; B: Documentos, Conocimiento & Contenido; C: Datos, Integración & Medida; D: Estrategia & Consultoría). Content lives in `src/data/services.json`; families and shared copy in `src/data/services.ts`.
- Delivery mode: "A medida / Llave en mano". Deployment: "EU-hosted · 100% RGPD". Methodology: milestones, 15-day sprints, tests on client data before scaling.
- Compliance vocabulary in use: RGPD, AI Act UE, soberanía europea, zero-data leakage.

## Capabilities and Constraints

- Static site. Astro 7 + Tailwind CSS 3, output to `dist/`, deployed on Vercel (`cleanUrls`, no trailing slash, `build.format: 'file'`). Node ≥ 22.12.
- Routes: `/` (home), `/servicios` (catalog), `/servicios/[slug]` (12 detail pages). Sitemap, robots, OG image, JSON-LD (Organization, WebSite, Service, FAQPage, BreadcrumbList, ItemList).
- Contact: currently `mailto:hola@quantumfactory.io` and `tel:+34918082412`. **Open:** a booking link / form exists (Calendly or similar) — URL not yet provided; contact CTAs should point to it once supplied.
- **Open:** legal pages (Aviso Legal, Privacidad RGPD, AI Governance & Act) exist or will exist; footer links are `#` placeholders to wire when content lands.
- Terminology to keep: "diagnóstico", "prototipo funcional", "código 100% propietario / transferido", "llave en mano", "familia" (service group), "QF·NN" codes.

## Brand Commitments

- Name: **Quantum Factory**. Descriptor: "Boutique AI & Data". Domain quantumfactory.io.
- Voice (as shipped, Spanish, informal `tú`): direct, anti-hype ("No vendemos humo ni licencias cautivas"), engineering-led, concrete about ownership and timelines.
- Existing brand assets in `public/`: `logo-lima.svg`, `logo-blanco.svg`, `logo-oscuro.svg`, `quantum-{lima,blanco,oscuro}.svg` (mark), `star-lima.svg`, `star-gradient*.svg`, `esfera.svg`, `gradient.svg`, `pixels-*-lima.svg`, `og.png`, favicons.
- Existing brand colors (recorded as incumbent evidence, not a visual directive): lima `#CCFF00`, midnight `#08090D`, navy `#0E0F17`, coral `#FF6B7A`, crimson `#9E3B42`, slate `#1E202B`, muted `#8A8F9E`; families B and C use amber and cyan accents.

## Evidence on Hand

- **No client cases, testimonials, logos, ratings, or outcome metrics.** Company founded 2026, pre-portfolio. Future work must not fabricate any of these. The shipped "4.9 Score de Operatividad" and "Acompañamiento técnico 24/7" claims have no backing and should be removed or replaced with verifiable statements.
- Real evidence available: the 12 service descriptions with capabilities, steps, outcomes, and FAQs (`src/data/services.json`); the stated methodology and commitments (diagnostic, 15-day prototype, code transfer, EU hosting, < 24h response); organization facts (email, phone, cities, hours).
- Assets: brand SVGs and OG image listed above. No product screenshots, demos, or photography.

## Product Principles

1. **Prove before you build.** Every promise on the site maps to the diagnostic → prototype → transfer sequence; nothing is claimed that the process cannot deliver.
2. **Two readers, one page.** Owner-level clarity (return, risk, time) and technical-level specifics (ownership, hosting, integration) coexist in every surface without splitting the audience into separate paths.
3. **Ownership and sovereignty are the wedge.** Code transfer, EU deployment, and RGPD/AI Act compliance are stated concretely and repeatedly, never as decoration.
4. **No invented proof.** Until real cases exist, credibility comes from specificity of method, scope, and terms — not from ratings, logos, or numbers without a source.
5. **One conversion.** Every surface ends in the free 20-minute diagnostic; secondary paths lead to the catalog, not away from the call.

## Accessibility & Inclusion

No product-specific standard established. Spanish-language site; Safari/iOS ≥ 15 in the browserslist target.
