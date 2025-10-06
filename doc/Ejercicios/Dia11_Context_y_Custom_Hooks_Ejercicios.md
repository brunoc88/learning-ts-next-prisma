# Día 11: Ejercicios Prácticos - Context y Custom Hooks

## 🧩 Ejercicio 1: Context de autenticación
Crea un contexto `AuthContext` que maneje:
- Usuario actual (`user: string | null`).
- Funciones `login(nombre: string)` y `logout()`.

**Requisitos:**
- Tipar correctamente el contexto y proveedor.
- Usar `useContext` en un componente `Navbar` para mostrar el usuario logueado.

---

## ⚙️ Ejercicio 2: Custom Hook useToggle
Crea un hook `useToggle(initial: boolean)` que:
- Devuelva `[value, toggle]`.
- `toggle()` cambie el valor entre `true` y `false`.

**Ejemplo de uso:**
```tsx
const [isOpen, toggleOpen] = useToggle(false);
```

---

## 💾 Ejercicio 3: useFetch con tipado genérico
Implementa un hook `useFetch<T>(url: string)` que:
- Devuelva `{ data: T | null, loading: boolean, error: string | null }`.
- Use `fetch` para obtener datos.
- Tipar `data` dinámicamente según el genérico `T`.

**Ejemplo de uso:**
```tsx
const { data, loading } = useFetch<User[]>('/api/users');
```

---

## 🌍 Ejercicio 4: Context + Custom Hook
Crea un contexto `ThemeContext` y un hook `useTheme()` que:
- Exponga el tema actual (`light` | `dark`) y una función `toggleTheme()`.
- Use el hook dentro de un componente `Header` con un botón para alternar tema.
