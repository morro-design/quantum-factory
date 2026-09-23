---
name: Quantum Factory
description: Engineering-editorial dark system for a boutique AI & Data agency — monumental light headlines on carbon black, one acid-lima highlighter, coral warmth.
colors:
  acid-lima: "#CCFF00"
  acid-lima-pressed: "#B8E600"
  signal-coral: "#FF6B7A"
  oxblood: "#9E3B42"
  orb-red: "#AD4544"
  orb-dark: "#1F1E26"
  orb-dark-top: "#1C171B"
  orb-dark-lower-left: "#281F34"
  orb-dark-lower-right: "#412929"
  orb-violet: "#524153"
  orb-gold: "#C7B472"
  orb-coral: "#FF8B94"
  carbon-black: "#08090D"
  carbon-ink: "#0C0D13"
  carbon-void: "#090A0F"
  carbon-navy: "#0E0F17"
  carbon-plum: "#12131C"
  graphite: "#1E202B"
  steel-muted: "#8A8F9E"
  paper: "#FAFAFA"
  white: "#FFFFFF"
  ink-800: "#262626"
  ink-600: "#525252"
  ink-500: "#737373"
  ink-400: "#A3A3A3"
  ink-300: "#D4D4D4"
  amber-family: "#FBBF24"
  cyan-family: "#22D3EE"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.4rem)"
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  display-turn:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontWeight: 300
    fontStyle: "italic"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  metric:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3.75rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lede:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.625
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  label-sm:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  md: "8px"
  xl: "16px"
  2xl: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "96px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.acid-lima}"
    textColor: "{colors.carbon-black}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.acid-lima-pressed}"
    textColor: "{colors.carbon-black}"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.white}"
  button-mono:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-mono-hover:
    backgroundColor: "{colors.acid-lima}"
    textColor: "{colors.carbon-black}"
  nav-cta:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.white}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  nav-cta-hover:
    backgroundColor: "rgba(255,255,255,0.20)"
    textColor: "{colors.acid-lima}"
  eyebrow-pill:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.acid-lima}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  card-dark:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "32px"
  card-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon-black}"
    rounded: "{rounded.2xl}"
    padding: "28px"
  card-light-hover:
    backgroundColor: "{colors.carbon-black}"
    textColor: "{colors.white}"
  nav-dropdown:
    backgroundColor: "rgba(12,13,19,0.95)"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "16px"
---

# Design System: Quantum Factory

## Overview

**Creative North Star: "The Engineering Editorial"**

A serious technical magazine printed on black paper. The page is carbon, the type is monumental and light-weight, and one acid highlighter (lima) marks what matters. Everything else is set in the register of a spec sheet: mono index marks (`01`, `QF·07`, `Sem 01`), hairline rules, numbered milestones, key/value tables. The system persuades by looking like it was engineered, not marketed — which is the product's own claim (diagnostic → prototype → transferred code).

Warmth comes from two places only: the italic serif "turn" at the end of a headline (*tu empresa.*, *en semanas.*, *gratuito.*), and the coral/oxblood glow of the chromatic spheres and gradient cards. Those are the human, editorial gestures inside an otherwise sober instrument. Density is generous: sections breathe at 96–112px, headlines take a full column, and grids are asymmetric (4/8, 6/6 of twelve) rather than centered stacks.

Confirmed rejections: no AI clichés (brains, circuit boards, robots, neural-net imagery), no sparkle or particle effects, no neutral drop-shadows as a lift device, no generic SaaS gradient-blob backgrounds beyond the committed corporate gradient on the home hero and contact section.

**Key Characteristics:**
- Carbon-black ground alternating with paper/white editorial sections
- One acid-lima highlighter, rationed; coral/oxblood as the warm secondary
- Light-weight (300) monumental headlines with an italic serif turn in lima
- Mono uppercase kickers, index numbers, and spec tables everywhere
- Hairline (8%) borders and tonal layering instead of shadows; colored glow only
- Pill geometry for every interactive element; 16–24px radii for containers
- Chromatic radial-gradient spheres and the lima star as the only decorative objects

