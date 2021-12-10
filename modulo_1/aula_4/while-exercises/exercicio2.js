/* 
Peça ao usuário para digitar um número n e some todos os números de 1 a n.
*/

const input = require("prompt-sync")({sigint: true});
let inputUsuario = parseInt(input("Digite um número: "));
let printInput = inputUsuario
let totalSoma = 0;

while(inputUsuario !== 0){
    totalSoma += inputUsuario
    inputUsuario--;
}

console.log("A soma de 1 a", printInput, "é:", totalSoma)