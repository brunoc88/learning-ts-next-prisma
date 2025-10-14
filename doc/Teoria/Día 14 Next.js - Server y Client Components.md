# Día 14: Next.js - Server y Client Components (Teoría)

---

## 1️⃣ Diferencia entre Server Components y Client Components

### Server Components (SC)
- Se ejecutan en el **servidor**.
- No pueden usar **estado local (`useState`)** ni **efectos (`useEffect`)**.
- Ideales para: fetch de datos, renderizado de listas grandes, contenido estático o dinámico que no requiere interacción.
- Ventajas:
  - Mejor rendimiento (menos JS enviado al cliente).
  - SEO optimizado.

### Client Components (CC)
- Se ejecutan en el **navegador**.
- Pueden usar **estado local** (`useState`, `useReducer`) y **efectos** (`useEffect`).
- Necesitan ser marcados con `'use client'` al inicio del archivo.
- Ideales para: formularios, botones interactivos, animaciones, etc.

### Cómo diferenciarlos
- **Server Component**: no requiere `'use client'`, puede ser `.tsx` normal.
- **Client Component**: agregar al inicio del archivo:
  ```ts
  'use client';
  ```

---

## 2️⃣ Manejo de estado y eventos

- **Server Components**: no manejan estado ni eventos.
- **Client Components**: se maneja igual que en React:

```ts
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

- Se pueden combinar: Server Components renderizan datos iniciales y pasan props a Client Components para interacción.

---

## 3️⃣ Buenas prácticas

- Usar Server Components siempre que sea posible para **optimizar carga y SEO**.
- Solo usar Client Components cuando se necesita **interactividad en el cliente**.
- Mantener separación clara para aprovechar **renderizado híbrido** de Next.js.

