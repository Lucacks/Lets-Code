/* 
Faça um programa que peça para o usuário digitar um número n e imprima uma lista com todos os números de 0 a n-1.

Exemplo: se o usuário digitar 5, o programa deve imprimir [0, 1, 2, 3, 4]
*/

const prompt = require("prompt-sync")({sigint: true});
let inputUsuario = parseInt(prompt("Digite a quantidade de termos: "))
let arr = []

for (let index = 0; index < inputUsuario; index++) {
    arr[index] = index;
}

console.log(arr)