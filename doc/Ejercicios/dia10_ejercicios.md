# Día 10: Hooks en React con TypeScript

### Ejercicio 1: Formulario controlado simple
**Enunciado:** Crea un formulario que tenga un input de nombre y un input de edad. Los datos deben guardarse en el estado con `useState` y mostrarse en consola al enviar el formulario.

```tsx
import { useState } from 'react';

const Formulario = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nombre" />
      <input type="number" value={age} onChange={handleAgeChange} placeholder="Edad" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
```

### Ejercicio 2: Uso de useRef
**Enunciado:** Crea un input que tenga un botón para enfocarlo usando `useRef`.

```tsx
import { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe algo" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default InputFocus;
```

### Ejercicio 3: Contador con useReducer
**Enunciado:** Crea un contador con botones + y - que use `useReducer` para manejar el estado del contador.

```tsx
import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Counter;
