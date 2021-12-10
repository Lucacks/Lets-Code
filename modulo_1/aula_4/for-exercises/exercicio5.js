/* 
Faça um programa, usando loops, que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0. 
Ao final imprima a soma de todos os números digitados 
*/

const input = require("prompt-sync")({sigint: true});
let inputUsuario, somaDosNumeros = 0;
console.log("Digite 0 a qualquer momento para encerrar o programa")

while(inputUsuario !== 0){
    inputUsuario = parseInt(input("Digite um número: "));
    somaDosNumeros += inputUsuario;
}

console.log("Soma dos valores que você digitou:", somaDosNumeros);