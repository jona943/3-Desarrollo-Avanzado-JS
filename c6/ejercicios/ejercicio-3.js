// =====================================================================
// EJERCICIO 3 — Leer un archivo
// Lee el archivo `frases.txt` (ya está en la carpeta /ejercicios) y
// cuenta cuántas líneas tiene. Imprime el resultado.
//
// Pista: usa fs.readFileSync(ruta, 'utf8') y luego split('\n').length.
// =====================================================================

const fs = require('fs');
const contenido = fs.readFileSync('./frases.txt', 'utf8');

const lineas = contenido.split('\n');
const numeroDeLineas = lineas.length;

console.log(`El archivo tiene ${numeroDeLineas} líneas.`);