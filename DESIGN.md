---
name: Mateo Cabrera — Portfolio
description: Une rue couverte de plaques émaillées — signalétique de shōtengai pour un portfolio de développeur.
colors:
  ground: 'oklch(96.2% 0.004 250)'
  ground-sunk: 'oklch(92.4% 0.006 250)'
  ground-deep: 'oklch(87.5% 0.008 250)'
  sheet: 'oklch(98.8% 0.002 250)'
  ink: 'oklch(19% 0.02 262)'
  ink-2: 'oklch(41% 0.021 262)'
  ink-3: 'oklch(47% 0.019 262)'
  ink-line: 'oklch(19% 0.02 262 / 0.14)'
  indigo: 'oklch(35% 0.135 264)'
  indigo-deep: 'oklch(25% 0.105 264)'
  vermilion: 'oklch(52% 0.203 30)'
  vermilion-deep: 'oklch(44% 0.176 30)'
  chrome: 'oklch(84% 0.163 88)'
  enamel-face: 'oklch(98.5% 0.005 95)'
typography:
  marquee:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(3.25rem, 9vw, 6rem)'
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: '-0.02em'
    fontVariation: "'wdth' 125"
  plate-xl:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(2.25rem, 5.4vw, 3.75rem)'
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: '-0.02em'
    fontVariation: "'wdth' 125"
  plate:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)'
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: '-0.02em'
    fontVariation: "'wdth' 125"
  sign:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.25rem'
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.5
  admin:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.75rem'
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: '0.14em'
    fontVariation: "'wdth' 64"
rounded:
  plate: '2px'
spacing:
  gutter-mobile: '1.25rem'
  gutter-desktop: '2rem'
  card-pad: '1rem'
  card-pad-lg: '1.25rem'
  section-y: '4rem'
  section-y-lg: '6rem'
  container: '1240px'
components:
  button-cv:
    backgroundColor: '{colors.vermilion}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.sign}'
    rounded: '{rounded.plate}'
    padding: '0.75rem 1.25rem'
  button-cv-hover:
    backgroundColor: '{colors.vermilion-deep}'
    textColor: '{colors.enamel-face}'
  button-quiet:
    backgroundColor: '{colors.ground}'
    textColor: '{colors.ink}'
    typography: '{typography.small}'
    rounded: '{rounded.plate}'
    padding: '0.625rem 0.875rem'
  button-quiet-hover:
    backgroundColor: '{colors.chrome}'
    textColor: '{colors.ink}'
  button-demo:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.small}'
    rounded: '{rounded.plate}'
    padding: '0.5rem 0.875rem'
  button-demo-hover:
    backgroundColor: '{colors.indigo}'
    textColor: '{colors.enamel-face}'
  role-plate:
    backgroundColor: '{colors.indigo}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.sign}'
    rounded: '{rounded.plate}'
    padding: '0.5rem 0.875rem'
  card-project:
    backgroundColor: '{colors.ground}'
    textColor: '{colors.ink}'
    rounded: '{rounded.plate}'
    padding: '1rem'
  awning-professional:
    backgroundColor: '{colors.indigo}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.admin}'
    padding: '0.5rem 1rem'
  awning-personal:
    backgroundColor: '{colors.vermilion}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.admin}'
    padding: '0.5rem 1rem'
  awning-academic:
    backgroundColor: '{colors.chrome}'
    textColor: '{colors.ink}'
    typography: '{typography.admin}'
    padding: '0.5rem 1rem'
  tag:
    backgroundColor: '{colors.ground-sunk}'
    textColor: '{colors.ink-2}'
    typography: '{typography.admin}'
    padding: '0.25rem 0.5rem'
  nav-link:
    textColor: '{colors.ink-3}'
    typography: '{typography.admin}'
    padding: '0.5rem 0.625rem'
  nav-link-active:
    textColor: '{colors.ink}'
    typography: '{typography.admin}'
  tab-selected:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.enamel-face}'
    typography: '{typography.small}'
    padding: '0.625rem 1rem'
  metric-band:
    backgroundColor: '{colors.indigo}'
    textColor: '{colors.chrome}'
    typography: '{typography.plate-xl}'
    padding: '1.75rem 1.5rem'
