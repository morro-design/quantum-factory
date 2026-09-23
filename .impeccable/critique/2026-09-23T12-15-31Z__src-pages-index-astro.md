---
target: the landing page
total_score: 15
max_score: 28
na_heuristics: 7,9,10
p0_count: 2
p1_count: 2
p2_count: 1
target_identity: "file:C:\\Users\\reliu\\Documents\\quantum-factory\\src\\pages\\index.astro"
target_fingerprint: "sha256:a208add7f21545c9e763c68a25da237c0277f16adec81267248f73bf5bce06ea"
target_path: "C:\\Users\\reliu\\Documents\\quantum-factory\\src\\pages\\index.astro"
timestamp: 2026-09-23T12-15-31Z
slug: src-pages-index-astro
---
Method: dual-agent (A: ses_f31f0a1beffeD3JOuDvgKkfhWc · B: ses_f31f052e6ffel1DuVYoH45WZcp)

# Design Critique — Landing page (`src/pages/index.astro`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Menus announce state well (aria-expanded, Esc, label swap — Header.astro:209-241), but `Agendar diagnóstico` (Header.astro:105) only scrolls to a banner; nothing tells the visitor they haven't scheduled anything. 4–5 `animate-pulse` dots pulse at once, so "live" signals nothing. |
| 2 | Match System / Real World | 2 | `tú` voice is right (`Cuéntanos qué debería hacer la IA por tu negocio.`), but scan-path jargon walls: `Datos & RAG Soberano`, `zero-leakage y RGPD compliant` (Services.astro:52-53), `Guardarraíles de producción` (Differentials.astro:59), and `4.9 Score de Operatividad` — a scale that exists in no real world. |
| 3 | User Control and Freedom | 3 | Esc closes both menus, outside-click closes the dropdown, drawer closes on navigate. Weakened by three footer legal links with `href="#"` (Footer.astro:102-106) that silently dump the user at page top. |
| 4 | Consistency and Standards | 2 | One conversion, six labels (`Hablemos de tu reto`, `Agendar diagnóstico`, `Iniciar evaluación de viabilidad`, `Agendar diagnóstico gratuito`…); purple/emerald cards break the four-accent system; neutral `shadow-2xl`/`shadow-md`/`shadow-lg` survive (Services.astro:142,147,185; Method.astro:26,53,82); terminals differ (most CTAs → `#contacto`, contact CTA → `mailto:`). |
| 5 | Error Prevention | 2 | No form to mistype (good), but labels actively mislead: `Agendar diagnóstico gratuito` opens a mail composer (Contact.astro:29); `Escuchar demos` (Services.astro:112) promises audio — `services.json` has no demo content. |
| 6 | Recognition Rather Than Recall | 2 | Options visible but unchunked: desktop dropdown is 12 flat services + `Ver el catálogo completo` = 13 equal-weight targets (Header.astro:62-87) with the A–D family taxonomy hidden; `01–06` grid numbering collides with the real `QF·01–QF·12` codes. |
| 7 | Flexibility and Efficiency | n/a | Static Persuade surface; no expert accelerators, shortcuts, or bulk actions can exist. |
| 8 | Aesthetic and Minimalist Design | 2 | The system's own rules are violated by noise: icon-plus-blurb grid DESIGN.md bans, six fabricated stat badges, avatar-dot faux-social-proof, two stars + animated orb + six saturated gradient cards. Every card's decoration is louder than the one conversion. |
| 9 | Error Recovery | n/a | No forms, inputs, or async failure states on a static page; nothing produces an error message. Silent dead ends scored under #3/#5. |
| 10 | Help and Documentation | n/a | Persuade mode marketing surface; no task documentation exists or is expected (help = contact block). |
| **Total** | | **15/28** | **Acceptable (54%)** |

## Design Specificity Verdict

**Does this feel authored for Quantum Factory, or category-interchangeable?** Partially authored voice, generic skeleton.

**LLM assessment**: The *voice* is unmistakably QF — `No vendemos humo ni licencias cautivas.` (Statement.astro:36), the 01/02/03 triad stating the full wedge (`Diagnóstico económico previo` / `Prototipo funcional en 15 días` / `Código 100% tuyo y transferido`), and Method's spec table (`Propiedad intelectual: 100% transferida`, `Infraestructura: Nube propia / Soberana`). That is the position stated as terms, not vibes. But the *skeleton* is the stock AI-agency template: hero + dual CTA + avatar-dot "social proof" strip, six icon-plus-blurb gradient feature cards, three "how it works" step cards, a 4-quadrant "Por qué elegir…" block, centered CTA banner. Every competitor's landing has this shape. Category-interchangeable tell: `IA que trabaja para tu empresa.` + `…ROI demostrado.` (Hero.astro:60-61,7) could headline any of 500 agencies; `Hablemos de tu reto` is a generic agency CTA for a conversion that is a *specific* 20-minute economic diagnostic. Missed character: the wedge arrives two sections late; the hero never says "diagnóstico gratuito de 20 minutos", "15 días", or "código tuyo"; the real `QF·01–QF·12` taxonomy appears nowhere on the homepage (the grid invents a colliding `01–06`, Services.astro:12); the A–D families are invisible in the nav. **Two-audience check**: partially failing — owner and CTO both get served *below* the fold, but the hero serves neither reader's core question. **"No invented proof" check**: violated in eight shipped strings (see P0 #1) — including the avatar-dot strip around a fake rating (Hero.astro:88-92), the exact template device the principle forbids.

