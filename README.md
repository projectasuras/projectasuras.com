# Project Asuras — Marketing Website

The main marketing website for **Project Asuras**, a cybersecurity company offering
penetration testing, security training, custom software development, and (soon) security
products. Dark-mode-first, built as a fully client-rendered single-page app.

## Tech Stack

- **Framework:** React 18+ with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **UI Primitives:** Radix UI (`@radix-ui/react-slot`) + custom components
- **Animation:** Framer Motion (scroll reveals, page/section transitions, carousels)
- **Icons:** Lucide React
- **Fonts:** Inter (body) and JetBrains Mono (code/technical accents), loaded via Google Fonts
- **Routing:** React Router DOM (client-side, code-split per route)
- **Forms:** React Hook Form + Zod validation
- **Data fetching:** TanStack Query (wraps the mock API in `src/lib/api.ts`)
- **Markdown:** react-markdown + remark-gfm + rehype-highlight (blog post rendering)

## Getting Started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check and build for production into dist/
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

Requires Node 18+.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Button, Input, Textarea, Select primitives
│   ├── layout/           # Navbar, Footer, BackToTop, CookieBanner, Container
│   ├── shared/            # SectionHeader, ServiceCard, TestimonialCard, StatCounter, PageHero, FadeIn
│   └── sections/          # Page-specific section components, grouped by page (home/, services/, about/, ...)
├── pages/                 # Route-level components (lazy-loaded)
├── hooks/                 # useCountUp, useScrollAnimation, useDebounce, useLockBodyScroll
├── context/               # ThemeContext (dark/light mode)
├── data/                  # Mock data: services, testimonials, caseStudies, blogPosts, team, stats, about
├── lib/                   # utils (cn, formatDate), api (mock endpoints), validators (Zod schemas)
├── types/                 # Shared TypeScript interfaces
└── index.css              # Tailwind entry + global styles
```

## Notes on Mock Data & APIs

All content (services, testimonials, case studies, blog posts, team, stats) lives in
`src/data/*.ts` as typed TypeScript objects — there is no backend. Form submissions
(contact form, newsletter signup, waitlist) go through `src/lib/api.ts`, which currently
simulates network latency and resolves successfully. Swap the function bodies in that file
for real `fetch`/API calls when a backend is available; the calling components (React Query
mutations, React Hook Form submit handlers) do not need to change.

## Theming

Dark mode is the default and is applied via a `dark` class on `<html>`, toggled from the
navbar (sun/moon icon). Preference is persisted to `localStorage` under `asuras-theme` and
falls back to the OS `prefers-color-scheme` on first visit. See `src/context/ThemeContext.tsx`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/services` | Services (Pentest, Training, Software Dev, Products) |
| `/about` | About (mission, team, timeline, certifications) |
| `/case-studies` | Case studies list with industry filter |
| `/case-studies/:slug` | Case study detail |
| `/blog` | Blog list with search, category filter, pagination |
| `/blog/:slug` | Blog post detail (Markdown + syntax highlighting) |
| `/contact` | Multi-step contact form + office info + map |

All routes are code-split with `React.lazy`/`Suspense`.
