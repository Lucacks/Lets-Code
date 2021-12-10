/* 2. Faça um algoritmo que mostre a tabuada de qualquer número escolhido pelo usuário (considerar tabuada do número 1 ao 10). */

const input = require("prompt-sync")({sigint: true})

let numero = parseInt(input("Escolha o número para saber a tabuada dele: "));
let count = 1;

while(count <= 10){
    console.log(numero, "x", count,"=", count * numero);
    count++;
}