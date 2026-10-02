# Mextas Design System

**Mextas** is a Mexican technology firm that builds digital solutions for businesses: corporate websites, e-commerce, custom business systems, process automation, integrations, CRM, analytics dashboards, marketing/SEO, consulting and ongoing platform support. Core message: **Mextas turns business problems into digital solutions** — it doesn't just "make websites".

The main surface is a premium B2B marketing site (Spanish, for Mexican companies) that works like a product: visitors pick their problem, explore solutions, try demo dashboards, go through a diagnosis and ask for a proposal.

## Sources
- `uploads/b2bmextas.png` → copied to `assets/reference/b2bmextas.png`. This is the main visual reference: a full-page landing mock (dark navy, white/blue two-tone headlines, glass KPI chips over cinematic photography, 5-up service cards, cases row, mountain CTA).
- 12 page photos (in `uploads/`), compressed to JPEG in `assets/img/` (see Imagery).
- No codebase, Figma file, logo file or font files were provided. The brief itself (a long Spanish prompt) set the copy, sections and behaviour.

## Index
- `styles.css` — entry point (only `@import`s): `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `components/mx.css`
- `components/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md`) plus one card per folder
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/website/` — full interactive landing page (`index.html`)
- `assets/img/` — page photography; `assets/reference/` — visual reference
- `SKILL.md` — lets you use this system as an Agent Skill
- `thumbnail.html` — the project tile

