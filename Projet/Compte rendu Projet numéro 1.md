##### **Compte rendu Projet numéro 1**



###### Groupe : Yanis , Ilerioluwa , Maxence et Abdoulaye



Dans le cadre de notre projet, nous avons choisi de créer un site web autour du Mexique, un pays riche en culture, en histoire et en traditions. L’objectif de notre site, intitulé MexiGO, est de présenter le pays sous un angle touristique, en donnant envie aux visiteurs de le découvrir à travers ses activités, sa gastronomie et son patrimoine.

Dès le premier jour, nous avons commencé par chercher un nom original et représentatif du thème. Le choix de MexiGO symbolise à la fois le Mexique et l’idée de voyage (“Go”).

Nous avons ensuite réparti les tâches au sein de notre groupe :

Yanis et Abdoulaye se sont occupés de la partie réseau, en mettant en place la connexion à un réseau sécurisé permettant d’accéder au site de manière fiable et protégée. (avec un peu de dev)

Ileri et Maxence ont travaillé sur la partie développement web, en créant les différentes pages du site : accueil, activités, histoire, culture gastronomique et mondialisation de la nourriture.

Pour réaliser ce projet, nous avons utilisé différentes ressources en ligne, telles que des sites web, ChatGPT et le document fourni en cours. Ces outils nous ont permis d’apprendre à maîtriser les bases du HTML et du CSS, tout en approfondissant nos connaissances sur le Mexique et son patrimoine.

La partie réseau nous a permis de comprendre l’importance de la sécurité informatique et des protocoles de connexion, afin de garantir un accès sûr au site.

Ce travail nous a permis de développer nos compétences à la fois techniques et organisationnelles, en combinant programmation web, gestion de réseau sécurisé et travail d’équipe, tout en découvrant la culture mexicaine.



| Balise        | ------------------ | Rôle ------------------------------------------------------------------------------------------------------ |
| `<!doctype html>`  | Indique au navigateur que le document est une **page HTML5**.                                          |
| `<html lang="fr">` | Balise racine du document. L’attribut `lang="fr"` précise la **langue du contenu** (ici, le français). |
| `<head>`| Contient les **informations techniques** de la page (non visibles directement).                        |
| `<body>`   | Contient **tout le contenu visible** de la page (texte, images, liens, etc.).                          |

