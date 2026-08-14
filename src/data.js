// ---------------------------------------------------------------------------
// Tout le contenu du portfolio est ici.
// Pour modifier un texte, tu n'as qu'à éditer ce fichier : aucun composant
// à toucher. Les sections se régénèrent automatiquement.
// ---------------------------------------------------------------------------

export const profil = {
  prenom: 'Ileri',
  nom: 'Olayode',
  nomComplet: 'Ilerioluwa Olayode',
  metier: 'Développeur junior',
  specialite: 'Données & applications web',
  lieu: 'Montlhéry, Île-de-France',
  formation: 'BTS SIO option SLAM',
  statut: 'Je cherche un stage pour 2027',

  // La phrase d'accroche. C'est ton vrai réflexe de travail, pas un slogan.
  accroche: "Je cherche d'où vient la donnée avant d'écrire la première ligne de code.",

  sousTitre:
    "Développeur junior en BTS SIO option SLAM. Python, collecte et structuration de données, applications web.",
}

// Les chiffres du stage Oratis IA, affichés sous le hero.
// Tu comptes ce que tu produis — autant que ça se voie tout de suite.
export const chiffres = [
  { valeur: '11', label: 'scrapers développés' },
  { valeur: '~3 600', label: 'agents collectés' },
  { valeur: '17', label: 'colonnes normalisées' },
  { valeur: '8/11', label: 'réseaux avec API trouvée' },
]

export const aPropos = [
  "Je suis en deuxième année de BTS SIO option SLAM au lycée LeRebours, à Paris 13e. J'ai découvert le code au lycée, en spécialité NSI.",

  "Mon parcours n'est pas une ligne droite. Après le bac, j'ai passé trois ans en double licence à l'UVSQ sans arriver à valider. J'ai arrêté, j'ai travaillé un an, puis j'ai repris en BTS SIO en 2025. Ce détour m'a surtout servi à savoir ce que je voulais faire, et à le choisir pour de bonnes raisons.",

  "Ce qui m'intéresse dans le développement, c'est le moment où on comprend comment un système fonctionne vraiment. Pendant mon stage chez Oratis IA, j'ai passé presque autant de temps dans l'onglet Réseau du navigateur que dans mon éditeur : avant de scraper une page, je cherche l'API qui l'alimente. Sur onze réseaux immobiliers, huit en avaient une. Le code devient plus court, plus rapide, et il casse beaucoup moins.",

  "Je travaille de façon assez méthodique. Je fixe le format de sortie avant de commencer, je teste sur trois lignes avant de lancer sur trois mille, et j'écris ce que j'apprends au fur et à mesure. Pendant mon stage j'ai tenu un document de vocabulaire et d'apprentissages que je complétais chaque semaine.",

  "Je joue au basket depuis douze ans, en compétition départementale et région élite. Deux choses en sont restées : on tient sur la durée, et on ne joue pas seul.",

  "Une dernière chose : je ne prétends pas maîtriser ce que je suis en train d'apprendre. Quand une techno est en cours de découverte, je le dis. Ce site est en React, et React fait partie de ce que je découvre.",
]

// ---------------------------------------------------------------------------
// COMPÉTENCES — strictement celles de ton CV.
// Rien n'a été ajouté. L'ordre part de ce sur quoi tu es le plus solide.
// ---------------------------------------------------------------------------
export const competences = [
  {
    titre: 'Collecte & traitement de données',
    note: "C'est là que je suis le plus à l'aise, et c'est ce que j'ai pratiqué en entreprise.",
    fort: true,
    items: [
      'Python',
      'requests',
      'BeautifulSoup',
      'Selenium',
      'pandas',
      'API REST / JSON',
      'regex',
    ],
  },
  {
    titre: 'Développement',
    note: 'Bases solides, acquises en BTS et sur des projets.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'JavaFX',
      'SQL',
      'Tkinter',
      'WordPress',
    ],
  },
  {
    titre: 'Outils & collaboration',
    note: 'Le quotidien : versionner, répartir, se tenir au courant.',
    items: ['Git / GitHub', 'Trello', 'Microsoft Teams'],
  },
  {
    titre: "En cours d'apprentissage",
    note: "Je préfère l'écrire ici plutôt que de le faire passer pour acquis.",
    encours: true,
    items: ['Docker (initiation)', 'React (ce site)'],
  },
]

export const langues = [
  { langue: 'Français', niveau: 'Langue maternelle' },
  { langue: 'Anglais', niveau: 'B2' },
  { langue: 'Espagnol', niveau: 'Débutant' },
  { langue: 'Allemand', niveau: 'Débutant' },
]