---

# Design System: Mateo Cabrera — Portfolio

## Overview

**Creative North Star: "The Covered Street"**

A shōtengai — a Japanese covered shopping arcade — is not one storefront. It is a roofed street where a dozen independent shops each hang their own enamel plate, and the light overhead is pale, cool, and diffuse because it comes through a roof rather than from the sky. That is the whole system. This portfolio is not a single window onto one person; it is eleven independent products under one roof, each with its own plate. The visual consequence is that colour is never an accent — it is a _field_ that owns a region, the way a shop's awning owns its shopfront and stops precisely at the neighbour's.

The material is enamelled steel signage. A plate is a saturated field with a hard cut edge and a single line of sheen at the top where the arcade light hits the glaze. It is not a soft card floating in space. There are no gradients, no offset drop shadows, no pills, no glass, and no decorative background pattern — the structure of the page is carried entirely by full-bleed enamel regions and by the 2px cut edge of every plate. Density is high and deliberate: the visitor is a hiring decision-maker with thirty to sixty seconds, and every region is sized to be read, not admired.

Typography does the work that colour is forbidden from doing decoratively. One variable family carries everything, and its _width_ axis is a semantic register, not a styling option — expanded and heavy for lettering the sign painter fills edge-to-edge, condensed and tracked for the administrative small print that gives a platform number or a price. The registers never blur into each other, because a width chosen freely from a continuum is the same as having no register at all.

**Key Characteristics:**

- Pale, cool arcade ground (three tints) under saturated enamel fields that own entire full-bleed regions
- One variable typeface, two axes, three named width registers — no intermediate widths
- Every corner is a 2px cut, everywhere, with no exceptions
- Elevation stated once by a 2px ink border; exactly one shadow in the entire system
- French throughout, statically prerendered, one runtime dependency
- Proof-first density: real numbers set in chrome-yellow on indigo enamel, never a gauge or a percentage bar

## Colors

The palette is authored in OKLCH and role-named end to end; the stock Tailwind palette is deliberately wiped (`--color-*: initial`) so that no colour can enter this project without first earning a role.

### Primary

- **Arcade Indigo** (`{colors.indigo}`): The institutional enamel. It owns the proof band under the first viewport, every skill-category header, the job title's employer line, the professional-project awning, and the role plate that names the job. When a region needs to read as _established_ rather than _personal_, it is indigo.
- **Indigo Deep** (`{colors.indigo-deep}`): Used only as the dividing rule _inside_ an indigo field — the cell separators of the metrics band. It is a seam colour, never a field of its own.

### Secondary

- **Signal Vermilion** (`{colors.vermilion}`): The action and the closing. It owns the primary CV download in both the nav and the hero, the entire contact section as a full-bleed field, the active-navigation underline, the focus ring, every bullet marker, and the personal-project awning. It is the one colour permitted to mean "do this" or "this is where the street ends."
- **Vermilion Deep** (`{colors.vermilion-deep}`): The pressed/hover state of any vermilion field, and the colour of a metric numeral set on a pale ground (project cards), where full vermilion would not hold its weight against small type.

### Tertiary

- **Chrome Yellow** (`{colors.chrome}`): The numeral colour. It exists so that real figures — 800+, 8, 16, 2 — read in three seconds against indigo enamel. Its second job is the hover field of any bordered quiet plate, and the third is text selection. It is the only colour in the system bright enough to require ink lettering rather than enamel-face.

### Neutral

