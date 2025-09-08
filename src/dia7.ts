// 1. Restricción con `length`
// Crea una función genérica `tieneLongitud` que solo acepte valores con la propiedad `length` 
// y devuelva un booleano indicando si `length` > 0.

let tieneLongitud = <V extends { length: number }>(valor: V): boolean => {
  return valor.length > 0
}

console.log(tieneLongitud('hola'))     
console.log(tieneLongitud([1,2,3]))    
// console.log(tieneLongitud(10))  


// 2. Combinar objetos
// Crea una función `fusionar<T, U>` que reciba dos objetos y 
// devuelva uno solo con las propiedades de ambos.

let fusionar = <T, U> (item:T, item2:U) : T & U => ({...item, ...item2})
console.log(fusionar({id:'1'},{name:'Bruno'}))
