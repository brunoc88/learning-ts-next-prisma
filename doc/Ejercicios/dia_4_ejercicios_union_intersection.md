# Día 4: Union, Intersection y Type Guards - Ejercicios

### 1️⃣ Union Type
Crea una función `mostrarValor` que reciba un valor de tipo `string | number | boolean` y lo imprima de la siguiente manera:
- Si es string → en mayúsculas
- Si es number → multiplicado por 2
- Si es boolean → mostrar "Verdadero" o "Falso"

---

### 2️⃣ Intersection Type
Define dos tipos:
```ts
type A = { nombre: string };
type B = { edad: number };
```
Luego crea un objeto `persona` que combine ambos tipos usando **intersection** y asígnele un valor.

---

### 3️⃣ Type Guards con `typeof`
Crea una función `procesarValor` que reciba `string | number` y use un **type guard** para imprimir:
- String → longitud del texto
- Number → al cuadrado

---

### 4️⃣ Type Guards con `instanceof`
Define dos clases `Perro` y `Gato`, cada una con un método (`ladrar()` y `maullar()` respectivamente). Luego crea una función `hacerSonido(animal)` que use `instanceof` para llamar al método correcto.

---

### 5️⃣ Extra
Crea un array de `string | number` y recórrelo. Dentro del `for`, usa un type guard para imprimir de forma diferente los strings y números.