- **Arcade Ground** (`{colors.ground}`): The default page field. Cool, pale, and diffuse — the light under a roof, not daylight.
- **Sunk Ground** (`{colors.ground-sunk}`): The recessed band. It marks a whole section as a different stretch of the street (Experience, Skills) and doubles as the field of tag chips and of the tab rail.
- **Deep Ground** (`{colors.ground-deep}`): The mount behind project media and the desk surface behind the on-screen CV sheet. It is the darkest neutral field and the only one that a 12px `ink-3` label must survive on.
- **Sheet** (`{colors.sheet}`): The paper. It is the printed CV's ground and the small mounting tile behind every company and school logo. It is cool, not cream — a warm paper field is the exact rendition drift this world refuses.
- **Ink** (`{colors.ink}`): Body text at full strength, every plate border, every rule, the footer field, the selected-tab field, and the vertical hanging rubric.
- **Ink 2** (`{colors.ink-2}`): Running prose and bullet text — the register just below a heading, used wherever a paragraph should sit behind its title rather than compete with it.
- **Ink 3** (`{colors.ink-3}`): The administrative register's colour: dates, counts, locations, inactive navigation, metric labels on pale grounds.
- **Ink Line** (`{colors.ink-line}`): A 14%-alpha ink hairline. It is the _internal_ divider — between rows of a list that already sits inside a plate — where a full 2px ink rule would read as a second plate edge.
- **Enamel Face** (`{colors.enamel-face}`): Lettering on enamel. A foreground role only.

### Named Rules

**The Region Rule.** Enamel is a field, not an accent. Indigo, vermilion, and chrome are only ever applied to a surface that owns a whole region — a full-bleed band, an entire section, a complete awning, a whole button. Tinting a word, an icon, or a border with an enamel colour to "add interest" is the one use this system forbids outright. If a colour cannot own a region, it stays ink.

**The Foreground-Only Rule.** `enamel-face` is lettering on enamel and is never a page field. When a surface needs to be near-white, it is `sheet` (paper, logo mounts, the CV) or `ground` (the arcade). The on-screen CV sheet uses `sheet` for exactly this reason: `enamel-face` pulls warm, and every ground in this world is cool.

**The 47% Rule.** `ink-3` sits at 47% lightness and no higher. It was measured on the rendered page: 51.5% yielded 4.48:1 against the sunk ground, short of the 4.50 that 12px text requires. At 47% it clears AA on all three grounds including `ground-deep` (4.68:1). Raising it to "soften" the small print breaks the smallest type in the system on the darkest ground it lands on.

## Typography

**Display Font:** Archivo (Omnibus-Type, OFL), self-hosted variable — `ui-sans-serif, system-ui, sans-serif` fallback
**Body Font:** Archivo — the same file
**Label/Mono Font:** Archivo at the condensed register; tabular figures via `font-variant-numeric: tabular-nums`

One self-hosted `.woff2` carries the entire system: weight 400–900 and width 62–125, glyph-subset to every character the site and the CV actually use plus the printable Latin-1 block and French punctuation, at 119 KB. It is preloaded in the document head with `font-display: swap`, and `font-synthesis-weight` is disabled so the browser never fakes a weight the file already contains.

**Character:** A grotesque built for signage — geometric enough to be neutral, wide enough at 125 to fill a board edge to edge, and narrow enough at 64 to run a ticket-plate label. The pairing is not two families, it is two positions on one width axis, which is why the display and the small print read as the same voice at different jobs.

### The Copy Contract

Every glyph the copy is allowed to use, and one rule about what it may say. The
content layer is French; these are the marks a French typesetter uses, and the
site mixed them for a while before this was written down.

| Mark       | Character             | Where                                                  |
| ---------- | --------------------- | ------------------------------------------------------ |
| Apostrophe | `’` U+2019            | always — never the straight `'`                        |
| Emphasis   | `« … »` U+00AB/U+00BB | around a term being named, with **U+00A0 inside both** |
| Separator  | `·` U+00B7            | between a product and its client in a title            |
| Ellipsis   | `…` U+2026            | one character, never three periods                     |
| Em-dash    | —                     | **never in shipped copy**                              |

