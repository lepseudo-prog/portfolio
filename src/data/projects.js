import batailleShot from '../assets/projects/bataille.webp'
import batailleVideo from '../assets/projects/bataille.mp4'
import calculMentalShot from '../assets/projects/calcul-mental.webp'
import calculMentalVideo from '../assets/projects/calcul-mental.mp4'
import penduShot from '../assets/projects/pendu.webp'
import penduVideo from '../assets/projects/pendu.mp4'
import rueShot from '../assets/projects/dessine-une-rue.webp'
import rueVideo from '../assets/projects/dessine-une-rue.mp4'
import javaPaintShot from '../assets/projects/java-paint.webp'
import javaPaintVideo from '../assets/projects/java-paint.mp4'
import cImgShot from '../assets/projects/c-image-processing.webp'
import cImgVideo from '../assets/projects/c-image-processing.mp4'
import bashBuildShot from '../assets/projects/bash-build.webp'
import bashBuildVideo from '../assets/projects/bash-build.mp4'
import p4Shot from '../assets/projects/puissance-4.webp'
import p4Video from '../assets/projects/puissance-4.mp4'
import robotShot from '../assets/projects/robot-labyrinthe.webp'
import robotVideo from '../assets/projects/robot-labyrinthe.mp4'
import tradingShot from '../assets/projects/trading-bot.webp'
import tradingVideo from '../assets/projects/trading-bot.mp4'
import stickmanShot from '../assets/projects/stickman-fight.webp'
import stickmanVideo from '../assets/projects/stickman-fight.mp4'
import portfolioShot from '../assets/projects/portfolio.webp'
import portfolioVideo from '../assets/projects/portfolio.mp4'

export const STATUS_LABELS = {
  termine: "Terminé",
  "en-cours": "En cours",
}

