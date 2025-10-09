# Día 13: Introducción a Next.js - Fundamentos y estructura

## 📘 Objetivos del día
- Comprender la estructura básica de un proyecto Next.js.
- Crear y navegar entre rutas estáticas y dinámicas.
- Renderizar componentes básicos en páginas Next.js.

---

## 🧩 1. ¿Qué es Next.js?
Next.js es un **framework de React** que facilita el desarrollo de aplicaciones web **renderizadas del lado del servidor (SSR)**, con **ruteo automático**, **optimización de rendimiento** y **soporte para API Routes**.

### Ventajas principales
- 🔁 Renderizado híbrido (SSR y SSG).
- 🚀 Optimización automática de imágenes y rendimiento.
- 📦 Ruteo basado en el sistema de archivos.
- 🌐 API Routes integradas.
- 🧱 Soporte para componentes de servidor y cliente.

---

## 🧱 2. Estructura básica de un proyecto Next.js

```bash
my-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── app/               # (desde Next 13) rutas y páginas principales
│   │   ├── page.tsx       # Página principal "/"
│   │   └── about/
│   │       └── page.tsx   # Página "/about"
│   ├── components/        # Componentes reutilizables
│   └── styles/            # Estilos globales
├── package.json
├── tsconfig.json
└── next.config.js
```

### Archivos importantes
- **`next.config.js`** → configuración personalizada.
- **`tsconfig.json`** → configuración de TypeScript.
- **`page.tsx`** → punto de entrada de cada ruta.
- **`layout.tsx`** → estructura compartida (navbar, footer, etc).

---

## 🧭 3. Rutas en Next.js

### Rutas estáticas
Cada carpeta dentro de `app/` representa una ruta.
```tsx
// src/app/about/page.tsx
export default function About() {
  return <h1>Sobre Nosotros</h1>;
}
```

➡️ Accedes desde `/about`.

### Rutas dinámicas
Se definen usando corchetes `[param]`:
```tsx
// src/app/blog/[id]/page.tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h2>Post número {params.id}</h2>;
}
```

➡️ Accedes desde `/blog/1`, `/blog/2`, etc.

---

## ⚙️ 4. Componentes y renderizado

Los componentes funcionan igual que en React:
```tsx
// src/components/Header.tsx
export default function Header() {
  return <header><h1>Mi sitio Next.js</h1></header>;
}
```

Y se importan en una página:
```tsx
// src/app/page.tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>Bienvenido a mi primera app con Next.js</p>
    </main>
  );
}
```

---

## 🚀 5. Ejecución del proyecto
```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm run dev
```
Tu app correrá en: **http://localhost:3000**

---

## 🧠 Resumen
- Next.js organiza rutas mediante el sistema de archivos.  
- Cada carpeta dentro de `app/` genera una ruta automáticamente.  
- Puedes usar componentes de React dentro de tus páginas.  
- Soporta rutas dinámicas y renderizado híbrido (SSR/SSG).