**Deterministic scan**: 39 canonical findings across `src/components`, `src/layouts`, `src/data` (`index.astro` itself scans clean) — **4 real, 35 false positives**. Real: off-system purple accent (Services.astro:25) and emerald accent (Services.astro:101), confirming DESIGN.md's Don't; hero kicker at `text-[10px]` (Hero.astro:51) and H1 base at `text-[2.75rem]` (Hero.astro:58), both below the documented type ramp. False positives: gradient stops implementing the committed card/sphere ramps, the oxblood radial ground, and an `overused-font` flag on Plus Jakarta Sans — which is the committed display face. Detector agreement with the LLM review is exact on the purple/emerald cards (folded into Priority Issue #4). Detector additions the review had framed differently: the two off-ramp font sizes. Detector gaps (no rule, corroborated manually): `focus:outline-none` at Header.astro:34,109 and legacy neutral shadows (`shadow-2xl` Services.astro:142, Method.astro:26,53,82; `shadow-lg` Services.astro:147; `shadow-md` Services.astro:185).

**Visual overlays**: not available. No browser-automation tool is exposed in this session, so no live server was started and no script injection was attempted. **No user-visible overlay exists; no `[Human]` tab was opened.** Fallback signal: CLI detector scan only.

## Overall Impression

The design system is real and the writing occasionally excellent — but the page is a template wearing the system's clothes, and it ships fabricated proof that directly contradicts its own best line (`No vendemos humo`). The single biggest opportunity: make the diagnostic itself the hero and delete every number without a source. Do that and 15/28 becomes a very different page.

## What's Working

1. **The Statement wedge, verbatim.** `No vendemos humo ni licencias cautivas.` + `Entendemos tu proceso a fondo y cuantificamos el impacto económico y las horas recuperables antes de escribir una sola línea de código.` (Statement.astro:6-7,36) — the anti-generic core: diagnostic-first method in the owner's language, an implicit no-vaporware promise to the CTO, zero invented metrics.
2. **Method's spec-sheet treatment** (Method.astro:126-139). `Metodología ágil: Sprints de 15 días / Propiedad intelectual: 100% transferida / Infraestructura: Nube propia / Soberana` with `Sem 01 / 15 días / 100%` Space Grotesk metrics — one breath that serves both audiences. This is the design system doing persuasive work.
3. **Contact banner's terms copy** (Contact.astro:21-24,41-47). `Una conversación técnica de 20 minutos… sin rodeos.` + `✓ Respuesta en < 24h · ✓ Sin compromiso de contratación · ✓ NDA bajo petición` — specific, honest, low-risk framing at exactly the decision moment, and the one place the page sells the *actual* conversion.

## Priority Issues

**1. [P0] Unsupported proof ships in eight places.**
**What**: `4.9 Score de Operatividad` (Hero.astro:92), `ROI demostrado` (Hero.astro:7, site.ts:21), `+85% eficiencia` (Services.astro:20), `+3.4x Cierres` (Services.astro:77), `99.4% Precisión` (Services.astro:96), `<450ms Latencia` (Services.astro:115), `ROI medible desde el primer mes` (Services.astro:132), `Acompañamiento técnico 24/7` (Differentials.astro:58) — plus the avatar-dot strip imitating testimonial proof (Hero.astro:88-91).
**Why it matters**: PRODUCT.md forbids exactly this for a 2026 pre-portfolio company. It destroys the credibility the "prove before you build" position depends on, hands Riley and every CTO a reason to disbelieve the *true* claims (`100% transferido`, `15 días`), and self-contradicts twice on-page: `<450ms` vs `services.json:628` (`latencias inferiores a un segundo`) and `24/7` vs the footer's own `LUN — VIE 09:00h — 19:00h` (Footer.astro:52-53).
**Fix**: delete every unsourced number and the avatar strip; replace badges with verifiable scope facts (`RGPD · AI Act UE`, `Datos en tu servidor`, `Código transferido`); `ROI demostrado` → `retorno cuantificado antes de construir`; `Acompañamiento técnico 24/7` → `Soporte directo de ingeniería · L–V 9–19`.
**Suggested command**: `$impeccable audit`

**2. [P0] The conversion's promise and mechanism don't match.**
**What**: `Agendar diagnóstico gratuito` → `href="mailto:hola@quantumfactory.io"` (Contact.astro:28-33); nav `Agendar diagnóstico` (Header.astro:101-107) and hero `Hablemos de tu reto` (Hero.astro:71) only scroll to `#contacto`.
**Why it matters**: on a Persuade surface the single conversion *is* the task. "Agendar" promises scheduling and delivers an empty email composer at the highest-stakes moment; Casey on iOS gets dumped into Mail with no template; the known missing booking link is precisely where the funnel dies.
**Fix**: wire the booking URL to every `Agendar` CTA the moment it exists; until then relabel honestly (`Escríbenos: hola@quantumfactory.io`) with prefilled `mailto:?subject=Diagnóstico 20 min`, add `tel:+34918082412` in the Contact banner (it exists only in the footer), and state what happens next (`Te respondemos en < 24h con 3 huecos`).
**Suggested command**: `$impeccable clarify`

**3. [P1] Hero sells generic AI, not the wedge; the CTA row forks the decision.**
**What**: `IA que trabaja para tu empresa.` + `…ROI demostrado.` + two equal pills (`Hablemos de tu reto` / `Ver los 12 servicios`) + score strip (Hero.astro:56-93).
**Why it matters**: Jordan's 5-second scan gets a category-interchangeable claim with no mention of diagnóstico, 15 días, or code ownership — the three things PRODUCT.md says *are* the position. The secondary CTA competes with the only conversion at the top of the funnel, and the faux-rating strip repels the CTO on sight.
**Fix**: rewrite H1 around the standing promise (e.g. `Diagnostica el retorno. Prototipo en 15 días.` + serif lima turn `El código es tuyo.`); single primary CTA `Agenda el diagnóstico gratuito · 20 min`; demote `Ver los 12 servicios` to a bare text link; delete the score strip or replace with `Madrid · Valencia · EU-hosted`.
**Suggested command**: `$impeccable distill`

**4. [P1] Services grid is the template core and the page's biggest load failure.**
**What**: six icon-plus-blurb gradient cards with off-system purple (Services.astro:25) and emerald (Services.astro:101) — the detector's only real findings — legacy neutral shadows (Services.astro:142,147,185; Method.astro:26,53,82), colliding `01–06` pseudo-codes instead of `QF·01–QF·12`, 6 of 12 shown with no family framing, six fabricated stat badges.
**Why it matters**: DESIGN.md bans icon-plus-blurb feature grids outright; this six-card wall is the loudest section on a Persuade page and the main source of the four cognitive-load failures (6 destinations × varying CTAs × fake stats).
**Fix**: rebuild as the system's spec-sheet — one row per family A–D (`families[]` in services.ts:38-95 already exists) with `QF·NN` codes, hairline rows or 24px cards, family accents lima/amber/cyan/coral only, no decorative icons, no stat badges, neutral shadows retired everywhere.
**Suggested command**: `$impeccable layout`

**5. [P2] Closing screen leaks trust: dead legal links + fragmentary focus states.**
**What**: `Aviso Legal`, `Privacidad RGPD`, `AI Governance & Act` all `href="#"` (Footer.astro:102-106); `focus:outline-none` on both nav triggers with visible rings *only* there (Header.astro:34,109); every CTA and footer link has no visible focus style.
**Why it matters**: peak-end rule — the last thing a compliance-sensitive buyer clicks is `Privacidad RGPD` and it jumps to the top of the page; keyboard visitors lose their place at the exact decision moment. On an RGPD-positioned site, a `#` link is worse than none.
**Fix**: ship or hide the three legal pages; one global `:focus-visible` rule (2px lima ring, 2px offset) in global.css; delete all `focus:outline-none` instances.
**Suggested command**: `$impeccable harden`

## Persona Red Flags

**Jordan (Confused First-Timer)**
- *Scan value*: H1 explains nothing about what's bought; `4.9 Score de Operatividad` cannot be interpreted — what was scored, by whom, on what scale? First trust cue is uninterpretable before it's even disbelieved.
- *Trust*: `Datos & RAG Soberano`, `zero-leakage y RGPD compliant`, `Guardarraíles de producción` assume prior knowledge with no definition anywhere; `Escuchar demos` is an ambiguous label pointing at a page with no demo.
- *Request the call*: clicks `Privacidad RGPD` before handing over an email → `#` dead end → abandonment. If they proceed, the mailto gives zero guidance on what to write. Three names for one step (`Hablemos de tu reto` / `Iniciar evaluación de viabilidad` / `Agendar diagnóstico`) — Jordan can't tell if they're the same action.

**Riley (Deliberate Stress Tester)**
- *The kill shot*: verifies `4.9`, `+85%`, `99.4%`, `+3.4x`, `<450ms` — zero sources — then catches the page contradicting itself: `ROI demostrado` vs `cuantificamos el impacto… antes de escribir una sola línea de código`; `<450ms` vs services.json's `latencias inferiores a un segundo`; `24/7` vs footer hours; `No vendemos humo` three sections from the fake score strip.
- *Interaction probing*: all three legal links jump to top (promise vs behavior, silent failure); `Escuchar demos` opens a page with no audio; hero says 12 services, grid shows 6 with `01–06` numbering that matches nothing in the catalog's `QF·01–QF·12`.
- *Request the call*: tests the four CTA labels' terminals — same intent, different destinations (`#contacto` ×3, `mailto:` ×1) — then mails and has no way to verify the "Respuesta en < 24h" promise.

**Casey (Distracted Mobile User)**
- *Scan value*: on <640px the header CTA `Agendar diagnóstico` is `hidden sm:inline-flex` (Header.astro:102) — **the conversion button does not exist in the header on Casey's phone**. Hero kicker at `text-[10px]` and badges at `text-[11px]` are below comfortable mobile reading size (both flagged by the detector as off-ramp); the ambient orb sits behind the copy at `opacity-70`.
- *Trust*: the mobile drawer stacks 17 tap targets before its CTA (Header.astro:136-188); six ~400px cards + three ~500px pillars + quadrants between Casey and the final ask, with no sticky mobile CTA anywhere.
- *Request the call*: `mailto:` on iOS is a hard dead end if no Mail account is configured; no form and no `tel:` in the Contact section — the one-handed "tap and talk" path is missing. Touch targets themselves are decent (`min-h-[44px]`/`min-h-[52px]`).

## Minor Observations

- Home grid labels (`01 / FLUJOS INTELIGENTES`…) rename services (`Automatización de procesos con IA` → `Flujos Autónomos`), so nothing on the homepage matches the catalog's labels — two naming systems plus two numbering systems for one taxonomy.
- 4–5 `animate-pulse` dots render simultaneously (Header.astro:106; Services.astro:11,68; Method.astro:10; Differentials.astro:79) — DESIGN.md allows one "live" dot per viewport.
- `Guardarraíles` (Differentials.astro:59) is misspelled — `guardarraíles`.
- `Soluciones de IA construidas para producción®` (Services.astro:129) — `®` on a generic phrase reads as costume jewelry.
- `Volver arriba` is `href="#"` (Footer.astro:92) — same jump artifact as the legal links.
- Method pillar gradients run to fully saturated `#ff6b7a`/`#d84f66` (Method.astro:54,83) — closer to the rejected SaaS gradient-blob than the committed sphere radial.
- Footer wordmark `drop-shadow-[0_10px_40px_rgba(255,255,255,0.05)]` (Footer.astro:82) violates the Colored Glow Rule (neutral shadow).
- `defaultDescription` (site.ts:20-21) repeats `ROI demostrado` in the SERP snippet — the overclaim ships to Google too.
- Off-ramp type steps (detector, real): hero eyebrow `text-[10px]` (Hero.astro:51), H1 base `text-[2.75rem]` (Hero.astro:58).
- Kicker conventions drift across sections (`Hitos 01 — 03`, `QF · Enfoque…`, `04 DIFERENCIALES CLAVE` — reads as "step 04" ambiguously).
- Credit where due: `LiquidOrb` handles `prefers-reduced-motion` and pauses off-screen (LiquidOrb.astro:130-132) — genuine craft.
- DESIGN.md's recorded gap "no mobile navigation below `md`" is **stale** — Header.astro:108-191 ships a full hamburger drawer; and `focus:outline-none` is now paired with `focus-visible:ring-2` on the two nav triggers only.

## Questions to Consider

1. What if the hero *was* the diagnostic — a one-line micro-commitment (`Horas/semana que tu equipo pierde en tareas repetitivas: [___]`) that outputs a rough € estimate and ends in `Agenda los 20 minutos para validarlo`? "Prove before you build" would become the interaction instead of a claim.
2. With proof assets forbidden until the first client, which *artifact* replaces proof: a readable sample "contrato de transferencia de código", a public Sem 01 → Sem 02 sprint board with named deliverables, or the diagnostic's own one-page output shown as a specimen? Which ships without inventing a single number?
3. Why is `15 días` a metric block instead of a calendar, and why is the CTO's real checklist (deploy target, repo ownership, integration surface: CRM/ERP/WhatsApp/Slack/Notion) buried in service detail pages? Wouldn't one key/value table — `Propiedad: 100% transferida · Despliegue: EU / tu nube · Integraciones: tu stack · Plazo: 15 días · Compromiso: ninguno` — outperform the entire `Por qué elegir Quantum Factory` quadrant grid?
