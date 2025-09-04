//  Interfaces vs Type Aliases

// 1.  Define una `interface` `Animal` con propiedades `especie` y `edad`.

interface Animal {
    especie: string,
    edad: number
}

// 2. Crea un `type` `Vehiculo` con propiedades `marca` y `modelo`.

type Vehiculo = {
    marca: string,
    modelo: string
}

// 3.  Explica qué diferencia encontrás al extender ambos.

/*
Interfaces vs Type Aliases

Tu explicación está perfecta. Podés resumir la diferencia clave así:

interface → más usada para objetos y se puede extender/fusionar.

type → más flexible para uniones, intersecciones y tipos complejos, pero no se fusiona.
*/

//  Tipos literales

// 1.  Define un type `Resultado` que solo pueda ser `"exito"` o `"error"`.

type Resultado = 'exito' | 'error'

// 2.  Crea una función `mostrarResultado(r: Resultado)` que imprima un 
// mensaje distinto según el valor recibido.


let mostrarResultado = (r: Resultado) => {
    if (r === 'exito') {
        console.log("✅ Operación exitosa")
    } else {
        console.log("❌ Hubo un error")
    }
}

mostrarResultado('exito')
mostrarResultado('error')


let r : Resultado = 'error'

mostrarResultado(r)

// Enums

// 1.  Define un `enum Rol` con valores `Admin`, `Usuario`, `Invitado`.

enum Rol {
    Admin,
    Usuario,
    Invitado
}

// 2.  Crea una función `tieneAcceso(rol: Rol)` que devuelva `true` solo para `Admin`.

let tieneAcceso = (rol: Rol) => rol === Rol.Admin? true: false

console.log(tieneAcceso(0))

// Tipado discriminado

// 1.  Define los tipos `Triangulo` y `Cuadrado` con una propiedad común `tipo`.

type Triangulo = {
  tipo: "triangulo"
  base: number
  altura: number
}

type Cuadrado = {
  tipo: "cuadrado"
  lado: number
}

// 2.  Usa un `switch` sobre `tipo` para calcular área en una función `calcularArea(figura)`.


type Figura = Triangulo | Cuadrado

function calcularArea(figura: Figura): number {
  switch (figura.tipo) {
    case "triangulo":
      return (figura.base * figura.altura) / 2
    case "cuadrado":
      return figura.lado * figura.lado
  }
}

let f1: Figura = { tipo: "triangulo", base: 10, altura: 5 }
let f2: Figura = { tipo: "cuadrado", lado: 4 }

console.log(calcularArea(f1)) // 25
console.log(calcularArea(f2)) // 16
