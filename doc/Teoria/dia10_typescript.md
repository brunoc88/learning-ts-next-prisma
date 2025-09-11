# Día 10: Hooks en React con TypeScript

### 1.1 useState
- Permite tener **estado en componentes funcionales**.
- **Tipado:**
```ts
const [count, setCount] = useState<number>(0);
```
- TypeScript infiere el tipo si le das un valor inicial, pero se recomienda tiparlo explícitamente si el estado puede ser vacío al inicio.

### 1.2 useRef
- Permite **acceder a elementos del DOM o valores persistentes entre renders**.
- **Tipado:**
```ts
const inputRef = useRef<HTMLInputElement>(null);
```
- `current` puede ser `null` al inicio, por eso se indica `null` como valor inicial.

### 1.3 useEffect
- Permite **efectos secundarios**, como llamadas a APIs o suscripciones.
- **Tipado:** TypeScript infiere el tipo de la función que pasas.
```ts
useEffect(() => {
  console.log('Componente montado');
}, []);
```

### 1.4 useReducer
- Para **manejo de estado complejo** o formularios grandes.
- **Tipado:**
```ts
type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

### 1.5 Eventos en formularios
- Siempre tipar los eventos de React.
```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form enviado');
};
```

---

