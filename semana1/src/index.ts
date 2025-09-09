// src/index.ts

// Tipos primitivos
let nombre: string = "Bruno";
let edad: number = 37;
let programador: boolean = true;
let nada: null = null;
let indefinido: undefined = undefined;

// Función con tipos
function saludar(persona: string, edad: number): string {
  return `Hola, me llamo ${persona} y tengo ${edad} años.`;
}

console.log(saludar(nombre, edad));
