# Curriculum

CV en ligne bilingue (FR par défaut / EN) — Vue 3 + Vite + Tailwind CSS, prévu pour GitHub Pages.

## Développement

Nécessite [Node.js](https://nodejs.org) 22 ou plus récent.

```bash
npm install
npm run dev        # site servi sur http://localhost:5173/curriculum/
```

## Contenu

Tout le contenu du CV est dans [src/data/cv.js](src/data/cv.js), en deux arbres
parallèles : `cv.fr` et `cv.en`. Toute modification se fait dans les deux langues.

Après une modification du contenu :

```bash
npm run cv:pdf     # régénère public/cv-anais-ferron-{fr,en}.pdf
npm run og:image   # régénère public/og-card.png (seulement si le nom ou le titre change)
```

Ces deux commandes utilisent Google Chrome (ou un autre navigateur Chromium) déjà
installé sur la machine ; aucun paquet supplémentaire n'est requis.

## Déploiement

Le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) construit et
déploie le site sur GitHub Pages à chaque push sur `main`.

Configuration côté GitHub : **Settings → Pages → Source : GitHub Actions**.

La base d'URL est déduite du nom du dépôt. Les adresses `anaisfrn.github.io/curriculum`
écrites dans [index.html](index.html) et [scripts/generate-og-image.mjs](scripts/generate-og-image.mjs)
supposent un dépôt nommé `curriculum` : à ajuster si le dépôt porte un autre nom.
