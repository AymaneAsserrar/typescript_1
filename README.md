# typescript_1

Application TypeScript démonstrative avec une classe `Car` et une interface Web interactive.

## Prérequis

- Node.js et npm installés
- TypeScript (`npm install -g typescript`)

## Installation

```bash
npm install
```

## Utilisation

1. Interface Web (recommandé)

- Compiler le code TypeScript pour le navigateur :

```bash
npm run build:web
```

- Démarrer un petit serveur statique (plus fiable que l'ouverture directe) :

```bash
npm run serve:web
```

Puis ouvrez l'URL indiquée (ex: http://localhost:5173) et utilisez l'interface.

Astuce: L'ouverture directe de `public/index.html` fonctionne aussi, mais certaines fonctionnalités peuvent dépendre d'un serveur local.

2. Exemple en console (Node.js)

- Compiler pour Node (CommonJS) :

```bash
npm run build:node
```

- Lancer l'exemple :

```bash
npm run start:node
```

Remarque: Le build Node génère `dist/index.js` (CommonJS). Le build Web génère des modules ES dans `public/js/` pour le navigateur.

## Fonctionnalités

### Fonctionnalités avancées

- Créer une voiture personnalisée :
  - Choix du modèle, marque, couleur (avec aperçu), année
  - Sélection du type (Électrique, Hybride, Essence)
  - Définition de la vitesse maximale
- Tableau de bord interactif :
  - Speedomètre visuel en temps réel
  - Jauge de carburant/batterie dynamique
  - Affichage de la distance parcourue
  - Aperçu de la couleur du véhicule
- Contrôles avancés :
  - Démarrer/Arrêter le moteur
  - Accélérer (+10 km/h)
  - Freiner (-10 km/h)
  - Faire le plein/recharger
- Gestion de l'énergie :
  - Consommation différente selon le type de voiture
  - Blocage du démarrage/accélération si batterie/carburant vide
- Sauvegarde automatique :
  - La dernière configuration de voiture est mémorisée (localStorage)
- Code TypeScript strict, organisation moderne et interface responsive
- Icônes Font Awesome + thème visuel moderne

## Configuration TypeScript

- `tsconfig.web.json` : build navigateur → modules ES, sortie `public/js/`
- `tsconfig.node.json` : build Node → CommonJS, sortie `dist/`

## Dépannage

- Erreur « Cannot use import statement outside a module » en lançant `public/js/*.js` avec Node:
  - Ces fichiers sont des modules ES pour le navigateur. Utilisez `npm run start:node` uniquement pour exécuter la version Node dans `dist/`.
  - Pour l'interface web, servez le dossier `public/` (`npm run serve:web`) ou ouvrez `public/index.html` dans un navigateur.
