# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm start        # Dev server on localhost:3000 (hot reload)
npm run build    # Production build to /build
npm test         # Jest test runner (interactive watch mode)
```

## Architecture

Single-page portfolio website built with **React 18 + TypeScript** (Create React App), styled with **Tailwind CSS**.

### Key Structure

- `src/components/Main.tsx` — Root component, wraps everything in context providers (ModeContext for dark/light theme, MeContext for owner info)
- `src/components/sections/` — Each page section is a separate component (Home, About, Skills, Experiences, Projects, Testimonials, Contact, Header, Footer)
- `src/data/` — Static data files (projects, experiences, testimonials, skills) that feed into section components
- `src/types.ts` — Shared TypeScript interfaces
- `src/contexts/` — React Context definitions (dark/light mode with localStorage persistence, portfolio owner info)
- `src/components/Icons.tsx` — SVG icon components with mode-aware coloring
- `public/images/` — Static assets organized by category (projects/, skills/, companies/, testifiers/, resume/)

### Navigation

No router — uses hash-based navigation (`#home`, `#about-me`, `#skills`, `#work`, `#contact`) with smooth scroll via `scrollIntoView()`.

### Styling

- Tailwind with custom theme in `tailwind.config.js`: custom color palette (grey-light/grey-dark with 10 shades), typography scale (heading-1/2/3, subtitle, body-1/2/3) with responsive desktop/tablet/mobile variants
- Global CSS in `src/index.css`: custom animations (wave, magnify-pulse), scrollbar theming, smooth scroll
- Dark mode via Tailwind's `selector` strategy, toggled through ModeContext

### Patterns

- Intersection Observer API for triggering animations on scroll
- All portfolio data is static (no API calls) — edit files in `src/data/` to update content
- Functional components with hooks throughout; no class components
