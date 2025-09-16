# typescript_1

Application TypeScript démonstrative avec une classe `Car` et une interface Web interactive.

## Prérequis

- Node.js et npm installés
- TypeScript (`npm install -g typescript`)

## Installation

```bash
npm install
```

## Développement

Pour compiler les fichiers TypeScript en JavaScript :

```bash
npx tsc
```

Les fichiers TypeScript seront automatiquement compilés dans le dossier `public/js/`.

Pour un développement actif avec recompilation automatique :

```bash
npx tsc --watch
```

## Structure du Projet

```
├── src/                    # Code source TypeScript
│   ├── Car.ts             # Classe Car
│   └── app.ts             # Application web
├── public/                # Fichiers statiques et compilés
│   ├── index.html        # Interface utilisateur web
│   ├── js/              # JavaScript compilé
│   │   ├── Car.js
│   │   └── app.js
│   └── ...              # Autres ressources statiques
└── tsconfig.json         # Configuration TypeScript
```

## Utilisation

1. Compiler le projet :

   ```bash
   npx tsc
   ```

2. Ouvrir l'interface web :
   - Option simple : ouvrir le fichier `public/index.html` dans le navigateur
   - Avec VS Code : utiliser l'extension "Live Server" et cliquer sur "Go Live"

## Fonctionnalités

L'interface web permet de :

- Créer une nouvelle voiture avec modèle, marque, couleur et année
- Démarrer et arrêter la voiture
- Accélérer la voiture
- Voir l'état actuel de la voiture en temps réel

## Configuration TypeScript

Le projet utilise la configuration suivante :

- Cible ES2020 pour la compatibilité navigateur moderne
- Modules ES2020 pour l'import/export natif
- Mode strict activé pour une meilleure sécurité des types
- Compilation automatique vers le dossier `public/js/`