The non-breaking spaces are not decoration: without them `« Feature Flags »`
breaks across a line and strands its closing mark alone in the left margin. All
of these live in the 119 KB subset, which covers printable Latin-1 and French
punctuation — a new mark outside that range needs the font regenerating.

The em-dash is banned by the repo's owner and the ban is not satisfied by
swapping in another glyph: a `·` is a title separator and reads as noise inside
a sentence. A prose dash becomes a colon or a full stop.

**No machine stats in prose.** A number produced by `wc -c`, `git log | wc -l`,
`du -h` or a contributor API measures the artifact, not the reader's experience,
and lands on the page as something no person would write — "un document de
conception de 43 Ko", "1 092 des 1 865 commits". Use the stat to decide what to
claim, then write the claim without it. This is the third condition on `Metric`
in `src/lib/content/types.ts`.

### The Width Registers

Width is the system's second dimension and it is _semantic_. Three registers are named, all three are in use, and nothing exists between them.

- **Wide (`--stretch-wide`, 125)** — plate lettering. Carried by `.lettering`, always at weight 800 with `-0.02em` tracking, because width has already done the work that tracking would otherwise do.
- **Sign (`--stretch-sign`, 112)** — the sub-lettering register: project titles, the role plate, contact handles, featured names.
- **Tight (`--stretch-tight`, 64)** — the administrative register. Carried by `.admin`, always at weight 700, `0.14em` tracking, uppercase, 12px.

All three are theme tokens and every consumer reads them: the width utilities, the component primitives, and the CV sheet's own scoped stylesheet. Nothing in the project sets a width by typing a number. A register is added by declaring a token and a utility together, never by writing a percentage at a call site.

The one deliberate numeric literal is `font-stretch: 62% 125%` in the `@font-face` block. That is the variable font's supported axis range — the span the file can render, not a register the design may use — and it must stay a literal. Do not "correct" it to a token.

### Hierarchy

- **Marquee** (800, `clamp(3.25rem, 9vw, 6rem)`, line-height 0.88, width 125): The name, once, in the first viewport. Nothing else in the system uses it.
- **Plate XL** (800, `clamp(2.25rem, 5.4vw, 3.75rem)`, line-height 0.94, width 125): Headline numerals in the proof band. Figures only — never words.
- **Plate** (800, `clamp(1.5rem, 2.6vw, 2.125rem)`, line-height 1.02, width 125): Section headings, job titles, featured project titles, the contact heading.
- **Sign** (800, 1.25rem, line-height 1.25, width 112): Index project titles, the role plate, the company line, contact handles, the lead paragraph of About.
- **Body** (400, 1.0625rem, line-height 1.6): Running prose and experience bullets. Capped at 46ch for the value proposition, 62ch for the About passage, 70ch for job bullets.
- **Small** (400/700, 0.9375rem, line-height 1.5): Card bullets, tag-adjacent copy, secondary buttons, skill chips.
- **Admin** (700, 0.75rem, `0.14em`, uppercase, width 64): Dates, counts, categories, locations, metric labels, navigation, the footer. It labels _data_, never invented copy.

### Named Rules

**The Register Rule.** Width is chosen from the three named registers or not at all, and a register is only ever reached through its token. An inline `font-stretch: 108%` dissolves a register into a continuum, which is the same as having no register — and a percentage typed at one call site is exactly how a second surface drifts away from the first. This is unconditional across the project: utilities, component primitives, and the CV sheet all read `var(--stretch-*)`, the only numeric `font-stretch` in the source is the `@font-face` axis range, and computed `font-stretch` on both routes returns only 64%, 112%, and 125%, plus the browser's untouched 100% default on body text.

**The Six-Rem Ceiling Rule.** `marquee` tops out at 6rem. The first viewport fills its board by composition — lettering beside a featured-project plate, a role plate, a portrait, a full-bleed figure band — never by one enormous word. A hero that needs a bigger word is a hero with nothing in it.

