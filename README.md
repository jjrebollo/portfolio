# Juan José Rebollo — Portfolio

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node ≥22.12](https://img.shields.io/badge/Node-%E2%89%A522.12-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Personal portfolio site for **Juan José Rebollo Barranco** — Engineering Leader with 10+ years in iOS development and 7+ years in technical leadership. Built as a static, content-driven site with Astro 6 and TypeScript.

🌐 **Live site:** [jjrebollo.github.io/portfolio](https://jjrebollo.github.io/portfolio) _(or your deployment URL)_

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 6](https://astro.build) — static output, zero JS by default |
| Language | TypeScript in strict mode (`astro/tsconfigs/strict`) |
| Styling | Plain CSS with design tokens (`src/styles/global.css`) |
| Content | Single typed data file (`src/data/portfolio.ts`) |
| Runtime | Node ≥ 22.12.0 |

## Project Structure

```text
/
├── public/
│   ├── cv.pdf              # CV download
│   ├── favicon.svg         # JR monogram (black)
│   └── favicon.ico         # Multi-resolution ICO
├── src/
│   ├── components/         # Section components (Hero, Skills, Projects…)
│   ├── data/
│   │   └── portfolio.ts    # ← single source of truth for all content
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
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

## Content

All portfolio content lives in **`src/data/portfolio.ts`** — it is the only file that needs editing to update what appears on the site. It exports:

- `siteMeta` — page title, description, CV href
- `navigationLinks` — header nav items
- `siteContent` — hero, skill groups, project highlights, strengths, contact

Types are defined in `src/types/portfolio.ts`.

## Getting Started

> Requires Node ≥ 22.12.0. On macOS with an older system Node, use `node@22` via Homebrew.

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

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

## Design Tokens

Key CSS custom properties defined in `global.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f4efe6` | Page background |
| `--accent` | `#0f766e` | Teal — primary actions |
| `--highlight` | `#cf6a32` | Amber — download / emphasis |
| `--radius-lg` | `28px` | Cards |
| `--radius-sm` | `999px` | Pills, buttons |

## License

[MIT](LICENSE)
