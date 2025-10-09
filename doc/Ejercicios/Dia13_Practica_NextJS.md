# Día 13: Práctica - Estructura y rutas en Next.js

## 🎯 Objetivo
Aprender a crear y navegar entre rutas estáticas y dinámicas en Next.js.

---

## 🧰 1. Crear proyecto base
```bash
npx create-next-app@latest next13-intro --typescript
cd next13-intro
npm run dev
```

---

## 🏗️ 2. Crear rutas estáticas

### 📁 Estructura
```
src/app/
├── page.tsx
└── about/
    └── page.tsx
```

### Código
```tsx
// src/app/page.tsx
export default function Home() {
  return <h1>Página principal</h1>;
}
```

```tsx
// src/app/about/page.tsx
export default function About() {
  return <h1>Sobre nosotros</h1>;
}
```

Visita:
- `/` → Página principal  
- `/about` → Página “Sobre nosotros”

---

## 🔄 3. Crear rutas dinámicas

### 📁 Estructura
```
src/app/blog/[id]/page.tsx
```

### Código
```tsx
// src/app/blog/[id]/page.tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h2>Mostrando post {params.id}</h2>;
}
```

Prueba en:
- `/blog/1`
- `/blog/2`

---

## 🧱 4. Crear un componente y reutilizarlo

### 📁 Estructura
```
src/components/Header.tsx
```

```tsx
// src/components/Header.tsx
export default function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <h1>Mi Blog con Next.js</h1>
    </header>
  );
}
```

Importalo en `page.tsx`:
```tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>Bienvenido al blog.</p>
    </main>
  );
}
```

---

## 🚀 5. Desafío extra
1. Crea una nueva ruta `/contact` con un formulario básico.  
2. Agrega navegación entre páginas usando el componente `Link` de `next/link`.  
3. Personaliza el `layout.tsx` global con un `Navbar` y `Footer`.

---

## ✅ Resultado esperado
Un proyecto con:
- Varias páginas (home, about, contact).  
- Rutas dinámicas (`/blog/[id]`).  
- Un componente `Header` reutilizable.  
- Navegación básica entre rutas.

