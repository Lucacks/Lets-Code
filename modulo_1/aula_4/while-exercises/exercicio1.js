/* 
Faça um algoritmo que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0.
*/

const input = require("prompt-sync")({sigint: true});
let inputUsuario;
console.log("Digite 0 a qualquer momento para encerrar o programa")

while(inputUsuario !== 0){
    inputUsuario = parseInt(input("Digite um número: "));
    console.log("Número digitado:", inputUsuario)
}

console.log("Obrigado pelos testes. (:");