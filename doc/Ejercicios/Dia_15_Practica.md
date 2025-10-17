# Día 15: Práctica - Next.js Data Fetching

## 🧪 Ejercicio 1: Server-Side Rendering (SSR)

1. Crea un archivo `app/users/page.tsx`.
2. Obtén usuarios de una API pública, por ejemplo:
   ```
   https://jsonplaceholder.typicode.com/users
   ```
3. Muestra la lista de nombres con SSR.

```tsx
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  const users = await res.json()

  return (
    <div>
      <h1>Usuarios (SSR)</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}
```

> 💡 `cache: 'no-store'` equivale a `getServerSideProps`.

---

## 🧩 Ejercicio 2: Static Site Generation (SSG)

1. Crea un archivo `app/posts/page.tsx`.
2. Obtén posts de `https://jsonplaceholder.typicode.com/posts`.
3. No uses `cache: 'no-store'` para generar estáticamente la página.

```tsx
export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h1>Posts (SSG)</h1>
      <ul>
        {posts.slice(0, 10).map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
```

> 💡 Como no tiene `no-store`, Next.js lo trata como SSG.

---

## 🔁 Ejercicio 3: Incremental Static Regeneration (ISR)

1. Crea `app/products/page.tsx`.
2. Usa el mismo endpoint que en SSG, pero con revalidación.
3. Mostrá en pantalla cuándo se generó la página.

```tsx
export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }, // Revalida cada 60s
  })
  const products = await res.json()
  const date = new Date().toLocaleTimeString()

  return (
    <div>
      <h1>Productos (ISR)</h1>
      <p>Página generada a las: {date}</p>
      <ul>
        {products.slice(0, 5).map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
```

> 🧠 Probá recargar la página y ver cómo cambia el horario cada minuto.

---

## ⚙️ Ejercicio 4 (Bonus): Combinar SSR + Client Component

1. Crea un Server Component que obtenga los datos.
2. Pásaselos a un Client Component que permita filtrarlos.

```tsx
// app/products/ProductList.tsx
'use client'
export default function ProductList({ products }) {
  const [filter, setFilter] = useState('')

  const filtered = products.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border p-1"
      />
      <ul>
        {filtered.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}

// app/products/page.tsx
import ProductList from './ProductList'

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  })
  const products = await res.json()

  return (
    <div>
      <h1>Productos con filtro (ISR + Client)</h1>
      <ProductList products={products} />
    </div>
  )
}
```

---

## ✅ Objetivos de la práctica

- Comprender cuándo usar SSR, SSG e ISR.  
- Aplicar las tres estrategias con ejemplos reales.  
- Integrar Server y Client Components correctamente.
