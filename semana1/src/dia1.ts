// 1. Crear una variable `pi: number` con valor `3.1416`.

let pi: number = 3.1416

// 2. Función `doble(n: number): number` que devuelva el doble.

function dobleNumber(n: number): number {
    return n * 2
}

// 3. Función `esMayorDeEdad(edad: number): boolean` que devuelva `true/false`.

function esMayor(edad: number): boolean {
    return edad > 18
}

// 4. Variable que pueda ser `string | null`.

/*En TypeScript podés declarar que una variable puede tener más de un tipo usando union types (|).

Por ejemplo:
let nombre: string | null = null; // puede ser string o null

nombre = "Bruno"; // válido
nombre = null;    // también válido
// nombre = 42;   // ❌ Error, porque no es string ni null
*/



console.log(pi)
console.log(dobleNumber(2))
console.log(esMayor(37))