## Components
Namespace: `window.MextasDesignSystem_752eb8`
- **core/** — `Icon`, `Button`, `IconButton`, `Eyebrow`, `Badge`, `Wordmark`
- **surfaces/** — `GlassCard`, `MetricCard`, `SectionHeading`
- **forms/** — `Input` (also used as a textarea), `Select`, `OptionCard`
- **navigation/** — `Tabs`
- **overlays/** — `Dialog` (a centred modal, a drawer, or a bottom sheet on mobile)

Styles live in `components/mx.css` as `mx-*` classes, so hover, focus and responsive states work. Components add class names and read tokens.

**Intentional additions** (no source defined an inventory, so this is a standard set sized to the brand): `MetricCard` (the glass KPI chip from the reference), `SectionHeading` (the two-tone headline pattern), `OptionCard` (the diagnosis tool), `Wordmark` (there's no logo, so the name is set in type).

## UI kits
- `ui_kits/website/` — Mextas landing page: navbar, hero, trust bar, problem → solution panel, solutions grid + modal, automation flow, systems demo app, analytics dashboard, process timeline, case studies + case modal, metrics, "para empresas que…" picker, diagnosis tool, about, CTA, contact form, footer.

---

## CONTENT FUNDAMENTALS
- **Language:** professional Mexican Spanish that is clear and commercial. Address the reader as **tú** ("Tu empresa puede funcionar mejor", "Cuéntanos qué quieres mejorar"). Mextas speaks as **nosotros** ("Nosotros construimos cómo", "Entendemos antes de construir").
- **Frame everything as problem → solution → result.** Talk about business outcomes (sell more, operate better, fewer manual tasks), not technology for its own sake. Example: *Problema: "Perdemos mucho tiempo haciendo tareas manuales." → Automatización + integraciones + sistema interno → Menos trabajo repetitivo y procesos más rápidos.*
- **Headlines come in two short lines.** The first line (white) states the idea; the second (blue) turns it around: "No vendemos páginas. / Resolvemos problemas de negocio.", "Resultados que hablan / por sí solos." End with a full stop. Use sentence case and never Title Case.
- **Eyebrows** are UPPERCASE mono labels with wide letter-spacing, 2–5 words: "SOLUCIONES DIGITALES PARA EMPRESAS".
- **CTAs** are verb-first with an arrow: "Solicitar propuesta →", "Hablar sobre este proyecto →", "Ver soluciones" (the secondary has no arrow).
- **Be honest about numbers.** Mark mock data "DEMOSTRACIÓN" and add discreet notes like "Métricas representativas de demostración." or "Cifras ilustrativas…". Present stats as examples ("Hasta 12 h semanales recuperadas — ejemplo"), never as universal promises. Don't calculate prices.
- **Avoid:** lorem ipsum, "innovación / disruptivo / revolucionario / 360" without context, English marketing filler, and emoji.
- Use Mexican context: MXN amounts ("$428,900"), CFDI invoicing, WhatsApp, and city names (Monterrey, Guadalajara, CDMX).

## VISUAL FOUNDATIONS
- **Palette:** near-black `#03060d` page, navy layers (`--mx-navy-*`), **electric blue `#2f7bff`** as the one accent (highlight lines, data, selection) and **cyan `#45d3ff`** as a secondary data/glow tint. Text is in cool grays (`--fg-1…4`). Amber is reserved for the "Demostración" tag and green for success states.
- **Type:** Manrope for everything (800 display with tight −0.035em tracking, 700 headings, 400–600 body); JetBrains Mono for eyebrows, labels, IDs and demo notes. The second headline line is blue — in the hero it's a subtle blue→cyan gradient clipped to the text (the only gradient text allowed).
- **Backgrounds:** full-bleed cinematic photography (night offices, blue monitor glow, warm skin tones, cool shadows). Copy always sits on the dark side, protected by an ink gradient from left to right (97% → 15%) and a bottom fade into the page colour. Sections get very faint radial blue glows (`.glowbg`, blur 80px, ~22% alpha). There are no patterns, textures, grain or illustrations.
- **Cards:** translucent navy (`--surface-card` ~62%), a 1px cool border (`rgba(132,170,255,.15)`), 14–16px radius, and an inset 1px top highlight plus a deep soft drop shadow. **Glass** (backdrop blur 14px) is used only over photos: hero KPI chips, nav on scroll, photo captions. Featured or selected cards get a faint blue edge glow.
- **Borders:** hairlines everywhere. Dividers are `--border-subtle`; fading gradient hairlines (`.hair`) separate major blocks. Use no heavy strokes and no coloured left-border accents.
- **Radii:** buttons and inputs 8px, tiles 10–12px, cards 14–16px, modals 20px, pills for badges, chips and icon buttons.
- **Buttons:** primary is **white solid with navy text** (the main CTA), secondary is a white outline, accent (blue solid) is for actions inside dark panels, and ghost is a subtle border. On hover the arrow moves 3px right, the button gets slightly lighter, and primary gains a soft white glow. On press it drops 1px and scales to 0.99.
- **Hover (cards):** a 3px lift, the border turns accent blue, images zoom 1.02 → 1.06 over 1.2s, the icon lifts 2px, a "Ver más" CTA fades in, and the round arrow fills white.
- **Motion:** ease-out expo `cubic-bezier(.22,1,.36,1)`. Content reveals with fade-up (22px) plus blur (4px → 0) over 900ms, staggered 70–90ms. Other motion: count-up numbers, SVG lines that draw on, progress lines that fill as you scroll, 6px floating KPI chips, and a very subtle hero parallax (0.12×). No bounces or scroll hijacking. `prefers-reduced-motion` turns it all off.
- **Layout:** 1240px container, fluid gutter (20–48px), section padding `clamp(80px,10vw,140px)`. Editorial splits (heading left, lead right) and 5-up and 3-up grids. The fixed nav turns into a blurred bar with a hairline border on scroll, and shrinks from 76 to 62px.
- **Focus:** a 2px black gap plus a 4px blue ring (`--focus-ring`) on every interactive element.
- **Mobile:** card rows become horizontal snap carousels, the flow and timeline become vertical, modals become bottom sheets, and the nav becomes a full-screen menu.

## ICONOGRAPHY
- **Lucide** line icons from CDN (`lucide@0.460.0` UMD), with a 1.75 stroke and round caps, rendered by the `Icon` component (`name="workflow"`). The reference shows thin outlined line icons, and Lucide is the closest match — **this is a substitution, since no icon files were provided.**
- Icons usually sit inside a 40–44px tinted tile (blue 12% fill, blue 40% border, `--mx-blue-300` glyph) or a round 30px outline chip in the hero pills.
- No emoji and no icon font. Arrows (→) are icons, not unicode characters, except in running copy.
- **Logo:** there's no logo file. The reference shows an infinity-like mark, but we don't draw it. Use `Wordmark`: "Mextas" set in Manrope 800 with a blue full stop.
- Client "logos" in the trust bar are typographic wordmarks for fictional companies (Grupo Lumen, Novatec, Constructa, Distribuidora Orión, Alpha, Rivera).

## Imagery (assets/img)
`hero` (two professionals at a laptop, growth screens), `servicio-web`, `servicio-ecommerce`, `servicio-sistemas`, `servicio-automatizacion`, `servicio-marketing`, `edificio` (Mextas HQ at dusk), `caso-constructa`, `caso-orion`, `caso-lumen`, `oficina-crecimiento` (open office with dashboards), `cta-montanas` (night mountain panorama). The heroes are ~1900px wide and the rest 1400px, as JPEG q82.

## Fonts
Manrope and JetBrains Mono load from Google Fonts (`tokens/fonts.css`). **This is a substitution:** no brand font files were supplied, and Manrope is the closest match to the reference's geometric sans.
