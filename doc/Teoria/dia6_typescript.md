# Día 6: Generics en TypeScript - Parte 1

## Introducción a Generics
Los **generics** en TypeScript nos permiten crear **funciones, tipos e interfaces** que funcionan con múltiples tipos de datos, manteniendo la seguridad de tipos y evitando la duplicación de código.

### ¿Por qué generics?
Cuando escribimos funciones o tipos, a veces queremos que sean **reutilizables** y no dependan de un tipo específico. En vez de usar `any` (que pierde seguridad de tipos), podemos usar **parámetros genéricos**.

### Sintaxis básica
Un genérico se define usando **`<T>`**, donde `T` es un parámetro de tipo:

```ts
function identidad<T>(valor: T): T {
  return valor;
}
```

- `T` es un **placeholder** para un tipo que se pasará al usar la función.
- Al llamar a la función, TypeScript infiere el tipo:

```ts
const numero = identidad(42);        // T es number
const texto = identidad("hola");   // T es string
```

### Generics en funciones
Podemos usar más de un parámetro genérico:

```ts
function par<K, V>(clave: K, valor: V) {
  return { clave, valor };
}

const resultado = par("id", 123); // { clave: string, valor: number }
```

### Generics en tipos e interfaces
También se aplican a interfaces y type aliases:

```ts
interface Caja<T> {
  contenido: T;
}

const cajaNumero: Caja<number> = { contenido: 100 };
const cajaTexto: Caja<string> = { contenido: "Hola" };
```

### Constraining (restringiendo) generics
Podemos restringir el tipo que se acepta con `extends`:

```ts
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

obtenerLongitud("Hola");    // ✅ string tiene length
obtenerLongitud([1,2,3]);    // ✅ array tiene length
obtenerLongitud(42);         // ❌ number no tiene length
```

### Beneficios
- **Reutilización de código**.
- **Seguridad de tipos** sin usar `any`.
- **Mayor legibilidad y escalabilidad**.

---

## Resumen
- Los generics permiten trabajar con múltiples tipos de datos de forma segura.
- Se definen con `<>` y parámetros como `<T>`, `<K, V>`.
- Se usan en **funciones, interfaces y tipos**.
- Pueden **restringirse** con `extends` para controlar qué tipos son válidos.
