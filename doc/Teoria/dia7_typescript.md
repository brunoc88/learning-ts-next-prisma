# Día 7: Generics en TypeScript - Parte 2

## Generics con restricciones (`extends`)
A veces queremos limitar los tipos que pueden usarse en un genérico. Para eso usamos `extends`.

```ts
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

obtenerLongitud("Hola");     // ✅ string tiene length
obtenerLongitud([1, 2, 3]);   // ✅ array tiene length
obtenerLongitud(42);          // ❌ number no tiene length
```

### Puntos clave
- `extends` asegura que el genérico cumpla con cierta **forma o contrato**.
- Evita errores en tiempo de compilación.

---

## Generics con múltiples parámetros
Podemos definir funciones o tipos que acepten **más de un parámetro genérico**.

```ts
function combinar<K, V>(clave: K, valor: V) {
  return { clave, valor };
}

const resultado = combinar("id", 123); // { clave: string, valor: number }
```

### Ejemplo con objetos

```ts
function fusionar<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

const persona = fusionar({ nombre: "Ana" }, { edad: 25 });
// persona: { nombre: string, edad: number }
```

### Intersection types (`&`)
Cuando usamos múltiples genéricos en combinación, muchas veces el retorno es un **intersection type**, es decir, un tipo que tiene **todas las propiedades de ambos**.

---

## Generics en interfaces avanzadas

```ts
interface Repositorio<T, ID> {
  obtenerPorId(id: ID): T;
  guardar(item: T): void;
}

class UserRepo implements Repositorio<{ nombre: string }, number> {
  obtenerPorId(id: number) {
    return { nombre: "Ejemplo" };
  }
  guardar(item: { nombre: string }) {
    console.log("Guardado:", item);
  }
}
```

---

## Beneficios de usar múltiples generics y restricciones
- Flexibilidad sin perder seguridad de tipos.
- Reutilización en contextos complejos (repositorios, utilidades).
- Control total sobre qué tipos son válidos y cómo se combinan.

---

## Resumen
- `extends` restringe qué tipos puede aceptar un genérico.
- Se pueden usar múltiples parámetros genéricos (`<T, U, V>`).
- Intersection types (`&`) permiten combinar tipos en el resultado.
- Interfaces y clases también pueden aprovechar múltiples generics.
