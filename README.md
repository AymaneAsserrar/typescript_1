# typescript_1

Projet TypeScript avec une classe `Car` + démo CLI et interface Web.

## Prérequis

- Node.js et npm installés

## Installation

```powershell
npm install
```

## Utilisation (CLI)

- Dev (exécute `src/index.ts` avec ts-node):

```powershell
npm run dev
```

- Compiler TypeScript -> JavaScript:

```powershell
npm run build
```

- Exécuter la version compilée (`dist/index.js`):

```powershell
npm start
```

## Utilisation (Web)

1. Construire le module ES pour le navigateur (génère `public/js/Car.js`):

```powershell
npm run build:web
```

2. Ouvrir l'interface:
   - Option simple: ouvrir le fichier `public/index.html` dans le navigateur
   - Option serveur local (recommandé):
     - Python 3:
       ```powershell
       python -m http.server 8080
       ```
       Puis ouvrir http://localhost:8080/public/
     - ou avec Node (si installé):
       ```powershell
       npx http-server -p 8080 .
       ```
       Puis ouvrir http://localhost:8080/public/

## Fichiers importants

- `src/Car.ts` : classe exportée `Car`
- `src/index.ts` : démo CLI
- `public/index.html` : interface Web
- `public/app.js` : logique UI (importe `./js/Car.js`)
