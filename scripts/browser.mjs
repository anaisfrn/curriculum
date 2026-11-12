// Pilote un navigateur Chromium déjà installé (Chrome, Edge, Brave…) en mode
// headless pour imprimer une page en PDF ou en faire une capture.
// Aucun paquet à installer. Chemin personnalisé : variable CHROME_PATH.
import { existsSync, mkdtempSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const candidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean)

function findBrowser() {
  const found = candidates.find((path) => existsSync(path))
  if (!found) {
    throw new Error(
      'Aucun navigateur Chromium trouvé. Installez Google Chrome ou indiquez son chemin dans CHROME_PATH.'
    )
  }
  return found
}

function run(args) {
  // Profil temporaire : n'interfère pas avec un Chrome déjà ouvert
  const profile = mkdtempSync(join(tmpdir(), 'cv-chrome-'))
  execFileSync(
    findBrowser(),
    ['--headless=new', '--disable-gpu', '--no-first-run', `--user-data-dir=${profile}`, ...args],
    { stdio: ['ignore', 'ignore', 'pipe'], timeout: 120_000 }
  )
}

export function printToPdf(htmlFile, out) {
  run(['--no-pdf-header-footer', `--print-to-pdf=${out}`, `file://${htmlFile}`])
}

export function screenshot(htmlFile, out, width, height) {
  run([
    `--window-size=${width},${height}`,
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--screenshot=${out}`,
    `file://${htmlFile}`,
  ])
}
