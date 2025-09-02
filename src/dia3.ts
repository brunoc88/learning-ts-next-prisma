// 1. Crear una función `restar(a, b)` que acepte **números** y devuelva la resta.
// Tipar parámetros y retorno.

let restar = (a: number, b: number): number => a - b

console.log(restar(4, 2))

// 2. Crear una función `getUserName(id?: number)` que:
// - Si recibe un id, retorna `"Usuario <id>"`.
// - Si no recibe nada, retorna `"Invitado"`.

const getUserName = (id?: number): string => id ? `Usuario ${id}` : 'invitado'

console.log(getUserName()) //<--- sin parametro = 'invitado'
console.log(getUserName(2)) //<--- con parametro = 'Usuario 2'

// 3. Definir una función flecha `toArray` que reciba un valor (string o number) 
// y lo devuelva dentro de un array. Tipar bien el retorno.

const toArray = (x: string | number): (string | number)[] => {
    return [x]
}

console.log(toArray(1))      // [1]
console.log(toArray("hola")) // ["hola"]
console.log(toArray(1))


//4. Escribir una función `formatear(valor: string | number)` que:
// - Si es string → lo retorne en mayúsculas.
// - Si es number → lo devuelva multiplicado por 10.

const formatear = (x: string | number): (string | number) => typeof x === 'string' ? x.toUpperCase() : x * 10

console.log(formatear('hola mundo!'))
console.log(formatear(5))