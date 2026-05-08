# Portfolio Scaffold

Astro + TypeScript portfolio scaffold for a content-driven personal site. The project is structured so content, layout, and presentational sections stay decoupled from each other.

## Stack

- Astro 6
- TypeScript in strict mode
- Static-first architecture with a single deployable app
- Plain CSS with shared design tokens in one global stylesheet

## Runtime

This project targets Node 22.12 or later. On this machine, Homebrew's `node@22` was required because the default Node version was too old for current Astro releases.

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── types/
├── .github/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Flow

Update the portfolio content in `src/data/portfolio.ts`. The homepage composes typed section components from that single data source.

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` builds the production site
- `npm run preview` previews the built site
- `npm run check` runs Astro's project checks

## Next Edits

- Replace the placeholder content in `src/data/portfolio.ts`
- Add real assets under `public/`
- Introduce content collections later if you want projects or writing to move into MDX files
