/* Faça um programa que escreva todos os números múltiplos de 7 entre 1 e N, sendo N um valor introduzido pelo usuário. Por exemplos: 7, 14, 21, 28, 35. */

const input = require("prompt-sync")({sigint: true});
let numero = parseInt(input("Digite um número: "));

console.log("======================\nMúltiplos de 7:")
for (let index = 1; index <= numero; index++) {
    if(index % 7 === 0)
        console.log(index)    
}