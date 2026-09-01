# CLAUDE.md — Portfolio `app-web-me`

Fichier de référence pour travailler sur ce projet. Objectif : garder une trace de
l'architecture, du process de déploiement et des décisions, pour bien gérer le portfolio dans la
durée (notamment le remplacement des « faux projets » démo par de vrais projets).

## 1. Présentation
- Portfolio personnel de **Gael Delescluse**.
- En ligne sur **GitHub Pages**, domaine **Gandi** : `https://www.gael-delescluse.com`.
- Rôle : vitrine des projets data / IA / dev + parcours. Certains projets sont des démos
  « vitrine » amenées à être remplacées par de vrais projets plus solides.
- Repo GitHub : `https://github.com/HaDock404/app-web-me`.

## 2. Stack & commandes
- **Create React App** (`react-scripts@5.0.1`), **React 18**.
- **`react-router-dom@6` en `HashRouter`** (les routes ont un `#`, workaround classique pour
  GitHub Pages sur un site statique sans réécriture serveur).
- `styled-components` : usage minimal (surtout `src/styles/createGlobalStyle.jsx`). La majorité du
  style est du **CSS classique** dans `src/styles/`.

Commandes :
```bash
npm start        # dev (localhost:3000)
npm run build    # build de prod dans build/
npm run deploy   # predeploy=build, puis gh-pages -d build  → publie sur GitHub Pages
```
- **Déploiement 100 % manuel** : pas de GitHub Actions. On déploie avec `npm run deploy`.
- Le domaine custom est porté par `public/CNAME` (`www.gael-delescluse.com`) — ne pas le
  supprimer, il est recopié dans `build/` au déploiement.

## 3. Architecture du contenu (le point clé pour gérer le site)
Chaque projet du portfolio suit **le même pattern répété** :

1. **Page** : `src/pages/ArticleXX.jsx` — la page détaillée du projet.
2. **Route** : une entrée dans `src/index.jsx`
   (`<Route path="/slug" element={<ArticleXX />} />`).
3. **Carte de listing** : une carte dans un des composants de la Home
   `src/components/Articles.jsx`, `Articles2.jsx`, `Articles3.jsx` ou `Articles4.jsx`.
4. **Texte source** : le rédactionnel est aussi stocké en clair dans
   `documentation/contentXX.txt`.
5. **Médias** : images / svg / vidéos dans `src/assets/` (`.png`, `.svg`, `.mp4`).

Composants transverses : `Header.jsx`, `Footer.jsx`, `Intro.jsx`, `Username.jsx`, `Article.jsx`
(wrapper de page), `Icon1..10.jsx`, `Separation*.jsx`, `ContributionTitle*.jsx`, `Hadock.jsx`
(grande illustration). `src/styles/ScrollToTop.jsx` remonte en haut à chaque changement de route.

Particularités à connaître :
- **`Article09` n'existe pas** : la numérotation saute de `Article08` à `Article10`. Trou
  historique, pas un bug.
- Le nommage `ArticleXX` **ne reflète pas le contenu** — se fier au tableau d'inventaire (§6) pour
  savoir quel fichier correspond à quel projet.

## 4. Ajouter / remplacer un projet
**Ajouter un nouveau projet :**
1. Créer `src/pages/ArticleYY.jsx` (copier une page existante comme modèle).
2. Ajouter l'import + la `<Route path="/mon-slug" ...>` dans `src/index.jsx`.
3. Ajouter la carte correspondante dans le bon `src/components/Articles*.jsx`.
4. Créer `documentation/contentYY.txt` avec le texte.
5. Déposer les médias dans `src/assets/`.
6. Ajouter l'URL dans `public/sitemap.xml`.

**Remplacer un « faux projet » par un vrai :**
- Réécrire la `ArticleXX.jsx` concernée + son `documentation/contentXX.txt` + remplacer ses assets.
- **Garder le même slug/route si l'URL est déjà indexée** (évite les liens morts et préserve le
  SEO). Sinon, mettre à jour la route dans `index.jsx` **et** `public/sitemap.xml`, et penser aux
  liens internes dans les cartes `Articles*.jsx`.

## 5. Intégrations API
Le front est **statique** et ne contient **aucun secret** : les clés/API vivent dans des backends
séparés. Les pages projet ne font que **lier** vers ces services.