export const PROJECTS = [
  {
    id: 'robot-labyrinthe',
    title: 'Robot Labyrinthe',
    image: robotShot,
    video: robotVideo,
    tech: ['Python', 'GoPiGo3', 'Raspberry Pi'],
    status: 'termine',
    summary: "Robot mobile qui sort seul d'un labyrinthe en carton grâce à son capteur rotatif.",
    description:
      "Un robot GoPiGo3 embarquant un Raspberry Pi, capable de sortir seul d'un labyrinthe construit en carton : un capteur de distance monté sur servomoteur balaie l'espace (« à droite et en face »), le robot avance par pas de 5 cm et choisit sa direction selon les distances mesurées. Plusieurs itérations de l'algorithme existent dans le repo, jusqu'au « moteur final » et de vrais essais filmés en conditions réelles.",
    features: [
      'Capteur de distance sur servomoteur rotatif',
      "Algorithme de type « main droite » par pas de 5 cm",
      "Seuils de détection d'obstacles paramétrables",
      'Plusieurs itérations du moteur de navigation',
      'Essais réels filmés dans un labyrinthe en carton',
    ],
    link: 'https://github.com/lepseudo-prog/attentat_EMAEE',
    level: 'licence',
  },
  {
    id: 'bash-build',
    title: 'Bash-Build',
    image: bashBuildShot,
    video: bashBuildVideo,
    tech: ['C', 'CLI', 'Projet de groupe'],
    status: 'termine',
    summary: "Un monopoly du BTP en terminal : achète, construis, emprunte et fais fructifier ton capital.",
    description:
      "Un jeu de gestion type monopoly, joué entièrement dans le terminal : sur un plateau ASCII, le joueur achète des terrains, construit des bâtiments (1x1, 2x2, 3x3 ou la Banque), gère son porte-monnaie et peut contracter des prêts auprès de la banque une fois celle-ci construite. Projet de groupe d'algo-prog de première année : plusieurs itérations de développement existent dans le repo.",
    features: [
      'Plateau ASCII interactif (10x10, 15x15 ou dimensions custom)',
      '4 types de bâtiments constructibles + zones inconstructibles',
      'Système de prêts bancaires avec mensualités',
      'Sauvegarde/chargement de partie',
      'Mode Construction et mode Avatar',
    ],
    link: 'https://github.com/lepseudo-prog/bash-build',
    level: 'licence',
  },
  {
    id: 'puissance-4',
    title: 'Puissance 4',
    image: p4Shot,
    video: p4Video,
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'termine',
    summary: 'Le classique en duo sur le même écran : pseudos, chute des pions et alignement gagnant.',
    description:
      "Un Puissance 4 web jouable à deux sur le même écran : chacun inscrit son pseudo, puis on clique sur une colonne pour faire tomber son pion. La victoire (horizontale, verticale ou diagonale) est détectée automatiquement. La version finale était pensée pour du jeu en ligne via un serveur distant (d'où les écrans « Play with id ») ; la v1 reste jouable hors-ligne en local.",
    features: [
      'Jeu local à 2 joueurs avec pseudos',
      'Détection de victoire horizontale, verticale et diagonale',
      'Chute des pions dans les colonnes au clic',
      'Versions v2/v3 branchées sur un serveur de jeu distant',
    ],
    link: 'https://github.com/lepseudo-prog/puissance-4',
    level: 'licence',
  },
  {
    id: 'java-paint',
    title: 'Java Paint',
    image: javaPaintShot,
    video: javaPaintVideo,
    tech: ['Java', 'Swing', 'POO'],
    status: 'termine',
    summary: 'Éditeur de dessin : segments, cercles, points et polygones tracés à la souris avec prévisualisation.',
    description:
      "Un éditeur de dessin en Java Swing : on choisit une forme dans la barre d'outils (cercle, point, segment, polygone) puis on la trace à la souris, avec prévisualisation en direct pendant le glissement. Les polygones se construisent sommet par sommet et se ferment d'un clic. Architecture orientée objet : toutes les figures héritent d'une classe Figure commune.",
    features: [
      'Formes : segments, cercles, points et polygones',
      'Prévisualisation en direct pendant le tracé',
      'Polygones à sommets libres, fermeture au clic',
      'POO : classes Figure, Point, Segment, Cercle, Polygone',
    ],
    link: 'https://github.com/lepseudo-prog/java-paint-app',
    level: 'licence',
  },
  {
    id: 'c-image-processing',
    title: 'C Image Processing',
    image: cImgShot,
    video: cImgVideo,
    tech: ['C', 'CLI', 'BMP'],
    status: 'termine',
    summary: "Traitement d'images BMP en ligne de commande : 18 opérations, zéro dépendance.",
    description:
      "Une application en ligne de commande écrite en C qui applique 18 traitements à des images BMP : seuillage, négatif, niveaux de gris, filtre médian, rotation, histogramme… Le format BMP est lu et écrit entièrement à la main (entêtes, pixels), sans aucune dépendance externe. Le tout se pilote via un menu interactif dans le terminal.",
    features: [
      '18 traitements : seuillage, négatif, gris, miroir, rotation…',
      'Lecture/écriture du format BMP bas niveau (entêtes, pixels)',
      'Menu interactif dans le terminal',
      'Zéro dépendance externe, C pur',
    ],
    link: 'https://github.com/lepseudo-prog/c-image-processing',
    level: 'licence',
  },
  {
    id: 'bataille',
    title: 'Bataille',
    image: batailleShot,
    video: batailleVideo,
    tech: ['Python', 'Tkinter', 'POO'],
    status: 'termine',
    summary: "Simulation animée du jeu de cartes : 52 cartes, distribution, batailles et vainqueur final.",
    description:
      "Une simulation complète du jeu de la bataille entre deux joueurs, écrite en orienté objet (classes Carte et PaquetDeCarte). Les 52 cartes sont distribuées avec animation, puis les affrontements se déroulent automatiquement avec gestion des égalités (« bataille ! ») et des plis, jusqu'à ce qu'un joueur remporte toutes les cartes.",
    features: [
      'Classes Carte & PaquetDeCarte (POO)',
      '52 cartes illustrées avec de vraies images',
      'Animations de distribution et de plis',
      'Gestion complète des batailles (égalités en cascade)',
    ],
    link: 'https://github.com/lepseudo-prog/myprojects/blob/main/projet_bataille/bataille.py',
    level: 'lycee',
  },
  {
    id: 'calcul-mental',
    title: 'Calcul Mental',
    image: calculMentalShot,
    video: calculMentalVideo,
    tech: ['Python', 'Tkinter', 'CSV'],
    status: 'termine',
    summary: 'Jeu de révision du calcul mental avec chrono, mode difficile et tableau des scores.',
    description:
      "Un jeu pour réviser les tables en s'amusant : le joueur choisit son opération (addition, soustraction ou multiplication) et enchaîne une série de calculs chronométrés. En mode difficile, chaque question doit être résolue en moins de 14 secondes. À la fin de la partie, le score est enregistré dans un fichier CSV qui conserve le meilleur score de chaque joueur.",
    features: [
      '3 opérations au choix + mode difficile avec chrono',
      'Feedback immédiat après chaque réponse',
      'Tableau des scores persistant (CSV), meilleur score par pseudo',
      'Interface graphique complète avec fond animé',
    ],
    link: 'https://github.com/lepseudo-prog/myprojects/blob/main/calcul.py',
    level: 'lycee',
  },
  {
    id: 'pendu',
    title: 'Le Jeu du Pendu',
    image: penduShot,
    video: penduVideo,
    tech: ['Python', 'Tkinter'],
    status: 'termine',
    summary: 'Le classique jeu du pendu : 70 mots, 7 étapes illustrées et gestion des lettres proposées.',
    description:
      "Une version complète du jeu du pendu avec interface graphique : un mot est tiré au hasard parmi 70, chaque erreur fait avancer le pendu d'une étape (7 illustrations). Le jeu détecte les lettres déjà proposées et les entrées invalides, affiche le mot au fur et à mesure et permet de rejouer à l'infini sans relancer le programme.",
    features: [
      '70 mots à deviner tirés au hasard',
      '7 étapes illustrées du pendu',
      'Détection des lettres répétées et invalides',
      'Écrans de victoire/défaite et rejouabilité',
    ],
    link: 'https://github.com/lepseudo-prog/myprojects/tree/main/pendu',
    level: 'lycee',
  },
  {
    id: 'rue',
    title: 'Dessine une Rue',
    image: rueShot,
    video: rueVideo,
    tech: ['Python', 'Turtle'],
    status: 'termine',
    summary: "Génération procédurale d'une rue : immeubles aléatoires aux couleurs, toits et étages variés.",
    description:
      "Un petit générateur procédural avec le module Turtle : à chaque exécution, une rue de 4 immeubles est dessinée avec des couleurs RGB aléatoires, un nombre d'étages variable, des fenêtres, une porte et l'un des deux styles de toits. Le dessin s'adapte à la taille de la fenêtre.",
    features: [
      'Couleurs RGB générées aléatoirement',
      "Nombre d'étages et largeur d'immeuble aléatoires",
      '2 styles de toits, fenêtres adaptées à la largeur',
      'Code structuré en fonctions documentées (docstrings)',
    ],
    link: 'https://github.com/lepseudo-prog/myprojects/blob/main/dessine_rue.py',
    level: 'lycee',
  },
]

