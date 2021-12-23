/* 
Calcule a área de uma pizza que possui um raio `R` (OBS = **pi=3.14**)
*/

const prompt = require('prompt-sync')({sigint: true});

let raio = Number(parseFloat(prompt("Qual o raio da pizza? ")));

console.log(`A área da pizza é de ${3.14 * Math.pow(raio, 2)}`);