**The Twelve-Pixel Admin Rule.** The administrative register is never set larger than 12px and never appears at a weight below 700. Condensed, tracked, uppercase small print reads as a printed ticket at 12px and as a shouted mistake at 16px.

**The Data-Label Rule.** The admin register labels real data — a date, a count, a category from the typed content model, a location. It is never used to set an invented phrase above a heading. Section headings carry their own weight and are never preceded by a kicker, an eyebrow, or a `01→06` numeral.

## Layout

The page is a single scrolled street. Content sits in a `1240px` max-width container with `1.25rem` gutters on mobile and `2rem` from the small breakpoint up; enamel bands and section grounds break out of it to full bleed while their inner content stays on the same container, which is what makes a section change read as a new stretch of street rather than a new box.

Vertical rhythm is one value with one step: `4rem` section padding, rising to `6rem` at the small breakpoint. The contact section closes slightly tighter (`5rem`) because it is a terminus, not a stop. The sticky header is `3.5rem` tall and `scroll-padding-top` is set to `5.5rem` so an anchored section never lands under it.

Breakpoints are Tailwind's stock steps used sparingly and purposefully: `sm` (40rem) turns on the wider gutter, the four-across proof band, the two-across project grid, and the vertical hanging rubric; `md` (48rem) reveals the navigation stop list and the three-across education grid; `lg` (64rem) moves the portrait and location plate from the top of the hero into a right-hand column, and takes project grids to three across; `xl` (80rem) is the only breakpoint that adds content position rather than density — the featured-project plate joins the marquee on one row.

Grids are declared per region, not globally: three columns for featured work, two-then-three for the indexed gallery, three for education, and two-then-three for skills with the fifth category spanning two columns so the grid closes on exactly six filled cells. Experience is not a grid at all above `lg` — it is a `170px` date column beside a fluid content column, the administrative margin of a printed record.

### Named Rules

**The Full-Bleed Seam Rule.** A change of section is announced by a full-bleed change of ground plus a 2px ink border, never by whitespace alone. Sunk ground for Experience and Skills, indigo for the proof band, vermilion for Contact, ink for the footer. Whitespace separates entries; material separates sections.

**The Measure Rule.** Prose is capped by content type, not by container: 46ch for the value proposition, 62ch for the About passage, 70ch for job bullets. A paragraph is never allowed to run the full 1240px.

## Elevation & Depth

This system is materially flat and states depth exactly once, with a border. Every plate is edged in 2px of ink; that edge — not a shadow, not a tint, not a gradient — is what says the plate sits on the wall. The only ambient effect on a resting surface is `inset 0 1px 0 oklch(100% 0 0 / 0.16)`, a single hairline of sheen along the top edge of a plate where the arcade light catches the glaze. That sheen is _material_, not elevation: it describes the enamel's finish, and it never grows, never blurs, and never appears anywhere but the top edge.

The sticky header does not use a shadow either. It separates itself from the scrolling page with its 2px bottom border plus a 6px backdrop blur over a 92%-opaque ground (85% where `backdrop-filter` is supported) — a printed board in front of the street, not a floating panel above it.

### Shadow Vocabulary

- **Lift** (`box-shadow: 0 2px 3px oklch(19% 0.02 262 / 0.16), 0 18px 34px -18px oklch(19% 0.02 262 / 0.38)`): The one shadow in the system. It has exactly one consumer — a project card lifting 2px under a fine pointer — and it is always composited with the plate's inset sheen so the material reads consistently in both states. Both layers are tinted with ink, never with neutral black.

### Named Rules

**The One Shadow Rule.** There is one shadow token and it belongs to things that genuinely leave the wall. A new surface does not get a shadow because it looks flat; flat is the answer. If a surface needs to separate, it gets a border or a different ground.

