# Configuración de `tsc-alias` con TypeScript y Nodemon

Este documento explica cómo configurar un proyecto TypeScript para usar
**paths/alias** en `tsconfig.json`, compilarlos correctamente con
**tsc-alias**, y ejecutarlo en modo desarrollo con **nodemon**.

------------------------------------------------------------------------

## 1. Instalación de dependencias

``` bash
npm install --save-dev typescript tsc-alias concurrently nodemon
```

------------------------------------------------------------------------

## 2. Configuración de `tsconfig.json`

Ejemplo con `baseUrl` y `paths`:

``` json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

------------------------------------------------------------------------

## 3. Configuración de scripts en `package.json`

``` json
"scripts": {
  "build": "tsc && tsc-alias",
  "dev": "concurrently \"tsc --watch\" \"tsc-alias --watch\" \"nodemon dist/dia8.js\"",
  "start": "node dist/dia8.js"
}
```

### Explicación

-   **build**: compila TypeScript y reescribe los alias en la carpeta
    `dist`.
-   **dev**: ejecuta 3 procesos en paralelo:
    -   `tsc --watch`: compila automáticamente al cambiar código fuente.
    -   `tsc-alias --watch`: reescribe los imports con alias en
        caliente.
    -   `nodemon dist/dia8.js`: ejecuta el archivo compilado y reinicia
        al detectar cambios.
-   **start**: corre directamente el build ya compilado.

------------------------------------------------------------------------

## 4. Ejemplo de estructura de carpetas

    /src
      /components
        button.ts
      /utils
        logger.ts
      dia8.ts
    /tsconfig.json
    /package.json

En `dia8.ts` se pueden usar los alias:

``` ts
import { Button } from "@components/button";
import { log } from "@utils/logger";

log("Iniciando...");
const btn = new Button();
btn.render();
```

------------------------------------------------------------------------

## 5. Ejecución

-   Para **desarrollo** (watch + nodemon):

    ``` bash
    npm run dev
    ```

-   Para **producción** (compilar y correr):

    ``` bash
    npm run build && npm start
    ```

------------------------------------------------------------------------

✅ Con esto, TypeScript compila con `paths`, `tsc-alias` reescribe los
imports para Node.js, y `nodemon` mantiene el servidor en ejecución
durante el desarrollo.