## Colors

Near-black carbon tones layered by section, one acid highlighter, one warm signal pair, and Tailwind neutrals for the light editorial pages.

### Primary
- **Acid Lima** (`#CCFF00`): the highlighter. Primary CTA fill, italic headline turns, active nav state, kickers on dark, status dots, the star asset, focus/hover borders. Rationed — see rule below.
- **Acid Lima Pressed** (`#B8E600`): primary button hover only.

### Secondary
- **Signal Coral** (`#FF6B7A`): warm counterweight. Sphere and gradient-card glow, family D (Estrategia) accent, secondary status dot, hover borders on warm cards, "Quantum Factory" in the Differentials headline.
- **Oxblood** (`#9E3B42`): coral's ink on light ground. Kickers, `®`, strong spans, and mono index numbers on paper/white sections where lima would not read.

### Tertiary (service-family accents)
- **Amber Family** (`#FBBF24`, Tailwind amber-400): family B (Documentos, Conocimiento & Contenido) and "Retorno Medible" quadrant.
- **Cyan Family** (`#22D3EE`, Tailwind cyan-400; text uses cyan-300 `#67E8F9`): family C (Datos, Integración & Medida) and "Soporte & Integración" quadrant.
- Family A uses Acid Lima; family D uses Signal Coral. The home Services grid also uses one-off purple-400 and emerald-400 cards — off-system; do not extend.

### Neutral
- **Carbon Black** (`#08090D`): body and hero ground; the "midnight" token; theme-color.
- **Carbon Ink** (`#0C0D13`): method section, nav dropdown, combos section.
- **Carbon Void** (`#090A0F`): differentials ground under its oxblood radial.
- **Carbon Navy** (`#0E0F17`): token exists (`brand-navy`); reserved, lightly used.
- **Carbon Plum** (`#12131C`): dark supporting ground. The home hero and contact banner use the sampled corporate gradient; the hero applies it at 28% opacity so its text and animated sphere remain the focal points.
- **Graphite** (`#1E202B`): token exists (`brand-slate`); reserved.
- **Steel Muted** (`#8A8F9E`): secondary text and nav links on dark; footer meta.
- **Paper** (`#FAFAFA`): statement section ground, light catalog cards.
- **White** (`#FFFFFF`): services section ground, primary text on dark.
- **Ink 800 / 600 / 500 / 400 / 300** (`#262626` / `#525252` / `#737373` / `#A3A3A3` / `#D4D4D4`): text hierarchy on light sections (heading / body / meta / decorative) and on gradient cards (300 = body on dark gradient, 400 = secondary on dark).
- Translucent whites carry structure on dark: borders at 6–10% (`rgba(255,255,255,0.06–0.10)`), fills at 3–10%, hairlines at 8%. On light: borders at 6–8% black.

### Named Rules
**The Highlighter Rule.** Acid Lima is applied like a marker to a printed page: one CTA, one italic turn, kickers, and dots. If a viewport shows lima on more than ~10% of its area, something is wrong.

**The Oxblood Substitution Rule.** On paper/white ground, lima is not the accent — Oxblood is. Lima only appears on light sections inside a dark object (e.g. the inverted catalog card on hover).

**The Tonal Ground Rule.** Sections alternate ground (carbon → paper → white → ink → void → plum). Depth between sections is tonal, never a shadow.

## Typography

**Display Font:** Plus Jakarta Sans (with sans-serif fallback) — loaded weights 300/400/500/600/700 + italics 300/400/600
**Metric Font:** Space Grotesk (with sans-serif fallback) — 300–700, used via `font-display`
**Body Font:** Plus Jakarta Sans
**Label/Mono Font:** system mono stack (Tailwind default: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas…) — not pinned to a webfont
**Serif Turn:** system serif stack (Tailwind default: ui-serif, Georgia, Cambria, Times…) — not pinned to a webfont

