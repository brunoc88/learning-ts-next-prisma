# Explicación completa: layout.tsx, params y tsconfig.json en Next 13

---

## 1️⃣ Explicación línea por línea de layout.tsx

```tsx
import './globals.css';
import Link from 'next/link';
```
- `import './globals.css';` → importa estilos globales de la aplicación.
- `import Link from 'next/link';` → importa el componente **Link** de Next.js para navegación SPA sin recargar la página.

```tsx
export const metadata = {
  title: 'Next 13 Intro',
  description: 'Proyecto con Navbar y Footer',
};
```
- `metadata` define **título y descripción** de la página, útil para SEO.

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
```
- Componente raíz que envuelve todas las páginas.
- `{ children }` representa los elementos internos de cada página.
- `: { children: React.ReactNode }` indica que `children` puede ser cualquier nodo React.

```tsx
  return (
    <html lang="en">
      <body>
```
- `<html>` y `<body>` son **obligatorios** en App Router de Next 13.
- `lang="en"` es atributo de accesibilidad.

```tsx
        <header style={{ padding: '1rem', background: '#f0f0f0' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
```
- `header` → barra superior.
- `nav` → contenedor de links.
- `Link href="/"` → navegación interna SPA.

```tsx
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
```
- `<main>` → contenido principal.
- `{children}` → contenido específico de cada página.

```tsx
        <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Mi Proyecto Next 13
        </footer>
      </body>
    </html>
  );
}
```
- `<footer>` → pie de página.
- `&copy; {new Date().getFullYear()}` → año dinámico.
- Fin de `<body>` y `<html>`.

---

## 2️⃣ `{ params }: { params: { id: string } }`

- `params` proviene de la **ruta dinámica** de Next 13, por ejemplo `app/posts/[id]/page.tsx`.
- `: { params: { id: string } }` → tipado inline.
- Se puede definir usando una interface para mayor claridad:

```ts
interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) { ... }
```

✅ Más limpio y reutilizable.

---

## 3️⃣ Explicación de compilerOptions en tsconfig.json

```json
"allowJs": true
```
- Permite importar archivos `.js` junto con `.ts`/`.tsx`.

```json
"noEmit": true
```
- TypeScript solo hace **chequeo de tipos**, no genera archivos `.js`. Next se encarga del bundling.

```json
"moduleResolution": "bundler"
```
- Estrategia de resolución de módulos optimizada para bundlers modernos (Vite, Webpack, Turbopack).

```json
"resolveJsonModule": true
```
- Permite importar archivos `.json` directamente.

```json
"jsx": "preserve"
```
- Next necesita que JSX **no se transforme** todavía, se procesa después con su compilador.

```json
"isolatedModules": true
```
- Cada archivo puede compilarse de forma independiente.
- Previene errores si algún archivo depende de otro sin export/import correctamente.

```json
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
```
- Archivos que TypeScript analizará:
  - `next-env.d.ts` → definiciones Next.
  - `**/*.ts` y `**/*.tsx` → todo tu código.
  - `.next/types/**/*.ts` → tipos generados automáticamente.

---

## ✅ Resumen final

- `layout.tsx` envuelve todas las páginas y permite Navbar/Footer global.
- `{ params }` se puede tipar inline o con interface.
- `tsconfig.json` contiene opciones específicas para Next 13 + App Router + Turbopack, enfocadas en chequeo de tipos, soporte JS/JSON y JSX preserve.
- `include` indica qué archivos analizar, `noEmit` evita generar JS, `isolatedModules` asegura compilación independiente por archivo.

