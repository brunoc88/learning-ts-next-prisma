# Generics en TypeScript: ¿Cuándo se define el tipo?

## 1. Sin generics (tipo fijo)
Cuando no usamos generics, el tipo queda definido en la función misma:

```ts
function identidadString(valor: string): string {
  return valor;
}

function identidadNumero(valor: number): number {
  return valor;
}
```

- Aquí cada función sirve **solo para un tipo**.
- Si queremos aceptar otro tipo, debemos duplicar la lógica.

---

## 2. Con `any` (sin seguridad de tipos)
Podemos usar `any` para aceptar cualquier cosa:

```ts
function identidad(valor: any): any {
  return valor;
}
```

Problema: perdemos la seguridad de tipos.

```ts
const resultado = identidad(10);
resultado.toUpperCase(); // 💥 Error en runtime (porque 10 no es string)
```

---

## 3. Con Generics (tipo flexible y seguro)
Usamos un **parámetro de tipo** `<T>`:

```ts
function identidad<T>(valor: T): T {
  return valor;
}
```

### Inferencia automática
El tipo se **decide en el momento de la llamada**, según el argumento que pasemos:

```ts
const numero = identidad(42);       // T = number
const texto = identidad("hola");    // T = string
```

### Especificar explícitamente
También podemos forzar el tipo manualmente:

```ts
const nombre = identidad<string>("Bruno");
```

---

# 📊 Esquema visual

```plaintext
┌───────────────────────────┐
│   Función SIN generics    │
└───────────────────────────┘
        valor: string ────────▶ Solo sirve para strings
        valor: number ────────▶ Solo sirve para números


┌───────────────────────────┐
│   Función con ANY         │
└───────────────────────────┘
        valor: any ──────────▶ Sirve para todo,
                                pero se pierde seguridad de tipos


┌───────────────────────────┐
│   Función con GENERIC <T> │
└───────────────────────────┘
        valor: T ───────────▶ El tipo se **inyecta**
                               al momento de la llamada

Ejemplo:
identidad(42)   → T = number
identidad("hola") → T = string
```