**Character:** A light geometric sans set very large, undercut by mono spec labels. The italic serif turn is the one flourish, always at the end of a line and always in lima (or coral on the Differentials headline). Space Grotesk appears only where numbers are the content — metric blocks, milestone weeks, family letters.

### Hierarchy
- **Display** (300, `clamp(3rem, 7vw, 5.4rem)` ≈ 48→86px, line-height 1.03, tracking −0.035em): page H1 only. Two lines max; second line or last phrase set in the serif turn.
- **Headline** (300, 36→48px, line-height 1.08–1.15, tracking −0.025em): section H2. May carry a serif turn or a colored `<span>` (oxblood on light, coral on dark). Exception: the Differentials H2 is Space Grotesk 700 at 52px — an incumbent variance, not a second style.
- **Metric** (Space Grotesk 300, 60→72px, line-height 1, tracking −0.05em): big numbers (`100%`, `15 días`, `Sem 01`). Unit suffix drops to 24px sans 400 in ink-400/white-80.
- **Title** (700, 18–24px, line-height 1.375, tracking −0.025em): card and quadrant H3.
- **Body** (400, 14px, line-height 1.625): card copy, list items, paragraphs on dark in neutral-300/400 and on light in ink-600.
- **Lede** (300–400, 16–18px, line-height 1.625): section intro under H2; max ~2xl container (42rem).
- **Label** (mono 500–600, 11–12px, tracking 0.1em, UPPERCASE): kickers, breadcrumb, spec keys, footer meta, button-mono text.

### Named Rules
**The Serif Turn Rule.** Italic serif is never a full headline. It closes one: the final clause, on its own line where possible, in the accent color.

**The Spec Sheet Rule.** Every section opens with a mono uppercase kicker (dot + label), and every list of facts is set as mono key/value or numbered `01 / …` — never as icon-plus-blurb feature grids.

## Layout

Single content container at `max-width: 80rem` (1280px) with 24px side padding. Vertical rhythm: sections at 96px (`py-24`) or 112px (`py-28`); hero at `min-height: 92vh` with 112px top / 80px bottom. Fixed 80px header with 90% carbon + `backdrop-blur`.

Section grids are twelve-column at `lg` (1024px) and split asymmetrically: 6/6 (statement), 8/4 (method: three pillar cards left, copy right), 4/8 (differentials: copy left, 2×2 quadrants right). Inside those, card grids run 1 → 2 → 3 columns (`md` 768 / `lg`) with 20–32px gaps. Metric rows are 3-up with 40–56px gaps. The lead banner is the one centered composition (`max-width: 64rem`, centered text).

Breakpoints are Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Below `md`, nav links hide (no mobile menu is implemented — a gap), the sphere shifts off-canvas right, and grids stack. Card minimum heights hold rhythm: 400px (service cards), 500px (method pillars), 280px (catalog cards), 240px (combos).

Spacing scale as used: 4 / 8 / 16 / 24 / 32 / 48px, card padding 28–32px, kicker-to-headline 16–24px, headline-to-lede 16–24px, CTA row 32–48px below copy.

## Elevation & Depth

Tonal layering, not shadow. Depth is conveyed by stacking translucent white fills (3% → 10%) and hairline borders (6–10%) on carbon, by section-to-section ground changes, and by the radial gradients that give spheres and cards their volume. The only shadows that belong to the system are **colored glows**: lima under the primary CTA, coral around the sphere, lima behind the star.

The incumbent code still applies neutral `shadow-2xl` (`0 25px 50px -12px rgba(0,0,0,0.25)`) to gradient cards and `shadow-md` to one dark button. Confirmed direction: retire these; cards lift by tone and 4–6px translate, not by shadow.

