# Instalación de Vitest en Next.js

## 1. Instalación con NPM

``` bash
npm install -D vitest
```

## 2. Agregar scripts al package.json

``` json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch"
  }
}
```

## 3. Opcional: Interfaz visual

``` bash
npm install -D @vitest/ui
```

Script adicional:

``` json
"test:ui": "vitest --ui"
```

## 4. Opcional: Cobertura

``` bash
npm install -D @vitest/coverage-v8
```

Script:

``` json
"test:coverage": "vitest run --coverage"
```

------------------------------------------------------------------------

Con esto ya podés correr tests en tu proyecto Next.js con Vitest.


## Importante!

Crear archivo vitest.config.json fuera de `/src` y `/test`.
Copiar esta configuracion dentro:

```js
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true, // Para usar describe, it, expect sin importarlos
    environment: 'node', // o 'jsdom' si vas a testear React
    include: ['test/**/*.test.ts'], // o '**/*.test.ts' si querés incluir src
    clearMocks: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Para que funcione tu path @/*
    },
  },
});


```