export const certifications = [
  { nom: 'SecNumacadémie', detail: 'Certification cybersécurité, 2025' },
  { nom: 'Permis B', detail: '' },
]

// ---------------------------------------------------------------------------
// PROJETS
// ---------------------------------------------------------------------------

export const projetPrincipal = {
  nom: 'Collecte et structuration de données immobilières',
  contexte: 'Stage · Oratis IA · mai – juin 2026',
  tag: 'Projet en entreprise',

  objectif:
    "Oratis IA vend une plateforme de prospection immobilière : une grande base d'agents que ses clients filtrent, ciblent et contactent automatiquement. Ma mission était d'ouvrir un nouveau marché, le Mexique, en constituant cette base à partir de zéro.",

  realise: [
    "Analysé onze réseaux immobiliers mexicains (RE/MAX, Keller Williams, Century 21, eXp, IAD, AMPI, Solili, Netmex, e-inmob, Engel & Völkers, Properstar) pour identifier où et comment récupérer les données.",
    "Développé onze scrapers Python, un par réseau. Chacun est une fonction qui retourne une liste de dictionnaires : aucune écriture de fichier imposée, l'équipe branche directement le résultat sur sa base.",
    "Collecté environ 3 600 agents : nom, coordonnées, ville, agence, poste, nombre de mandats, prix moyen de mandat.",
    "Défini un schéma unique de 17 colonnes appliqué aux onze scrapers, exporté en CSV standardisé (séparateur ;, encodage utf-8-sig).",
    "Écrit un orchestrateur main.py : un réseau qui échoue n'arrête pas les autres, et un résumé s'affiche en fin de run.",
    "Livré un README documentant l'installation, le schéma de données, l'intégration côté équipe, et les réseaux écartés avec la raison de chaque exclusion.",
  ],

  technos: [
    'Python',
    'requests',
    'BeautifulSoup',
    'Selenium',
    'pandas',
    'regex',
    'API REST / JSON',
    'CSV',
  ],

  difficultes: [
    {
      titre: 'Les données invisibles dans le HTML',
      texte:
        "Beaucoup de sites chargent leur contenu en JavaScript : le HTML brut ne contient rien d'utile. J'ai appris à ouvrir l'onglet Réseau, filtrer sur Fetch/XHR, repérer la requête qui contient réellement les noms et les emails, puis à la rejouer en Python. Huit réseaux sur onze avaient une API JSON accessible : AWS Lambda chez Keller Williams, Supabase chez eXp, un JSON embarqué dans la page chez Solili.",
    },
    {
      titre: 'Une heure perdue pour un fichier vide',
      texte:
        "Sur RE/MAX, j'ai lancé un run complet avec un sélecteur qui ne correspondait à rien. Plus d'une heure d'exécution pour un CSV vide. Depuis, je valide toujours sur un à trois agents avant de lancer sur l'ensemble.",
    },
    {
      titre: 'Les protections anti-bot',
      texte:
        "Properstar est derrière un pare-feu applicatif Azure avec challenge JavaScript : je suis passé par Selenium. Coldwell Banker, lui, est protégé par un CAPTCHA Cloudflare. J'ai choisi de ne pas le contourner : c'est une limite que je ne voulais pas franchir. Je l'ai écrit dans le README, avec les quatre autres réseaux que j'ai écartés et pourquoi.",
    },
    {
      titre: 'Un site qui change en cours de route',
      texte:
        "L'un des réseaux a modifié son adresse pendant le projet, ce qui a cassé mon scraper. Je l'ai réécrit, et j'en ai profité pour le rendre plus rapide.",
    },
  ],

  montre:
    "Je préfère comprendre un système plutôt que forcer dessus. Je fixe le format de sortie avant de coder, je documente ce que je n'ai pas fait autant que ce que j'ai fait, et je m'arrête devant une limite éthique même quand il serait techniquement possible de passer.",
}