### Shadow Vocabulary
- **CTA glow** (`box-shadow: 0 10px 15px -3px rgba(204,255,0,0.2), 0 4px 6px -4px rgba(204,255,0,0.2)`): under the primary lima button; `shadow-xl` variant on the lead banner.
- **Sphere glow** (`box-shadow: 0 0 100px rgba(173,69,68,0.12)`): the hero sphere's ambient halo.
- **Star glow** (`filter: drop-shadow(0 0 25px rgba(204,255,0,0.35))`; coral variant `0 0 20px rgba(255,107,122,0.4)`): behind the lima star asset.
- **Legacy (retire):** `shadow-2xl` on gradient/method cards, `shadow-lg` on icon wraps, `shadow-md` on the dark mono button.

### Named Rules
**The Colored Glow Rule.** A shadow is allowed only if it carries the color of the object casting it. Neutral gray shadows do not exist in this system.

**The Hairline Rule.** Structure is drawn with 1px lines at 8% (white on dark, black on light): section dividers, card footers, quadrant separators, spec-table rows.

## Shapes

Two silhouettes: the **pill** and the **soft slab**. Every interactive element — buttons, eyebrows, nav CTA, badges, status dots, icon circles, the arrow chip — is a full pill (9999px). Containers are soft slabs: 16px (`rounded-2xl`) for method pillars, icon wraps, and the nav dropdown; 24px (`rounded-3xl`) for service and catalog cards; 8px (`rounded-lg`) only for dropdown rows. The chromatic sphere is the one pure circle, 520–660px, anchored off the right edge.

Borders are 1px and translucent (white 6–15% on dark, black 6–8% on light); accent borders appear only on hover (accent at 50–60%) or on eyebrow pills (accent at 20%). No outlines thicker than 1px, no dashed strokes, no bevels. The lima four-point star (`star-lima.svg`) is the only glyph-shaped decoration.

## Components

Precise and quietly confident: pill geometry, hairline borders, restrained hover (color shift plus a 2–6px lift). The accent does the talking; the component stays still.

### Buttons
- **Shape:** full pill (9999px).
- **Primary:** Acid Lima fill, Carbon Black text, 700 weight 14px, padding 16px 32px, lima CTA glow. Trailing arrow icon or `→` at 12px gap. Hover: Acid Lima Pressed, `translateY(-2px)`, 200ms.
- **Ghost:** 4% white fill, 10% white border, white text 500 14px, padding 16px 24px. Hover: 8% white fill. Used beside primary as the catalog link.
- **Mono:** mono uppercase 12px 600 tracking 0.1em, padding 14px 24px, 10% white fill + 15% white border (on dark) or `#171717` fill (on light). Hover: lima fill + carbon text (dark) or oxblood fill (light), arrow `translateX(4px)`, 300ms.
- **Nav CTA:** 10% white fill, 15% white border, 12px 600 text, padding 10px 20px, trailing pulsing lima dot. Hover: 20% fill, lima border, lima text.
- **Focus:** not designed; incumbent uses `focus:outline-none` on the nav trigger — a gap. Use a 2px lima ring at 2px offset until a rule is set.

### Chips (eyebrows, badges, spec pills)
- **Eyebrow:** pill, 4% white fill + 8% white border with 16px `backdrop-blur` (`.frosted-pill`) on hero; or accent/10 fill + accent/20 border elsewhere. Leading `✦` or 6px accent dot, mono uppercase 11–12px accent text, padding 6px 14px.
- **Badge:** pill, accent/10–15 fill, accent/20–30 border, mono 11px accent text, padding 2px 8px. Sits at card footer right.
- **Status dot:** 6–8px pill in lima or coral; `animate-pulse` only when signalling "live" (nav CTA, method header).

