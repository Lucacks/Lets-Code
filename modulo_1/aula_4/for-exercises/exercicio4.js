/* Faça a multiplicação entre dois números usando somente soma. */

const input = require("prompt-sync")({sigint: true});

let valor1 = parseInt(input("Digite o valor: "));
let valor2 = parseInt(input("Digite o fator: "));
let resultado = 0;

for (let index = 0; index < valor2; index++) {
    resultado += valor1;
}

console.log("Valor da multiplicação (em soma):", resultado);