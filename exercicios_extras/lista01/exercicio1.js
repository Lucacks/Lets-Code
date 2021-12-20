/* 
A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.
*/

const prompt = require('prompt-sync')({sigint: true});

let width = prompt("Largura do terreno: ");
let height = prompt("Altura do terreno: ");
console.log(`Área do terreno: ${width * height}m²`)
