# Día 9: TypeScript con React - Ejercicios

Pon en práctica lo aprendido creando y tipeando componentes con React y
TypeScript.

------------------------------------------------------------------------

## 1. Componente Button

Crea un componente `Button` que reciba: - `label: string` -
`onClick: () => void`

Y muéstralo en pantalla.

------------------------------------------------------------------------

## 2. Componente Card

Crea un componente `Card` que reciba props: - `title: string` -
`content: string`

Renderiza un título y un párrafo.

------------------------------------------------------------------------

## 3. Componente Layout con children

Crea un componente `Layout` que reciba `children` y los muestre dentro
de un `div`.

``` tsx
<Layout>
  <h1>Bienvenido</h1>
  <p>Este es el contenido</p>
</Layout>
```

------------------------------------------------------------------------

## 4. Componente Input

Crea un componente `Input` que reciba: - `value: string` -
`placeholder?: string` (opcional, con valor por defecto
`"Escribe algo..."`).

------------------------------------------------------------------------

## 5. Extra: Componente Lista de Productos

Define un tipo `Product` con propiedades `id`, `name` y `price`.\
Crea un componente `ProductList` que reciba un array de `Product` y
muestre los productos en pantalla.

------------------------------------------------------------------------

✅ Con estos ejercicios vas a practicar tipado de props, children y
componentes reutilizables.
