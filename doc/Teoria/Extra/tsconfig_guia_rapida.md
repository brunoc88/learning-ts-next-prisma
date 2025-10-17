# Guía rápida de tsconfig para proyecto Vite + React + Node + Tests

## Estructura típica del proyecto

```
/project
│
├─ tsconfig.json           <- Base principal (React + TS)
│
├─ tsconfig.node.json      <- Node / scripts
│
├─ tsconfig.vitest.json    <- Tests (Vitest)
│
├─ tsconfig.app.json       <- Opcional: React frontend aislado
│
├─ src/                   <- Código React
│   ├─ App.tsx
│   └─ components/
│
├─ scripts/               <- Scripts Node
│   └─ build.ts
│
└─ tests/                 <- Tests
    └─ App.test.tsx
```

---

### 1️⃣ tsconfig.json → Base principal

- **Qué compila:** todo React + TS en `src/`.
- **Archivos típicos:** `.ts`, `.tsx`
- **Por qué usarlo:**
  - Configura `jsx: react-jsx` para `.tsx`
  - Alias (`@components`, `@utils`)
  - Strict type checking
- **Ejemplo de uso:** cualquier archivo React que compila con Vite.

---

### 2️⃣ tsconfig.node.json → Scripts Node

- **Qué compila:** scripts que corren en Node (`scripts/`)  
- **Archivos típicos:** `.ts` (sin JSX)
- **Por qué usarlo:**
  - Cambia `module` a `CommonJS`
  - No incluye librerías DOM innecesarias
  - Se dirige a Node, no al navegador
- **Ejemplo de uso:** `ts-node scripts/build.ts`

---

### 3️⃣ tsconfig.vitest.json → Tests

- **Qué compila:** tests y código fuente necesario para testear
- **Archivos típicos:** `.ts`, `.tsx`
- **Por qué usarlo:**
  - Incluye tipos globales de Vitest (`describe`, `it`, `expect`)
  - Hereda la configuración base de TS + React
- **Ejemplo de uso:** `vitest run` o `npm test`

---

### 4️⃣ tsconfig.app.json → React frontend aislado (opcional)

- **Qué compila:** solo el frontend (`src/`)
- **Archivos típicos:** `.tsx`
- **Por qué usarlo:**
  - Evita conflictos con Node y tests
  - Mantiene el frontend independiente
- **Ejemplo de uso:** compilación Vite para producción (`vite build`)

---

### 🔹 Resumen gráfico rápido

| tsconfig               | Archivos           | Propósito                       |
|------------------------|------------------|--------------------------------|
| tsconfig.json          | src/**/*.ts/.tsx  | Base React + TS                |
| tsconfig.node.json     | scripts/**/*.ts   | Node scripts                   |
| tsconfig.vitest.json   | tests/**/*.ts/.tsx | Tests con Vitest               |
| tsconfig.app.json      | src/**/*.ts/.tsx  | Opcional: React frontend aislado |

---

💡 **Tip práctico:**
Cuando crees un archivo nuevo, piensa:

1. ¿Es React en `src/`? → `tsconfig.json`
2. ¿Es script Node? → `tsconfig.node.json`
3. ¿Es test? → `tsconfig.vitest.json`

Esto elimina errores como *“Cannot use JSX”* o problemas de importación.

