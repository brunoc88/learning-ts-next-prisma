# Configuracion de vite para uso de alias

## Instala el plugin oficial de Vite para paths de TypeScript:

```js
npm install -D @rollup/plugin-alias
```

O, más simple con Vite + React, podés usar vite.config.ts así:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: { // <-- configuracion para uso de alias en archivos
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
});
```