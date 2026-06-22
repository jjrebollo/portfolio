# Juan José Rebollo — Portfolio

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node ≥22.12](https://img.shields.io/badge/Node-%E2%89%A522.12-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Personal portfolio site for **Juan José Rebollo Barranco** — Engineering Leader with 10+ years in iOS development and 7+ years in technical leadership. Built as a static, content-driven site with Astro 6 and TypeScript.

🌐 **Live site:** [jrebollo.dev](https://jrebollo.dev)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 6](https://astro.build) — static output, zero JS by default |
| Language | TypeScript in strict mode (`astro/tsconfigs/strict`) |
| Styling | Plain CSS with design tokens (`src/styles/global.css`) |
| Content | Locale-specific data files (`src/i18n/en.ts`, `es.ts`, `pt.ts`) |
| i18n | Astro built-in i18n with EN / ES / PT support |
| Hosting | [Vercel](https://vercel.com) — auto-deploys on push to `main` |
| Runtime | Node ≥ 22.12.0 |

## Project Structure

```text
/
├── public/
│   ├── Juan_Rebollo_CV.pdf # CV download
│   ├── favicon.svg         # JR monogram (black)
│   └── favicon.ico         # Multi-resolution ICO
├── src/
│   ├── components/         # Section components (Hero, Skills, Projects, VideoSection…)
│   ├── data/
│   │   └── portfolio.ts    # Re-exports from i18n/en (backward compat)
│   ├── i18n/
│   │   ├── index.ts        # Language config, flags, locale paths
│   │   ├── en.ts           # English content + labels
│   │   ├── es.ts           # Spanish content + labels
│   │   └── pt.ts           # Portuguese content + labels
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Header, nav, lang switcher, footer
│   │   ├── HomeLayout.astro  # Shared layout for all home pages
│   │   └── WorkLayout.astro  # Shared layout for the /work video pages
│   ├── pages/
│   │   ├── index.astro     # English (/)
│   │   ├── work.astro      # English videos (/work)
│   │   ├── es/
│   │   │   ├── index.astro # Spanish (/es/)
│   │   │   └── work.astro  # Spanish videos (/es/work)
│   │   └── pt/
│   │       ├── index.astro # Portuguese (/pt/)
│   │       └── work.astro  # Portuguese videos (/pt/work)
│   ├── styles/
│   │   └── global.css      # Design tokens + all styles
│   └── types/
│       └── portfolio.ts    # TypeScript interfaces
├── .github/
│   └── copilot-instructions.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Internationalisation (i18n)

The site supports **English**, **Spanish**, and **Portuguese**:

- English is served at `/` (no prefix)
- Spanish at `/es/`, Portuguese at `/pt/`
- All text content lives in `src/i18n/{en,es,pt}.ts`
- The language switcher in the nav shows the active language's flag and code; clicking another language navigates to the equivalent page and persists the choice in `localStorage`
- First-time visitors are automatically redirected to their browser language if it is supported; English is the fallback
- `hreflang` alternate links are included in `<head>` for SEO

To update content, edit the relevant locale file — or all three to keep them in sync.

## Content

All portfolio content is split by locale in **`src/i18n/`**. Each file exports:

- `siteMeta` — page title, description, language code, CV href
- `navigationLinks` — header nav items (translated)
- `siteContent` — hero, skill groups, project highlights, strengths, recommendations, contact, video groups, UI labels

Types are defined in `src/types/portfolio.ts`.

## Recommendations section

Home pages (`/`, `/es/`, `/pt/`) include a **LinkedIn Recommendations** section.

- Data source is locale-specific in `src/i18n/{en,es,pt}.ts` under `siteContent.recommendations.items`
- Recommendation cards use compact previews with inline expand/collapse (`More...` / `Less...`)
- Expand/collapse labels and source link text are localized via `siteContent.labels`
- Mobile layout uses a single column; wider screens use a masonry-style two-column flow
- The source link points to the public LinkedIn profile URL configured in `sourceUrl`

To add, remove, or reorder recommendations, edit the `recommendations.items` array in each locale file.

## Videos page

The `/work` route (and `/es/work`, `/pt/work`) is a dedicated page showcasing YouTube recordings of past projects:

- **Inditex** — Logistics App
- **JLR** — InControl Remote App v2
- **JLR** — InControl Remote Watch App
- **JLR** — InControl Remote App v1

Projects are listed in reverse chronological order. Videos are embedded via `youtube-nocookie.com` with `loading="lazy"` for privacy and performance. YouTube Shorts are rendered at the correct 9:16 aspect ratio. The lang switcher correctly links to the equivalent locale work page when on `/work`.

To add or reorder videos, edit the `videoGroups` array in `src/i18n/{en,es,pt}.ts`.

## Getting Started

> Requires Node ≥ 22.12.0. On macOS with an older system Node, use `node@22` via Homebrew.

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Start dev server accessible on the local network (for mobile testing)
npm run dev -- --host

# Type-check the project
npm run check

# Build for production
npm run build

# Preview the production build
npm run preview
```

If using the system Node on macOS, prefix commands with:
```bash
export PATH="/usr/local/opt/node@22/bin:$PATH"
```

## Path Aliases

All internal imports use the `~/` alias (mapped to `src/` in `tsconfig.json`) instead of relative paths:

```ts
import BaseLayout from "~/layouts/BaseLayout.astro";
import type { SiteMeta } from "~/types/portfolio";
import { siteContent } from "~/i18n/en";
```

This avoids `../../` chains and makes imports refactor-safe regardless of file depth. The alias is resolved natively by Vite — no extra plugins are required.

## Deployment

The site is deployed to **Vercel** at [jrebollo.dev](https://jrebollo.dev). Every push to `main` triggers an automatic redeployment. The domain is managed via Namecheap with an A record pointing to Vercel's IP.

## Design Tokens

Key CSS custom properties defined in `global.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f4efe6` | Page background |
| `--accent` | `#0f766e` | Teal — primary actions |
| `--highlight` | `#cf6a32` | Amber — download / emphasis |
| `--radius-lg` | `28px` | Cards |
| `--radius-sm` | `999px` | Pills, buttons |

## Versioning & releases

This project follows [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`)
and uses [Conventional Commits](https://www.conventionalcommits.org/). Releases are
automated with [release-please](https://github.com/googleapis/release-please):

- Branching model: **GitHub Flow** — short-lived feature branches merged into `main` via PR.
- Commit messages drive the version bump: `fix:` → patch, `feat:` → minor,
  `feat!:` / `BREAKING CHANGE:` → major.
- On every push to `main`, release-please maintains a release PR that updates
  `package.json`, `CHANGELOG.md`, and—when merged—creates the git tag and GitHub Release.

Common commit types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `ci`, `build`.

## License

[MIT](LICENSE)
