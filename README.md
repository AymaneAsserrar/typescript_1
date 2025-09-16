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

1. Compiler le projet :

   ```bash
   npx tsc
   ```

2. Ouvrir l'interface web :
   - Option simple : ouvrir le fichier `public/index.html` dans le navigateur
   - Avec VS Code : utiliser l'extension "Live Server" et cliquer sur "Go Live"

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

## Configuration TypeScript

Le projet utilise la configuration suivante :

- Cible ES2020 pour la compatibilité navigateur moderne
- Modules ES2020 pour l'import/export natif
- Mode strict activé pour une meilleure sécurité des types
- Compilation automatique vers le dossier `public/js/`