**The Cut Edge Rule.** Elevation is declared once, by the 2px ink border. A plate never carries both a border and a resting shadow, and never substitutes a shadow for the border.

## Shapes

Every corner in this system is a **2px cut** (`{rounded.plate}`). Not one component deviates, and there is no exception anywhere — cards, buttons, plates, chips, logo mounts, the tab rail, and the global focus ring all take the same radius from the same token. This is a deliberate, documented departure from the usual 12–16px card radius: a softly rounded corner reads as a screen affordance, while a 2px corner reads as a sheet of enamelled steel that was cut to size. The cut edge is the committed material of this world, and a pill radius here would be a different world entirely.

Borders come in exactly two weights. **2px solid ink** is the plate edge and the section seam — it is structural and it is what states elevation. **1px `ink-line`** is the internal hairline: rows inside a list that already sits within a plate, the rule above and below a metric row, the outline of a tag chip. A 2px rule inside a plate reads as a second plate; the hairline is how a list divides without subdividing the object.

Recurring geometry: the **6px ink-vermilion square** used as a bullet marker (never a disc, never a glyph), the **square portrait and logo mount** (72px mobile / 188px desktop for the portrait, 56–64px for logos), and the **fixed-ratio media frame** — 16:10 landscape or 4:5 portrait, with the image always `object-contain` on deep ground so a product screenshot is never cropped and never shifts layout on load.

### Named Rules

**The Two-Millimetre Rule.** 2px, everywhere, no exceptions. There is no radius scale in this system because a second radius would immediately read as a different material.

**The Two-Weight Border Rule.** 2px ink for anything that is an object; 1px `ink-line` for anything that divides inside an object. Nothing in between.

## Components

### Buttons

- **Shape:** 2px cut (`{rounded.plate}`), always a plate — every button carries the top sheen line.
- **Primary (CV):** Vermilion enamel with enamel-face lettering at the sign register, weight 800, `0.75rem 1.25rem`. The nav's compact variant drops to the small register and `0.5rem 0.875rem`. The contact section's variant is inverted to chrome enamel with ink lettering at the plate register and a 2px ink border, because it sits _on_ vermilion.
- **Hover / Focus:** Vermilion deepens to `{colors.vermilion-deep}` over 200ms. Focus is a 3px vermilion outline at 2px offset taking the plate radius, applied globally via `:focus-visible` — never removed, never restyled per component.
- **Active:** `scale(0.97)` over 140ms on the accelerated-out curve. Every pressable surface in the system does this, and it is the single most important piece of feedback the interface gives.
- **Quiet / Bordered:** Ground field, 2px ink border, ink lettering at the small register, weight 700. Hovers to a chrome field. Used for social links and repository links — anything that is a real destination but not the primary act.
- **Dark:** Ink field with enamel-face lettering, hovering to indigo. Used for a project's live demo or playable build, where the action is strong but must not compete with the CV.

### Cards / Containers

- **Corner Style:** 2px cut, `overflow-hidden` so the media frame is cut by the same edge.
- **Background:** `{colors.ground}` on the default street; the card never changes ground with its section.
- **Border:** 2px ink on all sides. Internal divisions use the 1px `ink-line` hairline.
- **Shadow Strategy:** None at rest. `hoverable-lift` only, and only behind `(hover: hover) and (pointer: fine)` — see Elevation & Depth.
- **Internal Padding:** `1rem`, rising to `1.25rem` at the small breakpoint.
- **The Awning:** A project card's defining feature is a full-bleed enamel band directly under its media, edged with a 2px ink border, carrying two admin-register labels — the project's nature at left, its domain at right. Its enamel encodes the nature: indigo for professional, vermilion for personal, chrome (with ink lettering) for academic. This is the shopfront sign, and it is the one place where three enamels appear on one screen without competing, because each owns its own card.

### Navigation

