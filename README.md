# mateo-cabrera.com 🚀

This is the source code for my personal portfolio, accessible at [mateo-cabrera.com](https://mateo-cabrera.com).

I am a **Full Stack Web Developer** and **Game Developer** student at Epitech. This project serves as a central hub for my professional experience, web projects, and game development experiments.

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide Svelte](https://lucide.dev/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) (Static Site Generation)
- **Media:** Optimized images with `sveltejs/enhanced-img` and custom lazy-loading video logic.

## ✨ Key Features

- **Responsive Design:** A custom split-pane layout for desktop and a streamlined vertical view for mobile.
- **Project Filtering:** Dynamic switching between Web Development and Game Development projects using Svelte's reactive `$state` and `$derived` runes.
- **Performance Optimized:**
  - Full **SSG (Static Site Generation)** for near-instant load times.
  - **Intersection Observer:** Videos only play and load when they enter the viewport to save user bandwidth and CPU.
  - **Blur-up images:** Smooth transitions for high-resolution project screenshots.
- **Modern Transitions:** Built-in Svelte transitions (`fly`, `fade`) for a premium feel.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm / pnpm / yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mateo-cabrera/mateo-cabrera.com.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production-ready static build:

```bash
npm run build
```

## 📂 Project Structure

- `/src/lib/components`: Atomic Svelte components (Header, Projects, Skills, etc.).
- `/src/lib/assets`: Project images, GIFs, and videos.
- `/src/routes`: The main page logic and layout configuration.
- `/src/app.css`: Tailwind CSS v4 imports and global styles.

## ✉️ Contact

- **LinkedIn:** [mateo-cabrera](https://www.linkedin.com/in/mateo-cabrera/)
- **GitHub:** [@mateo-cabrera](https://github.com/mateo-cabrera)
- **Email:** [mateo.cabrera@epitech.eu](mailto:mateo.cabrera@epitech.eu)

---

_Designed and built by Mateo Cabrera © 2026_
