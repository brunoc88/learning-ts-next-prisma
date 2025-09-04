// 1. Union Types

/*
Crea una función `mostrarValor` que reciba un valor de tipo `string | number | boolean` y lo imprima de la siguiente manera:
- Si es string → en mayúsculas
- Si es number → multiplicado por 2
- Si es boolean → mostrar "Verdadero" o "Falso"
*/

function mostrarValor(value: string | number | boolean) {
    if (typeof value === 'string') return value.toUpperCase()
    if (typeof value === 'number') return value * 2
    if (typeof value === 'boolean') return value ? "Verdadero" : "Falso"
}


console.log(mostrarValor('hola mundo'))
console.log(mostrarValor(2))
console.log(mostrarValor(true))

// 2. Intersection Type

/*
Define dos tipos:
```ts
type A = { nombre: string };
type B = { edad: number };
```
Luego crea un objeto `persona` que combine ambos tipos usando **intersection** y asígnele un valor.
*/

type A = { nombre: string };
type B = { edad: number };

type Personax = A & B

let pe: Personax = {
    nombre: 'bruno',
    edad: 37
}

console.log(pe)

// 3. Type Guards con `typeof`

/*
Crea una función `procesarValor` que reciba `string | number` y use un **type guard** para imprimir:
- String → longitud del texto
- Number → al cuadrado
*/

const procesarValor = (value: string | number) => {
    if (typeof value === 'string') console.log(`Longitud de "${value}" : ${value.length}`)
    if (typeof value === 'number') console.log(`El cuadrado de ${value} es ${value * value}`)
}


procesarValor('Hola mundo')
procesarValor(2)

// 4. Type Guards con `instanceof`

/*
    Define dos clases `Perro` y `Gato`, cada una con un método (`ladrar()` y `maullar()` 
    respectivamente). Luego crea una función `hacerSonido(animal)` que use `instanceof` para 
    llamar al método correcto.
*/


class Perro { 
    ladrar() { console.log("¡Guau guau!") } 
}

class Gato { 
    maullar() { console.log("¡Miau miau!") } 
}

let hacerSonido = (animal: Perro | Gato) => {
    if (animal instanceof Perro) {
        animal.ladrar()
    } else {
        animal.maullar()
    }
}


let perro = new Perro()
let gato = new Gato()

hacerSonido(perro)
hacerSonido(gato)

// 5. Extra

/**
Crea un array de `string | number` y recórrelo. Dentro del `for`, usa un type guard para imprimir 
de forma diferente los strings y números.
*/

let recorrer = (arr: Array<string | number>) => {
    for (let value of arr) {
        if (typeof value === 'string') {
            console.log(`Texto: ${value}`)
        } else {
            console.log(`Número: ${value}`)
        }
    }
}

recorrer(['hola mundo', 'dev'])
recorrer([1, 2, 3])