- **Style:** Sticky, full-bleed, `3.5rem` tall, 2px ink bottom border, 6px backdrop blur over a translucent ground. No shadow.
- **Typography:** The admin register throughout — the wordmark, the stops, and the compact CV plate's label.
- **Default / Hover / Active:** Stops sit at `ink-3` and darken to `ink` on hover. The active stop is marked by a 3px vermilion bar at the base of the link, animated with `scaleX` from a left origin over 200ms — never by `left`/`width`, which would force a layout recalculation every frame. The active section is resolved by an IntersectionObserver reading a narrow band at the upper third of the viewport (`-15% 0px -70% 0px`), so the highlighted stop is the one being _read_, not the one touching the viewport edge.
- **Mobile:** The stop list is hidden below `md`; the wordmark and the CV plate remain. There is no hamburger and no drawer — the page is one street and the CV is the act.

### Tabs (project filter)

- **Style:** A `p-1` rail on sunk ground with a 2px ink border. The selected tab's field is an absolutely-positioned ink span sharing the rail, translated and scaled into place (`translateX` + `scaleX` on a 1px-wide element) over 200ms.
- **State:** Selected lettering is enamel-face; unselected is `ink-2` darkening to `ink`. Each tab carries a live count in the admin register at 70% opacity.
- **Keyboard:** Roving tabindex with left/right arrow support; the selected tab is the only one in the tab order.
- **Contrast note:** A DOM-walking contrast checker will flag the selected tab, because its field comes from an absolutely-positioned sibling rather than from its own background. Sampled from rendered pixels the pair measures 16.19:1. Do not "fix" this by moving the field onto the button — the sliding cursor is the animation.

### Chips / Tags

- **Style:** Sunk-ground field, 1px `ink-line` outline, `ink-2` lettering in the admin register, `0.25rem 0.5rem`. Skill chips are the one variant that steps up to the small register at weight 700, because they are the content of their section rather than metadata about it.
- **State:** Static. Tags are labels, not controls, and they never hover.

### Metric Bands

The system's proof device, and the reason the palette exists. A full-bleed indigo field divided by `indigo-deep` seams, each cell setting its figure in chrome yellow at the plate-XL register with tabular figures, above an enamel-face admin label at 90% opacity. It appears at three scales: four cells full-bleed under the hero, a bordered row inside a job entry, and a hairline-ruled row inside a project card (where the figure drops to the sign register in `vermilion-deep` on pale ground). Figures are always tabular, and the label is always visually present _and_ mirrored into a screen-reader-only `<dt>`.

### The Hanging Rubric

A section heading that behaves like a shōtengai side-plate: below 40rem it is horizontal lettering at the plate register; at 40rem and above the same single element rotates to `vertical-rl` and becomes an ink plate with enamel-face admin lettering, hung beside its column. It is deliberately **one** element carrying both states — two elements with one hidden would leave the section headingless at one width and drop the navigation anchor onto an anonymous block. Its two states live entirely in the components layer with no competing utility in the markup, because the utilities layer cascades after components and a `text-plate` class alongside it would silently override the vertical variant.

### Icons

Filled, cut marks drawn for this world on a 24×24 grid, inlined as SVG at 13–22px and coloured by `currentColor`. There is no icon library and no icon font. A 1.5px hairline stroke icon disintegrates next to plate lettering at weight 800 width 125; on signage, marks are solid.

### Motion

The system has **one authored moment**: the three featured project plates rise 14px and fade in as the work section enters the viewport, staggered 60ms apart, over 520ms. Everything else is state feedback — 140ms press, 200ms colour and cursor, 260ms reserved for panels.

Two custom curves carry all of it: `cubic-bezier(0.23, 1, 0.32, 1)` for anything entering or responding, and `cubic-bezier(0.77, 0, 0.175, 1)` for anything symmetric. Built-in CSS easings are not used — they are too weak to read as intentional — and `ease-in` is never used on UI, because it delays the first frame, which is exactly the moment the user is watching.

