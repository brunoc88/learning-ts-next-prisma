// Arrays
// 1. Declara un array de números y calcula la suma de todos sus elementos.

let numbers: number[] = [1, 2, 3, 4, 5];

function sumar(): number {
    let suma = 0;
    for (let n of numbers) {
        suma += n; // forma más corta de suma = suma + n
    }
    return suma;
}

console.log(sumar());

// 💡 Extra con reduce
const sumaReduce = numbers.reduce((acc, n) => acc + n, 0)


// 2. Declara un array de strings y escribe una función que devuelva el string más largo.

let str: Array<string> = ['hola', 'mundo']

const longestString = () => {
    let result: string = str[0]

    for (let c of str) {
        if (c.length > result.length) result = c
    }
    return result
}

console.log(longestString())

// 💡 Extra con reduce

const longest = str.reduce((a, b) => (a.length >= b.length ? a : b))

// Tuplas

// 1. Crea una tupla que represente las coordenadas `(x, y)` de un punto en el plano.

let coordenadas: [number, number] = [0, 0];

// 2. Define una función que reciba una tupla `[string, number]` representando el nombre de un producto 
// y su precio, y devuelva un string como `"El producto X cuesta Y"`.

let producto: [string, number] = ['Detergente', 100]

let showProduct = (tupla: [string, number]): string => `el producto ${tupla[0]} cuesta ${tupla[1]}`

console.log(showProduct(producto))

// 💡 Extra usar destructuring para que sea más legible:

const show = ([nombre, precio]: [string, number]): string => `El producto ${nombre} cuesta ${precio}`

console.log(show(producto)); // "El producto Detergente cuesta 100"

// Aquí [nombre, precio] “extrae” directamente los elementos de la tupla.