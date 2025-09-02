# Día 1 – Introducción a TypeScript

## 🚀 Configuración inicial

1. Crear proyecto:
   ```bash
   - Abrí una carpeta vacía, por ejemplo:
   mkdir curso-ts
   cd curso-ts
   - Inicializá npm:
   npm init -y
   - Instalá TypeScript como dependencia de desarrollo
   npm install --save-dev typescript
   - Generá el archivo de configuración:
   npx tsc --init <--- Esto te crea el archivo tsconfig.json.
   ```

2. Configuración básica recomendada en `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "es2020",
       "module": "commonjs",
       "strict": true,
       "outDir": "./dist"
     }
   }
   ```

   - `strict: true` → activa todas las comprobaciones de tipos.
   - `outDir: ./dist` → guarda el JS compilado en `dist/`.

3: Primer archivo TypeScript

Creá la carpeta src/ y dentro un archivo index.ts:
```js
// src/index.ts

// Tipos primitivos
let nombre: string = "Bruno";
let edad: number = 37;
let programador: boolean = true;
let nada: null = null;
let indefinido: undefined = undefined;

// Función con tipos
function saludar(persona: string, edad: number): string {
  return `Hola, me llamo ${persona} y tengo ${edad} años.`;
}

console.log(saludar(nombre, edad));
```

4: Compilar y ejecutar
- Compilá con:
npx tsc <--- Esto genera dist/index.js.
- Ejecutá con Node:
node dist/index.js

Deberías ver en consola:
Hola, me llamo Bruno y tengo 37 años.



## 📂 ¿Qué es la carpeta `dist/`?

- Es la carpeta donde se guarda el **código JavaScript compilado** a partir de tu código TypeScript.
- Ejemplo:
  - `src/index.ts` → compilado → `dist/index.js`.
- En producción, lo que se ejecuta es siempre el código de `dist/`.

## 📦 Dependencia de desarrollo

- TypeScript se instala como **devDependency** (`npm i -D typescript`).
- Motivo: solo lo usamos en **desarrollo** para escribir código tipado.
- En producción solo se necesita **JavaScript** (resultado de la compilación).

## 🔎 Diferencia entre JS y TS

- **JavaScript**:
  - Lenguaje interpretado.
  - Se ejecuta directamente en el motor (V8, SpiderMonkey, etc.).
- **TypeScript**:
  - Superset de JavaScript.
  - Añade tipado estático, interfaces, genéricos, etc.
  - Necesita ser **compilado a JavaScript** antes de ejecutarse.

## ✍️ Tipos primitivos en TypeScript

```ts
let nombre: string = "Bruno";
let edad: number = 37;
let programador: boolean = true;
let nada: null = null;
let indefinido: undefined = undefined;
```

## 🔧 Funciones tipadas

```ts
function saludar(persona: string, edad: number): string {
  return `Hola, me llamo ${persona} y tengo ${edad} años.`;
}

console.log(saludar("Bruno", 37));
```

### Funciones flecha

sin {}:
```ts
const saludar = (persona: string, edad: number): string => `Hola, me llamo ${persona} y tengo ${edad} años.`
```
con {}:
```ts
const saludar = (persona: string, edad: number): string => {
    const mensaje = `Hola, me llamo ${persona} y tengo ${edad} años.`;
    return mensaje;
};

```

void:
```ts
const saludar = (nombre: string): void => {
    console.log(`Hola ${nombre}`);
};

```

- `persona: string` → parámetro debe ser un string.
- `edad: number` → parámetro debe ser un número.
- `: string` después de los paréntesis → la función **debe devolver un string**.

## 📝 Ejercicios prácticos

1. Crear una variable `pi: number` con valor `3.1416`.
2. Función `doble(n: number): number` que devuelva el doble.
3. Función `esMayorDeEdad(edad: number): boolean` que devuelva `true/false`.
4. Variable que pueda ser `string | null`.

---
✅ Con esto tenés las bases para empezar a escribir código en TS de forma segura.
