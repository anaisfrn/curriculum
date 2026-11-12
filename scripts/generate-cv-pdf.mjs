// Génère les CV PDF (fr/en) dans public/ à partir de src/data/cv.js
// Usage : npm run cv:pdf   (nécessite Google Chrome ou un autre navigateur Chromium)
import { cv } from '../src/data/cv.js'
import { writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { printToPdf } from './browser.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
// Adresse lisible : sans protocole, sans « www. », sans barre finale, accents décodés
const pretty = (url) => decodeURIComponent(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
const link = (url) => `<a href="${url}">${esc(pretty(url))}</a>`

// Typographie française : espace avant les deux-points
const html = (t, lang, colon = lang === 'fr' ? '\u00A0:' : ':') => `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(t.identity.name)} — ${esc(t.identity.title)}</title>
<style>
  /* Format Lettre : le standard nord-américain */
  @page { size: Letter; margin: 11mm 14mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-size: 8.9pt; line-height: 1.34; color: #171717;
  }
  a { color: inherit; text-decoration: none; }
  h1 { font-size: 22pt; letter-spacing: -0.02em; }
  .title { font-size: 12pt; color: #2563eb; margin-top: 2pt; }
  .contact { color: #525252; margin-top: 5pt; font-size: 8.5pt; }
  h2 {
    font-size: 9.5pt; text-transform: uppercase; letter-spacing: 0.12em;
    color: #2563eb; margin: 9pt 0 4.5pt; padding-bottom: 2.5pt;
    border-bottom: 0.75pt solid #e5e5e5;
    break-after: avoid;
  }
  .profile p + p { margin-top: 3pt; }
  .job { margin-bottom: 6pt; }
  .job-head {
    display: flex; justify-content: space-between; align-items: baseline; gap: 10pt;
    break-after: avoid;
  }
  .job-head strong { font-size: 9.5pt; }
  .muted { color: #737373; font-size: 8.5pt; white-space: nowrap; }
  .company { color: #2563eb; font-weight: 600; }
  .via { color: #737373; font-weight: 400; }
  ul { padding-left: 12pt; margin-top: 2.5pt; }
  li { margin-bottom: 1pt; break-inside: avoid; }
  .tags { margin-top: 2.5pt; color: #737373; font-size: 8pt; }
  .skills p { margin-bottom: 2pt; }
  .project { margin-bottom: 5pt; break-inside: avoid; }
  .project .muted { white-space: normal; }
  .edu { display: flex; justify-content: space-between; gap: 10pt; margin-bottom: 3pt; break-inside: avoid; }
</style>
</head>
<body>
  <h1>${esc(t.identity.name)}</h1>
  <p class="title">${esc(t.identity.title)}</p>
  <p class="contact">
    ${[
      t.identity.location && esc(t.identity.location),
      `<a href="mailto:${t.identity.email}">${esc(t.identity.email)}</a>`,
      t.identity.phone && esc(t.identity.phone),
      t.identity.linkedin && link(t.identity.linkedin),
      t.identity.github && link(t.identity.github),
    ]
      .filter(Boolean)
      .join(' · ')}
  </p>

  <h2>${esc(t.profile.title)}</h2>
  <div class="profile">
    ${t.profile.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n')}
  </div>

  <h2>${esc(t.experience.title)}</h2>
  ${t.experience.jobs
    .map(
      (j) => `<div class="job">
    <div class="job-head">
      <strong>${esc(j.role)} · <span class="company">${esc(j.company)}</span>${
        j.via ? ` <span class="via">via ${esc(j.via)}</span>` : ''
      }</strong>
      <span class="muted">${esc(j.period)} · ${esc(j.location)}</span>
    </div>
    <ul>${j.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
    ${j.tags?.length ? `<p class="tags">${j.tags.map(esc).join(' · ')}</p>` : ''}
  </div>`
    )
    .join('\n')}

  <h2>${esc(t.skills.title)}</h2>
  <div class="skills">
    ${t.skills.categories
      .map((c) => `<p><strong>${esc(c.name)}${colon}</strong> ${c.items.map(esc).join(', ')}</p>`)
      .join('\n')}
    <p><strong>${esc(t.languages.title)}${colon}</strong> ${t.languages.items
      .map((l) => `${esc(l.name)} (${esc(l.level.toLowerCase())})`)
      .join(', ')}</p>
  </div>

  <h2>${esc(t.projects.sideTitle)}</h2>
  ${t.projects.sideItems
    .filter((p) => p.pdf !== false)
    .map(
      (p) => `<div class="project">
    <p><strong>${esc(p.name)}</strong>${p.link ? ` <span class="muted">(${link(p.link)})</span>` : ''}<br>
    ${esc(p.description)}</p>
  </div>`
    )
    .join('\n')}

  <h2>${esc(t.education.title)}</h2>
  ${t.education.items
    .map(
      (e) => `<div class="edu">
    <span><strong>${esc(e.name)}</strong>${e.org ? ` — ${esc(e.org)}` : ''}</span>
    <span class="muted">${esc(e.period)}</span>
  </div>`
    )
    .join('\n')}
</body>
</html>`

const tmp = mkdtempSync(join(tmpdir(), 'cv-'))
for (const lang of ['fr', 'en']) {
  const file = join(tmp, `cv-${lang}.html`)
  writeFileSync(file, html(cv[lang], lang))
  printToPdf(file, join(root, 'public', cv[lang].identity.cvFile))
}
console.log('PDF générés dans public/')
