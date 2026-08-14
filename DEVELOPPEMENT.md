# Notes techniques

Documentation du site de ce dépôt. Le README, lui, présente le profil.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site démarre sur http://localhost:5173

## Construire la version de production

```bash
npm run build
```

Le résultat est dans `dist/`. `vite.config.js` utilise `base: './'`, donc le site
fonctionne aussi bien à la racine d'un domaine que dans un sous-dossier
GitHub Pages, sans rien changer.

## Mise en ligne

Le déploiement est automatique : `.github/workflows/deploy.yml` reconstruit le
site et le publie à chaque push sur `main`.

Adresse du site : <https://olayode-ilerioluwa.github.io/Projet-Portfolio/>

Pour publier une modification :

```bash
git add .
git commit -m "Mise à jour du contenu"
git push
```

> `node_modules/` et `dist/` sont exclus par `.gitignore` : ils sont
> reconstruits par GitHub, inutile de les envoyer.

Un réglage a dû être fait une fois, dans **Settings → Pages → Source** :
choisir **GitHub Actions**, et non « Deploy from a branch ». Sans ça, GitHub
publie les fichiers sources bruts au lieu du site construit, et la page reste
blanche.

## Modifier le contenu

**Tout le texte est dans `src/data.js`.** Aucun composant à toucher pour changer
un mot, ajouter un projet ou une étape de parcours : les sections se régénèrent
à partir de ce fichier.

| Ce que tu veux changer | Où |
|---|---|
| Nom, accroche, statut, lieu | `profil` |
| Les 4 chiffres sous le hero | `chiffres` |
| Le texte « À propos » | `aPropos` |
| Compétences techniques | `competences` |
| Langues, certifications | `langues`, `certifications` |
| Le projet Oratis IA | `projetPrincipal` |
| Les projets d'école | `projets` |
| Les projets persos | `projetsPerso` |
| Formation, stages | `parcours` |
| « Ma façon de travailler » | `methode` |
| Email, LinkedIn, GitHub, téléphone | `contact` |

## Ce qui reste à compléter

Deux `TODO` sont marqués dans `src/data.js` :

1. **L'année 2024 – 2025.** L'entrée de parcours indique « Année en activité
   professionnelle » sans préciser le poste ni l'employeur. À compléter, même
   si le travail n'était pas dans l'informatique.
2. **L'email.** `iolayode@lerebours.fr` est l'adresse du lycée : elle expirera
   à la fin du BTS.

## Structure

```
src/
  data.js              tout le contenu
  styles.css           toute la mise en forme (pas de framework)
  App.jsx              assemblage des sections
  components/
    Reveal.jsx         apparition au scroll (désactivée si l'OS demande
                       moins d'animations)
    Nav.jsx            navigation collante + section active
    Hero.jsx           accueil + bandeau de chiffres
    APropos.jsx
    Competences.jsx
    Projets.jsx
    Parcours.jsx
    Methode.jsx
    Contact.jsx        contact + pied de page
```

Le dépôt contient aussi d'anciens projets scolaires (`JEU-HEROS/`,
`JEU_LA_DUELLETE/`, `PROJET_1 - Site_Vitrine/`, `EXERCICE-SOW/`, `Image/`).
Ils ne gênent pas la construction : Vite ne compile que ce qui part de
`index.html`.

L'ancien portfolio (un `index.html` statique à la racine) a été remplacé par le
site React. Il reste consultable dans l'historique git.