- **Google Cloud Run** — 3 APIs serverless déployées par Gael
  (projet GCP `782672784164`, région `northamerica-northeast1`) :
  - Vision / U-Net → `api-vision-computer` (projet `/u-net_model`)
  - BERT / sentiment → `api-emoxion` (projet `/bert-tweet`)
  - YouTube downloader → `api-youtube` (projet `/youtube-downloader`)
- **APIs gouvernementales FR** : **Sirene** + **INSEE** (projet chatbot `/chatbot_ai`).

## 6. Inventaire des projets
| Projet | Route | Fichier | Année | Type |
|---|---|---|---|---|
| About Me (bio interactive) | `/about-me` | `Article01.jsx` | 2020 | Perso |
| TotalEnergies – data | `/total-energies` | `Article02.jsx` | 2021 | Pro |
| Chatbot + AI (Sirene/INSEE) | `/chatbot_ai` | `Article03.jsx` | 2025 | Pro |
| Baudry – production | `/baudry` | `Article04.jsx` | 2016 | Pro |
| Hieroglyphs (lib d'icônes npm) | `/hieroglyphs` | `Article05.jsx` | 2025 | Dev |
| U-Net (vision, Cloud Run) | `/u-net_model` | `Article06.jsx` | 2024 | ML |
| YouTube Downloader (Cloud Run) | `/youtube-downloader` | `Article07.jsx` | 2020 | ML |
| BERT sentiment (Cloud Run) | `/bert-tweet` | `Article08.jsx` | 2024 | ML |
| Data Snake Game | `/data-snake-game` | `Article10.jsx` | 2024 | Data |
| GitLab CI/CD | `/gitlab-CI_CD` | `Article11.jsx` | 2024 | DevOps |
| Arduino / ATTiny85 | `/arduino` | `Article12.jsx` | 2020 | Embarqué |
| SaaS / expérimentation | `/saas` | `Article13.jsx` | 2015 | Dev |
| Memgraph (graph DB) | `/memgraph` | `Article14.jsx` | 2025 | Pro |
| Team cohesion (Fortnite) | `/team-cohesion` | `Article15.jsx` | 2025 | Soft-skills |
| Water sport (CISPA) | `/water-sport` | `Article16.jsx` | 2009 | Soft-skills |
| Woodworking (skate press) | `/woodworking` | `Article17.jsx` | 2013 | Soft-skills |
| Knowledge base | `/knowledge-base` | `Article18.jsx` | 2022 | Dev |

## 7. Dette technique connue (backlog)
Contexte marque : **Alesco-Group = employeur actuel, Erwin Labs = expérience passée**. Les
`og:description` / `twitter:description` de `public/index.html` ont été alignées sur
« Alesco-Group » (fait) ; les projets liés à Erwin gardent leurs références (expérience passée).

À traiter plus tard, par ordre d'intérêt :
- **Dépendances en retard** : React 18 → 19, `react-router-dom` 6 → 7, `@testing-library/*` très
  anciennes, `web-vitals` v2 → v6. Rien de cassé, montée de version à planifier.
- **Accessibilité SVG** : `Icon*.jsx` et `Hadock.jsx` sans `aria-label`/`title`.
- **Code mort** : blocs commentés dans `Articles.jsx`, `Articles2.jsx`, `Articles4.jsx`,
  `Intro.jsx`.
- **`manifest.json` générique** : encore « Create React App Sample » → mettre le vrai nom.
- **Git** : `.DS_Store` et le dossier `/build` sont trackés alors qu'ils sont dans `.gitignore`
  (à retirer du suivi : `git rm -r --cached build` / `.DS_Store`).
- **Dépendances peu utiles** : `web-vitals` importé mais `reportWebVitals()` appelé sans callback ;
  `styled-components` quasi inutilisé.
- **Numérotation** : `Article09` manquant + nommage `ArticleXX` non parlant.

## 8. Conventions de travail
- Commentaires majoritairement en anglais (un commentaire FR résiduel dans `Article.jsx`).
- **Ne rien committer ni déployer (`npm run deploy`) sans demande explicite de Gael.**
- Deux lockfiles présents (`package-lock.json` + `yarn.lock`) ; **npm** est l'outil principal.
