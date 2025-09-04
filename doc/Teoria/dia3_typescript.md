# Día 3: Funciones avanzadas y parámetros opcionales

### 📌 Teoría Día 3 – Funciones en TypeScript

#### 1. Tipos en funciones
En TS siempre conviene tipar:

- Los parámetros

 -El valor de retorno (aunque a veces lo infiere)

```ts
function sumar(a: number, b: number): number {
  return a + b
}

👉 Si no devolvés nada, el tipo de retorno es void.

function logMessage(msg: string): void {
  console.log(msg)
}
```

#### 2. Parámetros opcionales

Un parámetro se vuelve opcional con ?.

```ts
function saludar(nombre?: string): string {
  return nombre ? `Hola, ${nombre}` : "Hola, invitado"
}
```

#### 3. Valores por defecto

Si no pasás el parámetro, usa el valor por defecto.

```ts
function saludarConDefault(nombre: string = "invitado"): string {
  return `Hola, ${nombre}`
}
```

#### 4. Funciones flecha con tipado

Las arrow functions también se tipan:

```ts
const multiplicar = (a: number, b: number): number => a * b
```

#### 5. Funciones que retornan union types

Una función puede devolver distintos tipos:

```ts
function parsearInput(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase()
  }
  return valor * 2
}
```



