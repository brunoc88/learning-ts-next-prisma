# Día 2: Tipos complejos y estructuras en TypeScript

## 1. Arrays
En TypeScript, los arrays se pueden tipar de dos formas equivalentes:

```ts
let numeros: number[] = [1, 2, 3];
let palabras: Array<string> = ["hola", "mundo"];
```

### Arrays de objetos
```ts
type Usuario = {
  id: number;
  nombre: string;
};

let usuarios: Usuario[] = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Bruno" }
];
```

---

## 2. Tuplas
Una **tupla** es un array con un número fijo de elementos y tipos definidos.

```ts
let persona: [string, number] = ["Juan", 30];
```

- A diferencia de un array normal, la tupla espera un orden y tipo exactos.  
- Ejemplo útil: representar pares clave-valor, coordenadas, etc.

---

## 3. Objetos
Podemos definir tipos de objetos directamente:

```ts
let producto: {
  id: number;
  nombre: string;
  precio: number;
} = {
  id: 1,
  nombre: "Teclado",
  precio: 100
};
```

---

## 4. Type Aliases (`type`)
Permite crear un alias de un tipo complejo:

```ts
type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

let p: Producto = { id: 1, nombre: "Mouse", precio: 50 };
```

---

## 5. Interfaces (`interface`)
Las interfaces permiten describir la forma de un objeto:

```ts
interface Usuario {
  id: number;
  nombre: string;
}

let u: Usuario = { id: 1, nombre: "Ana" };
```

### Diferencia con `type`
- `interface` es más extensible (puede **extenderse o fusionarse**).  
- `type` es más flexible (sirve para **uniones**, tipos primitivos, etc.).  

Ejemplo de extensión:

```ts
interface Admin extends Usuario {
  permisos: string[];
}
```

---

## 6. Estructuras anidadas
Ejemplo de objetos con arrays y otros objetos dentro:

```ts
interface Curso {
  id: number;
  nombre: string;
  estudiantes: Usuario[];
}

let curso: Curso = {
  id: 101,
  nombre: "TypeScript Básico",
  estudiantes: [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Bruno" }
  ]
};
```

---

✅ Con esto ya puedes modelar datos más realistas en TS con arrays, tuplas, objetos e interfaces.
