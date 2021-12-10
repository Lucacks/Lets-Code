const prompt = require("prompt-sync")({sigint: true});

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

console.log("Resultado da soma: ", valor1+valor2);
console.log("Resultado da subtração: ", valor1-valor2);
console.log("Resultado da multiplicação: ", valor1*valor2);
console.log("Resultado da divisão: ", valor1/valor2);
