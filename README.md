# mateo-cabrera.com 🚀

This is the source code for my personal portfolio, accessible at [mateo-cabrera.com](https://mateo-cabrera.com).

I am a **Full Stack Web Developer** and **Game Developer** student at Epitech. This project serves as a central hub for my professional experience, web projects, and game development experiments.

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5 runes)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) — design tokens declared in `@theme`, root auto-detection disabled via `source(none)` plus an explicit `@source`
- **Type:** [Archivo](https://fonts.google.com/specimen/Archivo) variable (weight 400–900, width 62–125), self-hosted, 176 KB for the whole type system
- **Icons:** hand-drawn solid marks (`src/lib/components/Icon.svelte`) — no icon dependency
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) (Static Site Generation)
- **Media:** Optimized images with `sveltejs/enhanced-img`, WebM previews with viewport-gated playback

Exactly one runtime dependency: `@sveltejs/enhanced-img`.

## ✨ Key Features

- **Enamel signage design system:** every colour, size, radius, easing and duration goes through a token in `src/app.css`; the stock Tailwind palette is wiped so nothing can slip in untyped.
- **Typed content layer:** all copy, projects, roles and skills live in `src/lib/content/` behind interfaces. The site and the CV render from the same source, so they cannot drift apart.
- **Generated CV:** `/cv` renders the same data as an A4 sheet; `static/CV-Mateo-Cabrera.pdf` is that route printed.
- **Project hierarchy:** three featured projects sit above the filter and stay visible whatever tab is active; the remaining eight are filtered between Web and Game Development with `$state` / `$derived`.
- **Metrics surfaced, never invented:** every figure shown is a string already present in that entry's own bullet points.
- **Responsive with no JavaScript branch:** one component tree, CSS-only breakpoints. The prerendered HTML is the final layout.
- **Performance:**
  - Full **SSG** — the first viewport needs no JavaScript.
  - Videos load and play only in view, and pause when the tab is hidden.
  - Fixed aspect-ratio media frames — no layout shift.
- **Motion:** one `reveal` action driven by `IntersectionObserver` (never on mount), custom easing curves, `scale(0.97)` press feedback, hover gated behind `(hover: hover)`, and full `prefers-reduced-motion` support.
- **Accessibility:** WCAG AA measured on every text/field pair, `tablist` with roving tabindex and arrow keys, skip link, visible focus rings, scroll-spy with `aria-current`.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.2 or higher) — the only runtime this project needs.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mateo-cabrera/mateo-cabrera.com.git
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

### Building for Production

To create a production-ready static build:

```bash
bun run build
```

The build fails if `static/CV-Mateo-Cabrera.pdf` is older than the content
layer it is printed from. Regenerate it with `bun run cv`, which reprints the
PDF from the `/cv` route and stamps the content hash in `.cv-hash`.

A `pre-push` hook refuses to push `main` when `bun run lint`, `bun run check` or
`bun run build` fails, so a broken deploy cannot leave the machine. It runs only
when the push touches `main` — feature branches stay instant — and
`git push --no-verify` is the deliberate way out. `bun install` points git at
`.githooks/` for you; if you skipped it, `git config core.hooksPath .githooks`.

Two verification scripts back the design work, neither pulling a third-party package:
`bun run a11y` measures WCAG contrast on the rendered pages over the Chrome
DevTools Protocol, and `bun run shots` refreshes the review captures.

## 📂 Project Structure

- `/src/app.css`: the design system — `@theme` tokens, signage primitives, base layer.
- `/src/lib/content`: the typed content layer (`types.ts` plus one module per section). All copy lives here.
- `/src/lib/components`: presentational Svelte components only.
- `/src/lib/actions`: `reveal` (scroll reveal) and `lazyPlay` (viewport-gated video).
- `/src/lib/assets`: project screenshots, logos, and WebM previews.
- `/src/routes`: the single page, the `/cv` sheet, and the layout.
- `/static/fonts`: the self-hosted Archivo variable files.

## ✉️ Contact

- **LinkedIn:** [mateo-cabrera](https://www.linkedin.com/in/mateo-cabrera/)
- **GitHub:** [@mateo-cabrera](https://github.com/mateo-cabrera)
- **Email:** [mateo.cabrera@epitech.eu](mailto:mateo.cabrera@epitech.eu)

---

_Designed and built by Mateo Cabrera © 2026_