export const projets = [
  {
    nom: 'Tower of Hell',
    contexte: 'Projet BTS SIO SLAM · Java / JavaFX',
    lien: {
      url: 'https://github.com/OLAYODE-Ilerioluwa/2027SIO_IlerioluwaOLAYODE',
      label: 'Voir le code sur GitHub',
    },
    objectif:
      "Un jeu de combat au tour par tour avec interface graphique : on crée son héros (guerrier, mage ou archer) puis on affronte des ennemis de plus en plus puissants, avec un boss tous les cinq tours. L'idée était de mettre la programmation orientée objet en pratique sur quelque chose de jouable plutôt que sur un exercice abstrait.",
    realise: [
      "Conçu la hiérarchie de classes : Personnage en classe abstraite, dont héritent Hero et Ennemi, puis Boss qui hérite d'Ennemi.",
      'Modélisé les attaques et les défenses en classes abstraites avec trois implémentations chacune, débloquées à des paliers différents : attaque physique au niveau 1, magique au niveau 3, spéciale au niveau 6.',
      "Développé la progression : chaque ennemi vaincu rapporte de l'XP selon sa difficulté, le niveau monte à 100 XP et le surplus est reporté.",
      "Construit l'interface en JavaFX à partir de vues FXML, avec deux écrans et leurs contrôleurs : création du personnage, puis combat.",
      'Utilisé des enums pour les valeurs fixes (genre, classe) et un compteur statique pour suivre le tour en cours.',
    ],
    technos: ['Java 17', 'JavaFX 17', 'FXML', 'POO'],
    montre:
      "L'héritage et le polymorphisme ne sont pas là pour cocher une case de cours : ils me permettent d'ajouter une attaque ou un type d'ennemi sans retoucher le reste du code.",
    suite: 'Prochaine étape : reprendre tout le visuel du jeu en pixel art.',
  },
  {
    nom: "Sites vitrines d'entreprise",
    contexte: 'Projets BTS · Lycée LeRebours · sept. – nov. 2025 et février 2026',
    objectif:
      "Deux exercices menés dans le même cadre : développer un site web statique/dynamique pour une entreprise fictive, de l'analyse du besoin jusqu'à la mise en ligne et la maintenance.",
    realise: [
      'Analyse des besoins et définition de la structure du site',
      'Développement du site',
      "Hébergement sur un serveur local / réseau interne",
      "Sécurisation de l'accès (accès restreint à un utilisateur spécifique)",
      'Déploiement et maintenance',
      'Travail en équipe avec répartition des tâches',
    ],
    technos: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    montre:
      "Le travail ne s'arrête pas au code : héberger, restreindre l'accès et maintenir le site font partie de la livraison.",
  },
]

// Projets personnels repris de ton portfolio actuel, avec tes propres
// descriptions. À valider : tu m'as dit que ce portfolio n'était plus à jour.
export const projetsPerso = [
  {
    nom: 'MexiGo',
    desc: "Site vitrine responsive multi-pages pour une agence de voyage : hero, équipe, services, tarifs, témoignages et formulaire validé.",
    technos: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    nom: 'SY Motors',
    etat: 'Hors ligne',
    desc: "Site vitrine WordPress pour un vendeur automobile : page d'accueil, catalogue de véhicules en carrousel avec fiches détaillées et section « Pourquoi nous choisir ».",
    technos: ['WordPress'],
  },
  {
    nom: 'Jeu Héros',
    desc: "Combat tour par tour en Python : points de vie, attaques aléatoires, trois potions de soin et détection automatique de fin de partie.",
    technos: ['Python'],
  },
  {
    nom: 'La Duellette',
    desc: "Jeu de cartes en duel : 40 cartes distribuées entre deux joueurs, la valeur la plus proche de 7 remporte la manche.",
    technos: ['Python'],
  },
]

// ---------------------------------------------------------------------------
// PARCOURS, du plus récent au plus ancien.
// ---------------------------------------------------------------------------
export const parcours = [
  {
    periode: '2025 – 2027',
    titre: 'BTS SIO option SLAM',
    lieu: 'Lycée polyvalent LeRebours, Paris 13e',
    type: 'Formation',
    detail:
      'Solutions Logicielles et Applications Métiers. Développement, bases de données, gestion de projet.',
  },
  {
    periode: 'mai – juin 2026',
    titre: 'Stagiaire développeur',
    lieu: 'Oratis IA',
    type: 'Stage',
    detail:
      "Collecte et structuration de données immobilières. Intégré à l'équipe technique d'une petite structure distribuée : points en visioconférence réguliers, forte autonomie entre les points.",
  },
  {
    periode: '2025',
    titre: 'Certification SecNumacadémie',
    lieu: 'ANSSI',
    type: 'Certification',
    detail: 'Fondamentaux de la sécurité du numérique.',
  },
  {
    // TODO — Ileri : précise le poste et l'employeur, même si ce n'était pas
    // dans l'informatique. Une année de travail se raconte très bien.
    periode: '2024 – 2025',
    titre: 'Année en activité professionnelle',
    lieu: '',
    type: 'Expérience',
    detail:
      "Un an de travail avant de reprendre mes études, cette fois dans le développement.",
  },
  {
    periode: '2021 – 2024',
    titre: 'Double licence',
    lieu: 'Université de Versailles Saint-Quentin-en-Yvelines (UVSQ)',
    type: 'Formation',
    detail:
      "Trois années que je n'ai pas validées. J'ai préféré arrêter plutôt que de continuer sans conviction, et me réorienter vers ce qui m'intéressait réellement.",
  },
  {
    periode: '2019 – 2021',
    titre: 'Baccalauréat général',
    lieu: 'Lycée Jean Racine',
    type: 'Formation',
    detail:
      "Spécialités Biologie et NSI, option mathématiques. C'est en NSI que j'ai écrit mes premières lignes de code.",
  },
]