### Cards / Containers
- **Gradient card (services, method pillars):** 24px / 16px radius, padding 32px / 28px, radial accent-glow at top-right over a dark linear gradient in the family hue, 10% white border, `min-height` 400 / 500px, `flex column, space-between`. Footer separated by a hairline. Hover: border to accent/60, `translateY(-6px)`, 300–500ms.
- **Light catalog card:** Paper fill, 6% black border, 24px radius, padding 28px, `min-height` 280px. Code in oxblood mono, title 700 20px, summary ink-600. Hover: **inverts** to Carbon Black with white text, code turns lima, arrow chip turns lima, `translateY(-4px)`.
- **Combo card:** 3% white fill, 10% white border, 16px radius, padding 28px, big Space Grotesk index in lima. Hover: border lima/50.
- **Quadrant (differentials):** no fill, no radius; cells separated by 15% white 1px lines; padding 32px; hover 2% white wash.
- **Metric block:** Space Grotesk 300 60–72px number with accent-colored unit/`%`, mono uppercase label 14px, 12px description.

### Navigation
- Fixed 80px header, 90% Carbon Black + `backdrop-blur(12px)`, 6% white bottom hairline. Logo (lima SVG, 24px tall) + mono descriptor `Boutique AI · Data` behind a 10% white left rule.
- Links: 14px 500 Steel Muted, hover white, 200ms. "Servicios" trigger opens a 580px dropdown: 95% Carbon Ink + blur, 10% white border, 16px radius, 16px padding, mono lima header row, two-column list of 12 services with zero-padded index in lima/70 and 12px white titles; row hover 5% white fill, 8px radius.
- No mobile navigation exists below `md` — gap.

### Signature Component: Chromatic Sphere
A 520–660px circle anchored `right: −80px → −40px`, vertically centered. The home hero uses a sampled five-color liquid gradient: red `#AD4544` at the upper left, dark `#1F1E26` at the center, violet `#524153` near (73%, 27%), gold `#C7B472` at the upper right, and coral `#FF8B94` at the lower right. Broad radial fields preserve this composition while translucent layers drift slowly inside the circle. A fixed warm highlight at the upper right, deep internal shading at the lower left, a faint lit rim, and an offset cast shadow give it spherical volume. The text stays fixed and legible; animation pauses offscreen and under reduced motion. Service detail heroes retain their family-specific static gradients (see `families[].gradient`).

### Signature Component: Lima Star
`star-lima.svg` at 48–64px with the star glow, placed as a suspended accent (top center of hero, top right of catalog hero) and at 40% opacity as a secondary ambient mark. Never more than two per viewport.

## Do's and Don'ts

### Do:
- **Do** open every section with a mono uppercase kicker preceded by a 6px accent dot or `✦`.
- **Do** end a display or headline line with an italic serif turn in Acid Lima (or Signal Coral on dark warm sections).
- **Do** alternate section grounds (carbon / paper / white / ink / void / plum) and let that alternation do the work of depth.
- **Do** switch to Oxblood as the accent on paper/white sections.
- **Do** use hairlines (1px, 8%) for all structural division: card footers, spec rows, section rules, quadrant grids.
- **Do** keep hover to a color shift plus a 2–6px lift at 200–300ms; keep `animate-pulse` for a single "live" dot per viewport.
- **Do** express big facts as Space Grotesk 300 metrics with the unit or `%` in the accent.

### Don't:
- **Don't** apply neutral gray box-shadows; only colored glows exist.
- **Don't** use lima on more than roughly a tenth of any viewport, or as body text color.
- **Don't** introduce new accent hues per card (the purple/emerald service cards are off-system); families are lima, amber, cyan, coral only.
- **Don't** use AI-cliché imagery (brains, circuits, robots, glowing neural nets) or particle/sparkle effects.
- **Don't** set the serif italic as a full headline or as body copy.
- **Don't** use square corners on interactive elements or radii other than 8 / 16 / 24 / pill.
- **Don't** center-stack sections by default; the one centered composition is the lead banner.
