# Día 7: Ejercicios sobre Generics en TypeScript - Parte 2

## Ejercicios

### 1. Restricción con `length`
Crea una función genérica `tieneLongitud` que solo acepte valores con la propiedad `length` y devuelva un booleano indicando si `length` > 0.

### 2. Combinar objetos
Crea una función `fusionar<T, U>` que reciba dos objetos y devuelva uno solo con las propiedades de ambos.

### 3. Repositorio genérico
Define una interfaz genérica `Repositorio<T, ID>` con métodos `obtenerPorId(id: ID): T` y `guardar(item: T): void`.  
Implementa una clase `ProductoRepo` que use `T = { nombre: string, precio: number }` e `ID = string`.

### 4. Array genérico con restricción
Crea una función `ultimo<T>` que devuelva el último elemento de un array.  
Asegúrate de que el array no pueda estar vacío (usa restricción).

### 5. Generics múltiples en funciones
Crea una función `par<K, V>` que reciba dos valores de tipos distintos y los devuelva como un objeto `{ clave: K, valor: V }`.

### 6. Intersection type avanzado
Crea una función `extender<T, U>` que combine dos objetos y devuelva uno con todas sus propiedades, validando el tipo resultante.

---
⚡ *Recuerda: no usar `any`, usa generics con restricciones.*
