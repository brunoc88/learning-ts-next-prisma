# Día 15: Next.js - Data Fetching: SSR, SSG e ISR

## 📖 Introducción

Next.js permite obtener datos de distintas formas según las necesidades del proyecto.  
Las tres estrategias principales son:

1. **SSR (Server-Side Rendering)** – `getServerSideProps`
2. **SSG (Static Site Generation)** – `getStaticProps`
3. **ISR (Incremental Static Regeneration)` – combinación de SSG + regeneración dinámica

---

## 🧩 1. SSR - Server-Side Rendering

- Usa `getServerSideProps()`
- Se ejecuta **en cada request**
- Ideal cuando los datos cambian **muy seguido** o son **personalizados por usuario**

```tsx
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/users')
  const users = await res.json()

  return {
    props: { users },
  }
}

export default function UsersPage({ users }) {
  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}
```

📍 **Ventajas:**
- Siempre datos actualizados
- Ideal para paneles, dashboards, sesiones

📍 **Desventajas:**
- Más carga al servidor
- Respuesta más lenta

---

## ⚡ 2. SSG - Static Site Generation

- Usa `getStaticProps()`
- Se ejecuta **en build time**
- Genera HTML estático una sola vez

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: { posts },
  }
}

export default function BlogPage({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
```

📍 **Ventajas:**
- Carga ultrarrápida
- Ideal para contenido que cambia poco (blogs, marketing)

📍 **Desventajas:**
- Los cambios en datos requieren volver a hacer build

---

## ♻️ 3. ISR - Incremental Static Regeneration

- Usa `getStaticProps()` **con `revalidate`**
- Genera HTML estático, pero lo **regenera en background** cada X segundos

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products')
  const products = await res.json()

  return {
    props: { products },
    revalidate: 60, // Revalida cada 60 segundos
  }
}
```

📍 **Ventajas:**
- Combina velocidad de SSG + actualización automática
- Ideal para catálogos o listados que cambian de vez en cuando

📍 **Desventajas:**
- Puede mostrar datos antiguos hasta la próxima regeneración

---

## 🧭 Cuadro comparativo

| Estrategia | Se ejecuta | Datos actualizados | Performance | Ideal para |
|-------------|-------------|--------------------|--------------|-------------|
| **SSR** | Cada request | ✅ Siempre | 🔸 Media | Dashboards, contenido dinámico |
| **SSG** | Build time | ❌ No (solo al rebuild) | 🟢 Muy rápida | Blogs, landing pages |
| **ISR** | Build + Regeneración | ♻️ Parcialmente | 🟢 Rápida | Catálogos, listados actualizables |

---

## 💡 4. Data Fetching en el App Router (Next.js 13+)

Con el nuevo sistema de **Server Components**, no se usa más `getServerSideProps` directamente.

En su lugar:
- Podés hacer `await fetch()` **directamente en el componente del servidor**.
- También podés usar el parámetro `{ next: { revalidate: X } }` para ISR.

```tsx
// app/products/page.tsx
export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }, // ISR
  })
  const products = await res.json()

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  )
}
```

---

## 🧠 Conclusión

- Usa **SSR** para datos que cambian en tiempo real.  
- Usa **SSG** para páginas estáticas o contenido estable.  
- Usa **ISR** para obtener lo mejor de ambos mundos.  
- En Next.js moderno (App Router), el **fetch en Server Components** reemplaza las viejas funciones de data fetching.
