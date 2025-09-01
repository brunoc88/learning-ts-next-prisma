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

// Objetos

// 1. Crea un objeto que represente a un **libro** con propiedades `titulo`, `autor`, `anio`.

let libro: {
    titulo: string,
    autor: string,
    anio: number
} = {
    titulo: 'divina comedia',
    autor: 'dante',
    anio: 1800
}


// 2. Escribe una función que reciba ese objeto
// y devuelva un string con formato: `"El libro {titulo} fue escrito por {autor} en {anio}"`.

const showBook = ({ titulo, autor, anio }: { titulo: string; autor: string; anio: number }): string =>
    `El libro ${titulo} fue escrito por ${autor} en ${anio}`;

console.log(showBook(libro));

// Type Aliases

// 1. Define un `type` llamado `Persona` con propiedades `nombre`, `edad` y `email`.

type Persona = {
    nombre: string,
    edad: number,
    email: string
}

// 2. Crea un array de `Persona[]` con al menos 3 personas.

let p1: Persona = { nombre: 'bruno', edad: 37, email: 'bruno88@gmail.com' }
let p2: Persona = { nombre: 'mario', edad: 60, email: 'marioBros@gmail.com' }
let p3: Persona = { nombre: 'jill', edad: 50, email: 'jillvalentine@gmail.com' }

let personas: Persona[] = [p1, p2, p3]

// 3. Escribe una función que reciba el array y devuelva la persona más joven.

const youngest = (arr: Persona[]): Persona => arr.reduce((a, b) => a.edad < b.edad ? a : b)

console.log(youngest(personas))

// 💡 Extra con sort

const youngestAlt = (arr: Persona[]): Persona =>
    [...arr].sort((a, b) => a.edad - b.edad)[0]; // <--- [0] tomo el primer elemento del array ya ordenado, que va a ser la persona más joven.