// ---------------------------------------------------------------------------
// MA FAÇON DE TRAVAILLER
// ---------------------------------------------------------------------------
export const methode = [
  {
    num: '01',
    question: "Comment j'aborde un projet",
    reponse:
      "Je commence par la sortie, pas par l'entrée. Avant d'écrire le premier scraper, j'ai figé les 17 colonnes que les onze devraient produire. Ça paraît lent au début, mais ça évite de tout reprendre à la fin et ça rend le résultat directement importable en base.",
  },
  {
    num: '02',
    question: 'Comment je réfléchis à un problème',
    reponse:
      "Je cherche d'abord d'où vient la donnée. F12, onglet Réseau, filtre Fetch/XHR, je recharge la page et je regarde quelle requête contient vraiment les noms et les emails. Si je trouve l'API, je la rejoue en Python et le problème devient dix fois plus simple. Selenium, c'est mon dernier recours, pas mon premier réflexe.",
  },
  {
    num: '03',
    question: 'Comment je gère ce qui ne marche pas',
    reponse:
      "Je teste sur trois lignes avant de lancer sur trois mille. Et je sais m'arrêter : la chose la plus utile que mon stage m'ait apprise, c'est de savoir quand changer d'approche plutôt que de m'acharner sur une piste qui ne donne rien.",
  },
  {
    num: '04',
    question: "Comment j'apprends une nouvelle technologie",
    reponse:
      "J'écris ce que j'apprends, au fur et à mesure. Pendant mon stage j'ai tenu un document de vocabulaire et d'apprentissages que je complétais chaque semaine : les termes, les pièges rencontrés, les bonnes pratiques, et les arbitrages du type « requests ou Selenium ? ». À la fin, ça faisait un vrai support pour moi, et pour la personne qui reprendrait le code.",
  },
  {
    num: '05',
    question: 'Comment je travaille avec une équipe',
    reponse:
      "Chez Oratis IA, l'équipe était petite et à distance : un point en visio régulier, et beaucoup d'autonomie entre les points. J'ai donc écrit du code fait pour être repris par quelqu'un d'autre : chaque scraper est une fonction qui retourne une liste de dictionnaires, sans imposer d'écriture de fichier, avec un paramètre max_agents pour tester sans tout charger.",
  },
  {
    num: '06',
    question: 'Comment je transforme une idée en projet concret',
    reponse:
      "En découpant jusqu'à ce que chaque morceau tienne debout tout seul. Onze réseaux, c'est onze modules indépendants plus un orchestrateur. Si un réseau tombe, les dix autres tournent quand même. Je préfère dix choses qui marchent séparément à un gros bloc qui marche une fois sur deux.",
  },
  {
    num: '07',
    question: "Là où je m'arrête",
    reponse:
      "Il y a des choses que je ne fais pas. Coldwell Banker était protégé par un CAPTCHA Cloudflare. Techniquement, il existe des moyens de passer. Je ne l'ai pas fait, et je l'ai écrit noir sur blanc dans le README avec les quatre autres réseaux que j'ai écartés. Documenter ce qu'on n'a pas fait est aussi utile que documenter ce qu'on a fait.",
  },
]

// ---------------------------------------------------------------------------
// CONTACT
// NOTE — Ileri : l'email vient de ton CV. Il expirera à la fin de ton BTS.
// Pense à le remplacer par une adresse personnelle.
// ---------------------------------------------------------------------------
export const contact = {
  intro:
    "Je cherche un stage pour ma deuxième année de BTS SIO SLAM, en 2027. Je suis aussi disponible pour des missions freelance : site vitrine, ou collecte et structuration de données.",
  liens: [
    {
      label: 'Email',
      valeur: 'iolayode@lerebours.fr',
      href: 'mailto:iolayode@lerebours.fr',
    },
    {
      label: 'LinkedIn',
      valeur: 'ileri-olayode',
      href: 'https://www.linkedin.com/in/ileri-olayode',
    },
    {
      label: 'GitHub',
      valeur: 'OLAYODE-Ilerioluwa',
      href: 'https://github.com/OLAYODE-Ilerioluwa',
    },
    {
      label: 'Téléphone',
      valeur: '06 33 23 15 91',
      href: 'tel:+33633231591',
    },
  ],
}

export const sections = [
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'methode', label: 'Ma façon de travailler' },
  { id: 'contact', label: 'Contact' },
]