export const PERSO_PROJECTS = [
  {
    id: 'stickman-fight',
    title: 'Stickman Fight AI',
    image: stickmanShot,
    video: stickmanVideo,
    tech: ['JavaScript', 'PyTorch', 'DQN', 'WebSocket'],
    status: 'en-cours',
    made: 'vibecode',
    summary: 'Jeu de combat 1v1 dans le navigateur, avec une IA DQN entraînée en self-play.',
    description:
      "Un jeu de combat 2D dans le navigateur, pensé comme terrain d'entraînement pour une IA : une simulation JS déterministe unique alimente le rendu navigateur, le serveur WebSocket (netcode rollback) et l'entraînement Double-DQN en PyTorch par self-play. Le plan complet a été écrit avec l'IA, puis l'implémentation a suivi en vibecodant : M1 à M4 du roadmap sont jouables. L'agent entraîné a appris visiblement : spam de blocage, piégeage « tortue », puis jeu agressif. Reste le polish (M5) et le fine-tuning des récompenses.",
    features: [
      'Simulation déterministe partagée (60 Hz, seed)',
      'Double-DQN self-play (PyTorch), cerveaux exportés en JSON',
      'Netcode rollback, salles en ligne, contrôles remappables',
      "Courbes d'entraînement et vidéos de progression",
      'Modes : humain vs humain, humain vs IA, IA vs IA',
    ],
    link: 'https://github.com/lepseudo-prog/stickman_fight_ai',
  },
  {
    id: 'trading-bot',
    title: 'Trading Bot',
    image: tradingShot,
    video: tradingVideo,
    tech: ['Python', 'pandas', 'TA-Lib', 'Hyperliquid'],
    status: 'en-cours',
    made: 'fait-main',
    summary: 'Bot de trading crypto : pipeline de données 1m, indicateurs TA-Lib et features SMC.',
    description:
      "Un bot de trading crypto construit en deux époques : d'abord sur l'API Bybit (RSI et détection de figures en chandeliers via TA-Lib sur 8 paires), puis repris en 2025 sur Hyperliquid avec des bougies 1m et des features Smart Money Concepts. Le pipeline de données fonctionne de bout en bout ; l'objectif initial, prédire le marché minute par minute, s'est heurté à son caractère quasi aléatoire. Le projet dort en l'état, avec un pipeline honnête et zéro illusion sur le prediction trading.",
    features: [
      'Bougies 1m via SDK Hyperliquid (fallback HTTP brut)',
      'RSI + figures en chandeliers (TA-Lib)',
      'Features Smart Money Concepts (FVG, order blocks)',
      '2 plateformes réelles testées : Bybit puis Hyperliquid',
    ],
    link: 'https://github.com/lepseudo-prog/trading_bot_1.0',
  },
  {
    id: 'portfolio',
    title: 'Ce portfolio',
    image: portfolioShot,
    video: portfolioVideo,
    tech: ['React', 'Vite', 'CSS natif'],
    status: 'en-cours',
    made: 'vibecode',
    summary: "Le site que vous parcourez : construit avec l'IA, screenshoté pour se voir de l'extérieur.",
    description:
      "Ce portfolio lui-même est un projet vibecodé : direction artistique inspirée du « taste-skill », composants React écrits avec l'IA, et surtout une idée que j'aime bien : chaque projet y est filmé en action (vraies applis exécutées dans un serveur X virtuel, sessions terminal enregistrées) et la vidéo se lance au survol de la carte. Rien n'est statique, tout est capturé depuis de vraies exécutions. Le site s'améliore au fil des projets, d'où son statut.",
    features: [
      'Vidéos au hover : vraies démos, zéro mockup',
      'Captures réalisées en Xvfb + ffmpeg + tmux',
      "Direction artistique « taste-skill », un seul accent",
      'Lui-même screenshoté pour apparaître dans sa propre liste',
    ],
    link: 'https://github.com/lepseudo-prog/portfolio',
  },
]