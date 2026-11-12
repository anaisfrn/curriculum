# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Bilingual (FR default / EN) single-page CV site for Anaïs Ferron — Vue 3 + Vite + Tailwind CSS v4, meant for GitHub Pages. No router, no state library, no tests. Typographic hero (no photo), employer/client logo strip, neutral + blue palette.

## Commands

```bash
npm run dev        # dev server (site served at /curriculum/, not /)
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
npm run cv:pdf     # regenerate public/cv-anais-ferron-{fr,en}.pdf from cv.js
npm run og:image   # regenerate public/og-card.png (link-share preview) from cv.js
```

Needs Node 22+. `cv:pdf` and `og:image` drive an installed Chromium browser in headless mode through [scripts/browser.mjs](scripts/browser.mjs) (Google Chrome by default, `CHROME_PATH` to override). There is no lint or test setup.

## Architecture

**All content lives in [src/data/cv.js](src/data/cv.js)** as two parallel trees, `cv.fr` and `cv.en`. [App.vue](src/App.vue) computes `t = cv[lang]` and passes it to every section component; components are dumb renderers of `t`. Any content edit must be made in **both** languages, keeping the structures parallel:

- `hero.companies` (names, used as alt text) must stay in the same order as the `logos` array in [HeroSection.vue](src/components/HeroSection.vue). A `src: null` entry renders the name as text (used for BRP, whose logo does not survive the monochrome-silhouette filter).
- An empty string is a valid "hide this" value: `identity.phone`, `identity.location`, `identity.cvFile`, an education item's `period` etc. are rendered behind `v-if`.
- `experience.jobs[].via` is the consulting firm a mandate went through (shown as "via X").
- `projects.sideItems[].pdf: false` keeps an item on the site but out of the PDF.
- French strings get non-breaking spaces before `: ; ? !` automatically (`frenchSpacing` at the bottom of cv.js) — write normal spaces in the source.

**After any content change in cv.js, run `npm run cv:pdf`** — the downloadable PDFs are generated from the same data ([scripts/generate-cv-pdf.mjs](scripts/generate-cv-pdf.mjs)) and must not diverge from the site. The PDF is US Letter and **must stay at exactly two pages in each language**: check the page count after every content change and tighten wording rather than shrinking the font. If `identity.name`/`identity.title` change, also run `npm run og:image` and update the OG/JSON-LD tags hardcoded in [index.html](index.html).

**i18n / theme:** no library. [useLang.js](src/composables/useLang.js) and [useTheme.js](src/composables/useTheme.js) are module-level singletons persisted to localStorage; language defaults to French, theme defaults to system preference and is pre-applied by an inline script in [index.html](index.html) to avoid a flash. Dark mode is class-based via `@custom-variant dark` in [src/style.css](src/style.css) — style both modes on every element (`dark:` variants).

**Deploy:** push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (GitHub Pages, Source: GitHub Actions). The Vite base is `/curriculum/` locally and `/<repo-name>/` in CI via `VITE_BASE`. The public URL `anaisfrn.github.io/curriculum` is hardcoded in index.html and scripts/generate-og-image.mjs.

## Content conventions (owner's decisions — keep them)

This repository is public. Owner constraints that must not be published live in
`CLAUDE.local.md` (git-ignored) — read it when it exists, and never copy its content into a
tracked file.

- **Positioning:** hybrid profile, "Analyste fonctionnelle & développeuse full-stack"; nothing in the copy should close a door (analyst, developer, Scrum Master / PO roles are all welcome). The profile must read as current: AI usage is a first-class theme.
- **Contact details:** no phone number, no city — location is "Québec, Canada" only. No confidential employer details.
- **Honesty over polish:** only claim what is true and defensible in an interview.
  - AI tools: GitHub Copilot and Microsoft 365 Copilot at work; Claude / Claude Code for personal projects only.
  - Scrum Master and Product Owner (2024) are trainings **without certification** — never label them as certifications.
  - BRP: full-time developer who introduced Scrum on her own initiative for a few months.
  - Desjardins (current): mostly functional analysis, occasional development.
  - Web3 / Solidity are listed as notions only.
  - No invented figures: no team sizes, volumes or percentages unless the owner provides them.
- **Personal projects:** the management dashboard keeps its generic description ("a small service business") and its repository is private — never link it. The workout tracker links to its public repository. The site itself is not listed as a project (owner's decision).
- **Education:** most recent first. The ÉTS entry uses the exact title from the owner's attestation of participation (20–22 May 2026, 14 hours, 1.4 UEC); the English title is a translation of it.
