```js
{
  // Archivos o carpetas que nodemon debe "vigilar" para reiniciar la app al detectar cambios
  "watch": ["src"],

  // Extensiones de archivo que debe observar (en este caso, .ts)
  "ext": "ts",

  // Archivos o carpetas que nodemon debe ignorar (vacío = no ignora nada)
  "ignore": [""],

  // Comando que se ejecuta cada vez que hay un cambio
  // Aquí se usa ts-node para ejecutar directamente el archivo TypeScript principal
  "exec": "ts-node src/app.ts"
}

```