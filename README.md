# FoodNow · Projecte base (UP04)

App de repartiment de menjar en Ionic 9 + Angular 22. Partiu d'aquest projecte durant tota la UP04.

## Posar-lo en marxa

```bash
npm install
npx ng serve
```

Obriu http://localhost:4200 i activeu la vista de mòbil a les DevTools (Ctrl+Maj+M).

## Què hi ha

| Fitxer | Per a què serveix |
| --- | --- |
| `src/app/app.routes.ts` | Rutes: pestanyes `home`, `search`, `cart` i `profile` |
| `src/app/tabs/tabs.page.ts` | Barra de pestanyes inferior |
| `src/app/services/menu.service.ts` | Servei amb les dades: restaurants i plats |
| `src/app/data/menu.data.ts` | 6 restaurants i 30 plats de prova |
| `src/app/models/` | Interfícies `Restaurant` i `Dish` |
| `src/app/pages/home/` | **Kata de dimecres 25/11** |
| `src/theme/variables.scss` | *Design tokens* (dimecres 25/11) |

## Convenció de noms

Tot el codi (variables, funcions, classes, components, fitxers i carpetes) va en **anglés**, amb les convencions habituals de cada tecnologia. Els comentaris, els textos que veu l'usuari i la documentació van en **valencià**.

## Normes de la parella

- Un *commit* al final de cada sessió, amb un missatge que diga què heu fet.
- Canvieu de conductor/a i navegant cada 15 minuts.
- Abans d'acabar, comproveu que `npx ng build` no dona errors.
