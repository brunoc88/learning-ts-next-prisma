# Día 14: Next.js - Server y Client Components (Práctica)

---

## 1️⃣ Ejercicio: Server Component básico

Crea un componente que obtenga datos del servidor y los muestre:

```tsx
// app/server-data/page.tsx
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function ServerData() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Posts desde Server Component</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

- ✅ Muestra datos obtenidos directamente desde el servidor.
- ❌ No puede usar `useState` ni `useEffect`.

---

## 2️⃣ Ejercicio: Client Component con estado

```tsx
// app/client-counter/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador Cliente</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

- ✅ Se puede interactuar, cambiar estado y disparar eventos.
- Se puede **importar dentro de un Server Component**:

```tsx
// app/page.tsx
import Counter from './client-counter/Counter';

export default function Home() {
  return (
    <div>
      <h1>Página Principal</h1>
      <Counter />
    </div>
  );
}
```

---

## 3️⃣ Ejercicio combinado

1. Server Component obtiene lista de usuarios.
2. Client Component permite filtrarlos por nombre:

```tsx
// app/user-list/UserFilter.tsx
'use client';
import { useState } from 'react';

export default function UserFilter({ users }: { users: { id: number; name: string }[] }) {
  const [query, setQuery] = useState('');
  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Buscar" value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}
```

```tsx
// app/user-list/page.tsx
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

import UserFilter from './UserFilter';

export default async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Usuarios</h1>
      <UserFilter users={users} />
    </div>
  );
}
```

- ✅ Server Component hace fetch.
- ✅ Client Component permite interacción y filtrado dinámico.

