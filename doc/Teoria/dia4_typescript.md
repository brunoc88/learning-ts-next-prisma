# Día 4: Union, Intersection y Type Guards - Teoría

## 1️⃣ Union Types (`|`)
Permite que una variable pueda tener **más de un tipo**.

```ts
let valor: string | number;
valor = 'hola'; // válido
valor = 10;     // válido
// valor = true; // ❌ inválido
```

Funciona muy bien en funciones:
```ts
function imprimir(x: string | number) {
  console.log(x);
}
```

---

## 2️⃣ Intersection Types (`&`)
Permite **combinar tipos**, obligando a cumplir **todas las propiedades** de los tipos combinados.

```ts
type A = { nombre: string };
type B = { edad: number };
type Persona = A & B;

const persona: Persona = {
  nombre: 'Juan',
  edad: 30
};
```

---

## 3️⃣ Type Guards
Son **verificaciones en tiempo de ejecución** para que TypeScript pueda inferir correctamente el tipo.

```ts
function procesar(valor: string | number) {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase());
  } else {
    console.log(valor * 2);
  }
}
```

Otros ejemplos:
- `Array.isArray(x)` → para arrays
- `instanceof` → para clases

```ts
class Perro { ladrar() {} }
class Gato { maullar() {} }

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    animal.ladrar();
  } else {
    animal.maullar();
  }
}
```

