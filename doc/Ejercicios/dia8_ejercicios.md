# Día 8: Ejercicios de tsconfig y buenas prácticas

## Ejercicios

### 1. Configuración básica de tsconfig
- Crea un proyecto TypeScript y genera un `tsconfig.json`.
- Activa las opciones `strict`, `noImplicitAny` y `strictNullChecks`.
- Compila el proyecto y observa si hay errores.

### 2. Evitar el uso de `any`
- Crea una función que reciba un parámetro `user` con propiedades `nombre` y `edad`.
- Asegúrate de tipar correctamente el parámetro para no usar `any`.

### 3. Uso de paths y alias
- Configura `baseUrl` y `paths` en tu `tsconfig.json`.
- Crea una carpeta `components` y otra `utils` dentro de `src`.
- Importa un archivo desde `components` y otro desde `utils` usando alias.

### 4. Organización de tipos
- Crea una carpeta `types` y define un `interface Product` con propiedades `id`, `name` y `price`.
- Usa ese tipo en una función que reciba un array de productos y calcule el precio total.

### 5. Buenas prácticas
- Refactoriza tu proyecto para que todos los tipos estén centralizados en `types/`.
- Revisa que no haya variables con tipo `any` y corrige donde sea necesario.

