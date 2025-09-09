// 1. Función identidad genérica
// Crea una función genérica `identidad` que devuelva el mismo valor que recibe.

function identidad <T> (valor: T): T {
    return valor
}

console.log(identidad(12))
console.log(identidad('hola')) 

// 2. Par genérico
// Crea una función `par` que acepte dos valores de tipos distintos 
// y devuelva un objeto con ambas propiedades.

function par <K, V> (clave:K, valor:V) {
    return {clave, valor}
}

console.log(par('id',1))

// 3. Caja genérica
// Define una interfaz genérica `Caja<T>` que contenga un valor de tipo `T`.
// Crea una caja de `number` y otra de `string`.

interface Caja<T> {
    contenido: T
}

let caja: Caja <number> = {
    contenido: 10
}
let caja2: Caja <string> = {
    contenido: 'RTX 5090'
}
console.log(caja)
console.log(caja2)

// 4. Array genérico
// Crea una función `primero<T>` que devuelva el primer elemento de un array genérico.

let primero = <T> (arr:T []) : T => arr[0]

console.log(primero([14,22,10]))
console.log(primero(['hola','dev','adios']))

// 5. Constraining
// Crea una función `obtenerLongitud` que solo acepte tipos que tengan la propiedad `length`.

let obtenerLongitud = <T extends { length: number }>(value: T) : number =>  value.length
console.log(obtenerLongitud('hola'))
console.log(obtenerLongitud([1,2,3]))

// 6. Combinar
// Crea una función `combinar<T, U>` que acepte dos objetos y los combine en uno solo.

let combinar = <T, U>(item: T, item2: U): T & U => {
    return { ...item, ...item2 }
}

console.log(combinar({ id: 1 }, { nombre: "Bruno" }))

/*Explicación rápida:

T & U → usamos intersection type para decir que el resultado tendrá las propiedades de T y U.

{ ...item, ...item2 } → hace un spread para unir ambos objetos.
*/
