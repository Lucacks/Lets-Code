/* Faça um programa para perguntar 10 números e informar a soma total destes números. */
const input = require("prompt-sync")({sigint: true});
let numero; 
let total = 0;

for (let index = 0; index < 10; index++) {
    numero = parseInt(input("Digite um número: "));
    total += numero;    
}

console.log("A soma total é", total);