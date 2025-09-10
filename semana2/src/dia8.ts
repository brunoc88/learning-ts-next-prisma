// 1. Configuración básica de tsconfig
// Crea un proyecto TypeScript y genera un `tsconfig.json`.
// Activa las opciones `strict`, `noImplicitAny` y `strictNullChecks`.
// Compila el proyecto y observa si hay errores.
/*
{
    "compilerOptions": {
      "target": "es2020",
      "module": "commonjs",
      "strict": true,
      "outDir": "./dist",
      "noImplicitAny": true,
      "strictNullChecks": true,
    }
  }
*/

// 2. Evitar el uso de `any`
// Crea una función que reciba un parámetro `user` con propiedades `nombre` y `edad`.
// Asegúrate de tipar correctamente el parámetro para no usar `any`.

const sendUser = (user: User) => user

type User = {
    nombre: string,
    edad: number
}

console.log(sendUser({nombre:'bruno', edad:37}))

// 3. Uso de paths y alias
// Configura `baseUrl` y `paths` en tu `tsconfig.json`.
// Crea una carpeta `components` y otra `utils` dentro de `src`.
// Importa un archivo desde `components` y otro desde `utils` usando alias.

/* 
{
    "compilerOptions": {
      "target": "es2020",
      "module": "commonjs",
      "strict": true,
      "outDir": "./dist",
      "noImplicitAny": true,
      "strictNullChecks": true,
      "baseUrl": "./src",
      "paths": {
        "@components/*": [
          "components/*"
        ],
        "@utils/*": [
          "utils/*"
        ]
      }
    }
  }
*/
import button from "@components/button"
import { saludo } from "@utils/saludos"

console.log(button())
console.log(saludo())

// 4. Organización de tipos
// Crea una carpeta `types` y define un `interface Product` con propiedades `id`, `name` y `price`.
// Usa ese tipo en una función que reciba un array de productos y calcule el precio total.

import { Product } from "types/producto"

let calcularTotal = (arr: Product[]) : number => {
    // let total = 0

    // arr.forEach(p => total += p.price)
    // return total
    // mas limpio
    return arr.reduce((acc, p) => acc + p.price, 0);
}

console.log(calcularTotal([{id:1,name:'arroz', price: 100},{id:2, name:'leche',price:300}]))