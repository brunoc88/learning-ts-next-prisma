# Día 5: Interfaces vs Type Aliases y Tipos literales

## 1. Interfaces vs Type Aliases

1.  Define una `interface` `Animal` con propiedades `especie` y `edad`.
2.  Crea un `type` `Vehiculo` con propiedades `marca` y `modelo`.
3.  Explica qué diferencia encontrás al extender ambos.

## 2. Tipos literales

1.  Define un type `Resultado` que solo pueda ser `"exito"` o `"error"`.
2.  Crea una función `mostrarResultado(r: Resultado)` que imprima un
    mensaje distinto según el valor recibido.

## 3. Enums

1.  Define un `enum Rol` con valores `Admin`, `Usuario`, `Invitado`.
2.  Crea una función `tieneAcceso(rol: Rol)` que devuelva `true` solo
    para `Admin`.

## 4. Tipado discriminado

1.  Define los tipos `Triangulo` y `Cuadrado` con una propiedad común
    `tipo`.
2.  Usa un `switch` sobre `tipo` para calcular área en una función
    `calcularArea(figura)`.