// 1. Restricción con `length`
// Crea una función genérica `tieneLongitud` que solo acepte valores con la propiedad `length` 
// y devuelva un booleano indicando si `length` > 0.

let tieneLongitud = <V extends { length: number }>(valor: V): boolean => {
  return valor.length > 0
}

console.log(tieneLongitud('hola'))
console.log(tieneLongitud([1, 2, 3]))
// console.log(tieneLongitud(10))  


// 2. Combinar objetos
// Crea una función `fusionar<T, U>` que reciba dos objetos y 
// devuelva uno solo con las propiedades de ambos.

let fusionar = <T extends object, U extends object>(obj: T, obj2: U): T & U => ({ ...obj, ...obj2 })

console.log(fusionar({ id: '1' }, { name: 'Bruno' }))

// 3. Repositorio genérico

// Define una interfaz genérica Repositorio<T, ID> con métodos obtenerPorId(id: ID): T y guardar(item: T): void.
// Implementa una clase ProductoRepo que use T = { nombre: string, precio: number } e ID = string.

interface Repositorio<T, ID> {
  obtenerPorId(id: ID): T;
  guardar(item: T): void;
}

type Producto = { nombre: string; precio: number };

class ProductoRepo implements Repositorio<Producto, string> {
  private productos: Record<string, Producto> = {};

  obtenerPorId(id: string): Producto {
    return this.productos[id];
  }

  guardar(item: Producto): void {
    this.productos[item.nombre] = item;
    console.log("Guardado:", item);
  }
}

const repo = new ProductoRepo();
repo.guardar({ nombre: "Laptop", precio: 1500 });
console.log(repo.obtenerPorId("Laptop"));

// 4. Array genérico con restricción

// Crea una función ultimo<T> que devuelva el último elemento de un array.
// Asegúrate de que el array no pueda estar vacío (usa restricción).

function ultimo<T>(arr: [T, ...T[]]): T {
  return arr[arr.length - 1];
}

console.log(ultimo(['hola', 'mundo', 'dev'])); // 'dev'


// 5. Generics múltiples en funciones
// Crea una función par<K, V> que reciba dos valores de tipos distintos 
// y los devuelva como un objeto { clave: K, valor: V }.

function par<K, V>(clave: K, valor: V): { clave: K; valor: V } {
  return { clave, valor };
}

console.log(par('id', 123));          // { clave: 'id', valor: 123 }
console.log(par(1, ['a', 'b']));      // { clave: 1, valor: ['a', 'b'] }


// 6. Intersection type avanzado
// Crea una función extender<T, U> que combine dos objetos 
// y devuelva uno con todas sus propiedades, validando el tipo resultante.

// Igual que extender, combina objetos y retorna T & U
const extenderAvanzado = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};

const resultadoAvanzado = extenderAvanzado({ a: 1 }, { b: 'Hola' });
console.log(resultadoAvanzado); // { a: 1, b: 'Hola' }