| `<meta charset="utf-8">`   | Définit l’**encodage des caractères**, ici UTF-8, pour bien afficher les accents. |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Rend la page **adaptable aux écrans mobiles**.       |
| `<title>`                | Titre de la page qui s’affiche dans l’**onglet du navigateur**.        |
| `<meta name="description" ...>`            | Brève description du site (utile pour le **référencement Google**).    |
| `<link rel="stylesheet" href="accueil.css">`     | Lie un **fichier CSS** qui définit le style de la page.  |
| `<link rel="stylesheet" href="https://...">| Lie une **feuille de style externe**, ici pour les **icônes Font Awesome**.|


| `<header>`       | Partie supérieure du site (souvent logo + menu).       |
| `<img>`          | Affiche une **image**. L’attribut `src` indique le chemin du fichier et `alt` le texte alternatif.|
| `<nav>`          | Contient les **liens de navigation** du site.      |
| `<li>`           | Élément de **liste** (ici, les éléments du menu).               |
| `<a href="...">` | Lien **cliquable** vers une autre page ou une section (`href` = destination).       |


| `<section>`                    | Définit une **grande partie logique** de la page (intro, services, contact, etc.). |
| `<div>`                        | Conteneur générique pour **regrouper** du contenu ou appliquer un style. |
| `<h1>`, `<h2>`, `<h3>`, `<h4>` | Titres de différentes tailles (du plus important `<h1>` au moins important `<h6>`).|
| `<p>`                          | Paragraphe de texte.                      |
| `<ul>`                         | Liste non ordonnée (**à puces**).       |
| `<li>`                         | Élément d’une liste (`ul` ou `ol`).               |
| `<strong>`                     | Met le texte en **gras sémantique** (plus important).  |
| `<em>` ou `<i>`                | Met le texte en **italique** ou accentue l’intonation.                    |
| `<blockquote>`                 | Sert à afficher une **citation** (comme un témoignage client).       |
| `<small>`                      | Texte en **plus petit**, souvent pour des mentions légales.|


| `<form>`             | Définit un **formulaire** d’envoi de données.                               |
| `<label>`            | Étiquette pour un champ de formulaire. Lié à un champ par l’attribut `for`. |
| `<input>`            | Champ de saisie (texte, email, etc.).                                       |
| `<textarea>`         | Zone de texte **multiligne** (ex: message).                                 |
| `<select>`           | Menu déroulant.                                                             |
| `<option>`           | Élément d’un menu déroulant.                                                |
| `<button>`           | Bouton (ici pour envoyer le formulaire).                                    |
| `<a href="tel:...">` | Lien qui permet d’**appeler directement** un numéro sur mobile.             |


| `<footer>` | Bas de la page (informations légales, contact, liens). |
| `<p>`      | Paragraphe de texte.                                   |
| `<a>`      | Lien cliquable (ex: “Conditions générales de vente”).  |

| Élément       | Rôle                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------- |
| `class="..."` | Donne un **nom de classe** à un élément pour pouvoir le styliser dans le CSS.               |
| `id="..."`    | Identifie un **élément unique** (utilisé pour les liens internes, comme `href="#contact"`). |
| `<br>`        | Retour à la ligne (à éviter en excès).                                                      |
| `&copy;`      | Symbole © pour les copyrights.                                                              |
                                                             |

| **Structure**      | `<html>`, `<head>`, `<body>`                  | base du document            |
| **Texte**          | `<h1>` à `<h6>`, `<p>`, `<strong>`, `<em>`    | contenu écrit               |
| **Listes**         | `<ul>`, `<ol>`, `<li>`                        | menus, listes               |
| **Images / Liens** | `<img>`, `<a>`                                | visuels et navigation       |
| **Formulaire**     | `<form>`, `<input>`, `<textarea>`, `<button>` | contact, saisie utilisateur |
| **Organisation**   | `<section>`, `<div>`, `<header>`, `<footer>`  | structure de la page        |




| Propriété CSS                    | Sert à…                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| `font-family`                    | Détermine la **police d’écriture** du texte.                                                  |
| `font-size`                      | Définit la **taille** du texte.                                                               |
| `font-weight`                    | Définit l’**épaisseur** du texte (normal, gras…).                                             |
| `font-style`                     | Met le texte en **italique**.                                                                 |
| `color`                          | Définit la **couleur du texte**.                                                              |
| `background-color`               | Définit la **couleur de fond** d’un élément.                                                  |
| `background`                     | Permet de définir une **image de fond** (ou une couleur).                                     |
| `background-image`               | Spécifie uniquement l’**image de fond**.                                                      |
| `background-size`                | Contrôle la **taille** de l’image de fond (`cover`, `contain`, ou une valeur en %).           |
| `background-position`            | Détermine **où est placée** l’image de fond (ex: `center`, `top`, `left`).                    |
| `border`                         | Crée une **bordure** autour d’un élément.                                                     |
| `border-radius`                  | Arrondit les **coins** d’un élément.                                                          |
| `margin`                         | Ajoute un **espace extérieur** (autour de l’élément).                                         |
| `padding`                        | Ajoute un **espace intérieur** (entre le bord et le contenu).                                 |
| `width`                          | Définit la **largeur** d’un élément.                                                          |
| `height`                         | Définit la **hauteur** d’un élément.                                                          |
| `max-width` / `min-width`        | Fixe une **largeur maximum ou minimum**.                                                      |
| `display`                        | Définit le **type d’affichage** (ex: `block`, `flex`, `inline-block`).                        |
| `flex-direction`                 | Dans un conteneur `flex`, aligne les éléments en **ligne** (`row`) ou **colonne** (`column`). |
| `justify-content`                | Aligne les éléments **horizontalement** (gauche, centre, espace entre…).                      |
| `align-items`                    | Aligne les éléments **verticalement** dans un conteneur flex.                                 |
| `position`                       | Définit le **positionnement** d’un élément (`relative`, `absolute`, `fixed`…).                |
| `top`, `bottom`, `left`, `right` | Positionnent un élément **par rapport à son conteneur**.                                      |
| `text-align`                     | Aligne le **texte** (gauche, droite, centre, justifié).                                       |
| `letter-spacing`                 | Ajoute de l’**espace entre les lettres**.                                                     |
| `line-height`                    | Définit la **hauteur de ligne** du texte.                                                     |
| `list-style`                     | Change le **style des puces** dans les listes (`none`, `circle`, etc.).                       |
| `cursor`                         | Change le **curseur de la souris** (ex: `pointer` sur un bouton).                             |
| `box-shadow`                     | Ajoute une **ombre** autour d’un élément.                                                     |
| `text-decoration`                | Ajoute ou enlève des **décorations de texte** (ex: soulignement).                             |
| `overflow`                       | Définit ce qu’il se passe si le contenu **dépasse** son conteneur.                            |
| `gap`                            | Espace entre les éléments dans un **flex** ou un **grid**.                                    |
| `z-index`                        | Définit l’**ordre d’empilement** des éléments (devant ou derrière).                           |
| `transition`                     | Ajoute une **animation douce** lors d’un changement de style.                                 |
| `:hover`                         | Applique un style **quand on passe la souris** sur un élément.                                |
| `@import`                        | Permet d’**importer** d’autres fichiers CSS ou des polices.                                   |
| `@media`                         | Définit des **règles pour les écrans spécifiques** (responsive design).                       |
| `padding`             | Ajoute un **espace intérieur** (entre le contenu et les bords).                    |
| `min-height`          | Définit une **hauteur minimale** d’un élément.                                     |
| `display`             | Définit le **type d’affichage** d’un élément (`flex`, `block`, etc.).              |
| `flex-wrap`           | Permet de **repasser à la ligne** quand les éléments ne tiennent plus.             |
| `position`            | Définit le **positionnement** d’un élément (`relative`, `absolute`, etc.).         |
| `width`               | Définit la **largeur** d’un élément.                                               |
| `bottom`              | Positionne un élément **depuis le bas** (quand il est en position `absolute`).     |
| `background-color`    | Définit la **couleur de fond**.                                                    |
| `background-image`    | Définit une **image de fond**.                                                     |
| `background-size`     | Définit comment l’image de fond est **redimensionnée** (`cover`, `contain`, etc.). |
| `background-position` | Définit **où est placée** l’image de fond (ex: `center`, `top`, `left`).           |
| `min-width`           | Définit une **largeur minimale**.                                                  |
| `height`              | Définit la **hauteur** d’un élément.                                               |
| `flex`                | Définit la **proportion d’espace occupée** par un élément dans un conteneur flex.  |
| `font-size`           | Définit la **taille du texte**.                                                    |
| `font-weight`         | Définit l’**épaisseur** du texte (`normal`, `bold`, etc.).                         |
| `color`               | Définit la **couleur du texte**.                                                   |
| `border-radius`       | Rend les **coins arrondis** d’un élément.                                          |
| `gap`                 | Ajoute un **espace entre les éléments** dans un conteneur flex.                    |
| `justify-content`     | Aligne les éléments **horizontalement** dans un conteneur flex.                    |
| `align-items`         | Aligne les éléments **verticalement** dans un conteneur flex.                      |
| `text-align`          | Aligne le **texte** (gauche, droite, centre, justifié).                            |
| `margin`              | Ajoute un **espace extérieur** autour de l’élément.                                |
| `background-repeat`   | Définit si l’image de fond se **répète** ou non.                                   |
| `box-shadow`          | Ajoute une **ombre portée** autour d’un élément.                                   |
| `transition`          | Crée une **animation fluide** lors d’un changement de style.                       |
| `opacity`             | Définit la **transparence** d’un élément (0 = invisible, 1 = opaque).              |
| `overflow`            | Gère ce qui dépasse du conteneur (`hidden`, `scroll`, etc.).                       |
| `z-index`             | Détermine quel élément est **au-dessus ou en dessous** d’un autre.                 |
| `cursor`              | Change le **curseur de la souris** au survol (`pointer`, `default`, etc.).         |




bibliothèque permettant d'utiliser des icônes sur une page web. -->https://codexweb.fr/html-css/33%20-%20Font-awesome.html
lien style de caractere --> https://fonts.google.com/specimen/Fira+Sans
lien d'une video comment faire un site -- > https://youtu.be/6hCGTJCo_Uo?si=EBN8iwDEW58RkJ0R



generer un html directement --> https://www.developpez.net/forums/d2100085/environnements-developpement/autres-edi/visual-studio-code-raccourci-generer-code-html-base/

site pour s'insipirer --> https://www.partir.com/Mexique/activites.html

