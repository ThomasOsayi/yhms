# YHMS — Repository Layout & Implementation Summary

**Project:** Youth in Health & Medical Sciences (YHMS)  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion

---

## File structure (tree)

```
yhms/
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── REPO_LAYOUT.md          ← this file
├── tsconfig.json
│
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── get-involved/
    │   │   └── page.tsx
    │   ├── impact/
    │   │   └── page.tsx
    │   └── programs/
    │       └── page.tsx
    │
    ├── components/
    │   ├── AnimateIn.tsx
    │   ├── CTABanner.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── ImageBanner.tsx
    │   ├── Navbar.tsx
    │   ├── StaggerChildren.tsx
    │   └── WhyItMatters.tsx
    │
    └── lib/
        └── firebase.ts
```

*Excluded from tree: `node_modules/`, `.next/`, `.git/`*

---

## What’s implemented

### App & routing

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home: Hero, Why It Matters, Image Banner, CTA |
| `/programs` | `src/app/programs/page.tsx` | Programs overview (High School, College, Ambassador) |
| `/get-involved` | `src/app/get-involved/page.tsx` | Roles (Student, Mentor, Ambassador) + FAQ |
| `/impact` | `src/app/impact/page.tsx` | Impact mosaic, testimonials, student projects |
| `/contact` | `src/app/contact/page.tsx` | Contact info + contact form (UI only) |

- **Root layout** (`layout.tsx`): DM Sans + Fraunces fonts, global metadata, shared `Navbar` and `Footer`.

### Shared layout

- **Navbar** — Fixed top bar, logo “Y” + “YHMS”, nav links (Home, Programs, Get Involved, Impact, Contact), active state, mobile hamburger menu.
- **Footer** — Logo, short blurb, link columns (Programs, Get Involved, Organization), social placeholders (IG, TT, YT, IN), copyright.

### Components

| Component | Role |
|-----------|------|
| **Hero** | Full-height hero with headline, subtext, CTA buttons, and hero image; Framer Motion entrance. |
| **WhyItMatters** | “Why it matters” section with three value cards (Closing the Access Gap, Mentorship, Community First) and images. |
| **ImageBanner** | Mid-page image banner section. |
| **CTABanner** | Reusable CTA block (headline + button); used on home and impact. |
| **AnimateIn** | Scroll-triggered motion wrapper (opacity, y/x, delay, duration, `once`). |
| **StaggerChildren** / **StaggerItem** | Staggered list animations for grids (impact mosaic, testimonials, get-involved cards). |

### Styling

- **Tailwind 4** via `@tailwindcss/postcss` and `globals.css`.
- **Design tokens** in `@theme`: brand teal/orange/cream/dark, borders, `--font-sans` (DM Sans), `--font-serif` (Fraunces).
- **Utilities**: `.img-zoom` (hover scale), `.faq-answer` / `.faq-answer.open` for FAQ accordion.

### Data & behavior

- **No backend or API:** All copy and “data” (programs, roles, testimonials, FAQs, contact fields) are in-component constants.
- **Contact form:** Markup and styling only; no submit handler or integration.
- **Firebase:** `src/lib/firebase.ts` is a placeholder (commented config); not wired into the app.

### Dependencies (from `package.json`)

- **Runtime:** `next` 16.1.6, `react` / `react-dom` 19.2.3, `framer-motion` ^12.
- **Build/Styling:** `tailwindcss` ^4, `@tailwindcss/postcss` ^4.
- **Dev:** TypeScript ^5, ESLint 9, `eslint-config-next`, `@types/node`, `@types/react`, `@types/react-dom`.

---

## Summary

YHMS is a **static marketing site** for a youth health/medical sciences nonprofit. It has:

- **5 routes:** Home, Programs, Get Involved, Impact, Contact.
- **Shared chrome:** Navbar (with mobile menu) and Footer.
- **Reusable motion:** `AnimateIn` and `StaggerChildren` used across pages.
- **Consistent design:** Brand colors, typography, and layout (e.g. max-width 1280px, shared section patterns).
- **Placeholder integrations:** Contact form (no submit), Firebase (config only).

To turn it into a full product you’d add: form submission (e.g. API route or Firebase), optional auth, and dynamic content (CMS or database) where needed.
