// 1. Función identidad genérica
// Crea una función genérica `identidad` que devuelva el mismo valor que recibe.

function identidad <T> (valor: T): T {
    return valor
}

console.log(identidad(12))
console.log(identidad('hola')) 