Two gates are non-negotiable. Hover effects live behind `(hover: hover) and (pointer: fine)`, because a touch device fires hover on tap and leaves every card the visitor scrolled past in a stuck lifted state. And the reveal's _hidden_ state is scoped to `[data-js] [data-reveal]`, with `data-js` set by an inline script before first paint — so without JavaScript the attribute never lands and no content is ever hidden. `prefers-reduced-motion` collapses durations to 0.01ms, disables smooth scrolling, and removes the reveal's translation while keeping its opacity: reduced motion means fewer and gentler animations, not zero, because opacity and colour still aid comprehension.

### The CV Sheet

A second surface built from the same content modules as the site, so the two can never diverge. It is a 210×297mm sheet on `{colors.sheet}`, presented on deep ground at screen and taking over from `@page` (A4, 12mm/13mm margins) in print, where the sheet's own padding and background drop away. It borrows the site's colour roles wholesale — indigo role plate, vermilion metric figures, vermilion bullet markers, `ink-3` metadata — and re-expresses the type ramp in points (26pt name, 10.4pt entry titles, 8.2–8.6pt administrative) with `print-color-adjust: exact` so the enamel survives the printer. Entries and skill groups carry `break-inside: avoid`, and the projects section forces a page break before it.

## Do's and Don'ts

### Do:

- **Do** give an enamel colour a whole region — a full-bleed band, an entire section, a complete awning — or don't use it at all (The Region Rule).
- **Do** cut every corner at 2px, on every component, without exception (The Two-Millimetre Rule).
- **Do** state an object's edge with 2px ink and an internal division with the 1px `ink-line` hairline (The Two-Weight Border Rule).
- **Do** pick type width from the three named registers, and let `.lettering` and `.admin` deliver them.
- **Do** announce a new section with a full-bleed change of ground plus a 2px border (The Full-Bleed Seam Rule).
- **Do** make every pressable surface answer with `scale(0.97)` over 140ms.
- **Do** gate hover behind `(hover: hover) and (pointer: fine)` and gate any hidden-by-default state behind `[data-js]`.
- **Do** set every figure in tabular numerals, and pair every visible metric label with a screen-reader `<dt>`.
- **Do** keep `ink-3` at 47% lightness or darker for anything at 12px.
- **Do** cap prose by content type (46ch / 62ch / 70ch), never at the container width.

### Don't:

- **Don't** use a gradient, an offset drop shadow, a pill radius, or a glass/blur panel as a surface treatment. The one blur in the system is the sticky nav's 6px backdrop, and the one shadow is `lift`.
- **Don't** add a shadow to make a surface feel separated. Change its ground or give it a border.
- **Don't** tint a word, an icon, or a border with indigo, vermilion, or chrome for emphasis. Enamel owns regions; emphasis is weight and width.
- **Don't** use `enamel-face` as a page background. Use `sheet` for paper and `ground` for the arcade.
- **Don't** write a literal `font-stretch` percentage at a call site. Read `--stretch-wide` / `--stretch-sign` / `--stretch-tight`, or use the width utility. The sole exception is the `@font-face` axis range, which is not a register. A width outside the three registers dissolves the register into a continuum.
- **Don't** place a kicker, an eyebrow, or a section number above a heading. The heading carries its own weight; a count in the admin register beside it says more.
- **Don't** express a skill as a percentage, a level, a star rating, or a bar. Skills are plates with labels — an unverifiable "React 85%" is the first thing a hiring reader penalises.
- **Don't** raise `marquee` above 6rem, or set the admin register above 12px.
- **Don't** lay a decorative background field — a hairline grid, a dot matrix, a noise texture — behind the page. Structure is already carried by the enamel regions and the cut edges.
- **Don't** animate `left`/`width` for a moving indicator, or use a built-in CSS easing, or use `ease-in` on UI.
- **Don't** introduce a second typeface or a second radius. Both would immediately read as a second material.
