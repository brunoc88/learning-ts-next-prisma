# Día 9: TypeScript con React - Teoría

En este día aprenderás cómo tipar componentes en React con TypeScript,
asegurando mayor seguridad y autocompletado.

------------------------------------------------------------------------

## 1. Tipado de componentes funcionales

Un componente funcional puede tiparse directamente con sus props:

``` tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

------------------------------------------------------------------------

## 2. Uso de `React.FC`

También se puede tipar un componente con `React.FC` (FunctionComponent):

`React.FC` (o React.FunctionComponent) es un tipo genérico que viene incluido en React para tipar componentes funcionales en TypeScript.

``` tsx
import { FC } from "react";

type CardProps = {
  title: string;
  content: string;
};

const Card: FC<CardProps> = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
```

### Ventajas y desventajas de `React.FC`

-   ✅ Incluye por defecto la prop `children`.
-   ✅ Autocompletado de props.
-   ⚠️ Puede ser menos flexible en casos avanzados, por eso muchos
    prefieren tipar props manualmente.

`React.FC<Props>` es una forma rápida de tipar componentes funcionales, pero no es obligatoria.
Hoy en día, muchos devs prefieren no usar React.FC y tipar props manualmente porque da más flexibilidad.
------------------------------------------------------------------------

## 3. Tipado de `children`

Si queremos que un componente acepte `children`, se tipa así:

``` tsx
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}
```

------------------------------------------------------------------------

## 4. Props opcionales y valores por defecto

``` tsx
type InputProps = {
  placeholder?: string;
  value: string;
};

function Input({ placeholder = "Escribe algo...", value }: InputProps) {
  return <input placeholder={placeholder} value={value} readOnly />;
}
```

------------------------------------------------------------------------

✅ Con esto, ya podés crear componentes reutilizables con tipado fuerte
en React + TypeScript.
