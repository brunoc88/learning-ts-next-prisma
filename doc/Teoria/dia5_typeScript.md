# Día 5: Interfaces vs Type Aliases y Tipos literales

## Interfaces vs Type Aliases

### Interfaces

-   Se usan para describir la **forma de un objeto**.
-   Permiten **extenderse** (herencia).
-   Se pueden **declarar múltiples veces** y se fusionan
    automáticamente.
-   Más comunes para definir **APIs, modelos y contratos de objetos**.

Ejemplo:

``` ts
interface Persona {
  nombre: string
  edad: number
}

interface Persona {
  email?: string // Se fusiona con la anterior
}
```

### Type Aliases

-   Usados para crear **alias de tipos** (objetos, primitivos, uniones,
    tuplas, etc.).
-   No se pueden extender tan fácilmente como interfaces.
-   No se fusionan si se definen dos veces (error de compilación).
-   Más flexibles para **tipos complejos** (uniones, intersecciones,
    literales).

Ejemplo:

``` ts
type Persona = {
  nombre: string
  edad: number
}

type Resultado = "exito" | "error" // tipos literales
```

------------------------------------------------------------------------

## Tipos literales

Un **tipo literal** restringe un valor a un conjunto específico.

Ejemplo:

``` ts
type Direccion = "izquierda" | "derecha" | "arriba" | "abajo"
```

Sirven para validar de forma estricta los posibles valores.

------------------------------------------------------------------------

## Enums

Los **enums** permiten definir un conjunto de valores con nombre.

Ejemplo:

``` ts
enum Direccion {
  Izquierda,
  Derecha,
  Arriba,
  Abajo
}
```

Se usan cuando necesitamos **valores semánticos reutilizables**.

------------------------------------------------------------------------

## Tipado discriminado

Técnica para trabajar con **uniones de objetos** que comparten una
propiedad común llamada *discriminante*.

Ejemplo:

``` ts
type Circulo = {
  tipo: "circulo"
  radio: number
}

type Rectangulo = {
  tipo: "rectangulo"
  ancho: number
  alto: number
}

type Figura = Circulo | Rectangulo

function area(figura: Figura): number {
  switch (figura.tipo) {
    case "circulo":
      return Math.PI * figura.radio ** 2
    case "rectangulo":
      return figura.ancho * figura.alto
  }
}
```
