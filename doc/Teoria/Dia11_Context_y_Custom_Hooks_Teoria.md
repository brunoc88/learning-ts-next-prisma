# Día 11: Context y Custom Hooks con TypeScript

## 🧩 Context en React con TypeScript

El **Context API** permite compartir datos entre componentes sin necesidad de pasar props manualmente por cada nivel.

### 1. Crear un contexto
```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
```

### 2. Crear un proveedor
```tsx
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 3. Consumir el contexto
```tsx
const ThemeToggler = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext debe usarse dentro de ThemeProvider");
  return (
    <button onClick={context.toggleTheme}>
      Tema actual: {context.theme}
    </button>
  );
};
```

---

## ⚙️ Custom Hooks con TypeScript

Los **custom hooks** son funciones que encapsulan lógica reutilizable con otros hooks internos.

### 1. Estructura básica
```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

### 2. Uso
```tsx
const [username, setUsername] = useLocalStorage<string>('user', '');
```

---

## 🧠 Recomendaciones
- Siempre tipar los valores del contexto.
- En custom hooks, usar `as const` si retornás tuplas.
- Validar con `if (!context)` antes de usar el contexto.
- Crear carpetas `/context` y `/hooks` para mantener orden.
