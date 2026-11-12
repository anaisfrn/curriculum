// Génère public/og-card.png (1200×630, aperçu de partage LinkedIn/Slack/iMessage)
// à partir de src/data/cv.js — même logique que generate-cv-pdf.mjs.
// Usage : npm run og:image   (nécessite Google Chrome ou un autre navigateur Chromium)
import { cv } from '../src/data/cv.js'
import { writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { screenshot } from './browser.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const t = cv.fr // la carte est en français, comme la langue par défaut du site

// Lignes de présentation éditoriales (la liste exhaustive vit dans cv.js)
const stackLines = [
  'User stories · Maquettes · API · Agilité',
  'Java · Spring Boot · Vue 3 · Angular · IA au quotidien',
]

// Adresse publique du site (à garder alignée avec index.html)
const siteUrl = 'anaisfrn.github.io/curriculum'

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    position: relative;
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    background: #ffffff; color: #171717;
  }
  /* halo bleu discret, comme dans l'en-tête du site */
  .glow {
    position: absolute; right: -160px; top: -40px; width: 760px; height: 760px;
    border-radius: 50%; background: radial-gradient(closest-side, #dbeafe 0%, rgba(219,234,254,0) 72%);
  }
  .text { position: absolute; left: 72px; top: 96px; right: 72px; }
  .overline {
    display: flex; align-items: center; gap: 18px;
    color: #2563eb; font-size: 21px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.14em;
  }
  .overline::before { content: ""; width: 48px; height: 2px; background: #2563eb; }
  h1 { font-size: 112px; line-height: 1; letter-spacing: -0.035em; margin: 26px 0 34px; }
  .stack { color: #525252; font-size: 27px; line-height: 1.55; }
  .url { position: absolute; left: 72px; bottom: 54px; color: #a3a3a3; font-size: 22px; }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="text">
    <p class="overline">${t.identity.title.replace(' & ', ' · ').replace(/&/g, '&amp;')}</p>
    <h1>${t.identity.name}</h1>
    <p class="stack">${stackLines.join('<br>')}</p>
  </div>
  <p class="url">${siteUrl}</p>
</body>
</html>`

const tmp = mkdtempSync(join(tmpdir(), 'og-'))
const file = join(tmp, 'og-card.html')
writeFileSync(file, html)
screenshot(file, join(root, 'public', 'og-card.png'), 1200, 630)
console.log('og-card.png généré dans public/')
