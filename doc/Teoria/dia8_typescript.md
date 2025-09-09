# Día 8: Configuración avanzada de tsconfig y buenas prácticas

## Teoría

### Opciones importantes del tsconfig.json
- **target**: Define la versión de JavaScript que se generará. Ej: `ES5`, `ES6`, `ESNext`.
- **module**: Especifica el sistema de módulos (`CommonJS`, `ESNext`).
- **strict**: Activa todas las comprobaciones estrictas de TypeScript.
- **noImplicitAny**: Evita que TypeScript infiera `any` implícitamente.
- **strictNullChecks**: Obliga a manejar `null` y `undefined` explícitamente.
- **baseUrl** y **paths**: Permiten configurar rutas relativas y alias de módulos.
- **outDir**: Carpeta donde se generarán los archivos compilados.
- **rootDir**: Carpeta raíz de tus archivos TypeScript.
- **esModuleInterop**: Facilita la interoperabilidad entre CommonJS y ES Modules.

### Buenas prácticas para organizar tipos
- Evitar `any`, usar tipos específicos o genéricos.
- Centralizar los tipos comunes en carpetas como `types/` o `interfaces/`.
- Usar `type` para uniones y alias complejos, `interface` para objetos que se extienden.
- Mantener los tipos bien nombrados y coherentes.
- Evitar la duplicación de tipos en diferentes archivos.

### Configuración de paths y alias
- Permite importar módulos sin rutas relativas complicadas.
- Ejemplo:
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```
- Ahora puedes importar:
```ts
import Button from '@components/Button';
import { formatDate } from '@utils/date';
```
- Facilita refactor y mantiene rutas limpias.

