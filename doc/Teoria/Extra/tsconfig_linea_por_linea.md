# Explicación línea por línea de tsconfig.json

## compilerOptions

### target: "ESNext"
- Le dice a TypeScript qué versión de JavaScript generar.
- "ESNext" significa que deja características modernas como async/await, import/export tal cual, y que Vite/Babel se encarga de compatibilidad si es necesario.

### module: "ESNext"
- Define el sistema de módulos a usar (import/export).
- "ESNext" es ideal para React + Vite, que trabaja con módulos ES modernos.
- Si fuera Node clásico usarías "commonjs".

### moduleResolution: "Node"
- Indica a TypeScript cómo buscar archivos importados.
- "Node" sigue la misma lógica que Node.js, por ejemplo para `import X from "y"` busca primero node_modules, luego archivos relativos.

### lib: ["DOM", "DOM.Iterable", "ESNext"]
- Le dice a TS qué bibliotecas de tipos usar.
- "DOM" → tipos de navegador (document, window…)
- "DOM.Iterable" → tipos de cosas iterables del DOM (NodeList, HTMLCollection…)
- "ESNext" → tipos de JS moderno

### jsx: "react-jsx"
- Muy importante para React 17+ con TS.
- Permite usar `<Component />` en `.tsx` sin necesidad de `import React`.

### strict: true
- Activa varias comprobaciones estrictas de TypeScript para código más seguro.

### noImplicitAny: true
- Obliga a declarar tipos; si TypeScript no puede inferirlo, da error.

### strictNullChecks: true
- Evita que `null` o `undefined` se usen donde no deberían.

### esModuleInterop: true
- Facilita importar módulos comunes de Node (CommonJS) con `import X from "mod"`.

### skipLibCheck: true
- Evita revisar tipos de librerías externas, acelera la compilación.

### forceConsistentCasingInFileNames: true
- Evita errores de mayúsculas/minúsculas en importaciones (`import X from "./File"`).

### baseUrl: "./src"
- Define la raíz de tus imports con paths relativos.
- Ej: `import Button from "@components/Button"` funciona porque apunta a `src/components/Button`.

### paths
- Alias de carpetas para imports más limpios.
- `@components/*` → `src/components/*`, etc.

### include: ["src"]
- Solo TS revisa los archivos dentro de `src`.

### exclude: ["node_modules"]
- Ignora librerías externas, no las compila.

