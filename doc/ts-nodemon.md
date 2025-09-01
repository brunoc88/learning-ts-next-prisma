# Configuración de desarrollo con Nodemon y TypeScript

## 🔹 Instalación de dependencias

```bash
npm install --save-dev nodemon concurrently typescript ts-node
```

- `nodemon` → reinicia tu servidor automáticamente cuando hay cambios.
- `ts-node` → permite ejecutar TypeScript directamente sin compilar.
- `concurrently` → permite correr varios scripts al mismo tiempo (ej. compilación + ejecución).

## 🔹 Configuración de scripts en package.json

```json
{
  "name": "curso-ts",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\""
  }
}
```

### Descripción de los scripts

1. `npm run build` → compila todos los archivos `.ts` a `.js` en `dist/`.
2. `npm run start` → ejecuta el JS compilado.
3. `npm run dev` → **modo desarrollo**:
   - `tsc --watch` → recompila automáticamente cuando guardas cambios en `.ts`.
   - `nodemon dist/index.js` → reinicia Node automáticamente cuando cambia el JS.

## 🔹 Opción alternativa con ts-node

Si no querés generar la carpeta `dist/`, podés ejecutar TypeScript directamente:

```json
"scripts": {
  "dev": "nodemon --watch \"src/**/*.ts\" --exec ts-node src/index.ts"
}
```

- Ideal para proyectos pequeños o aprendizaje.
- Nodemon vigila los cambios en los archivos `.ts` y ejecuta con `ts-node` directamente.
