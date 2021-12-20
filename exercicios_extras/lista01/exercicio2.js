/* 
Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras.
*/

const prompt = require('prompt-sync')({sigint: true});

let horseQuantity = prompt("Quantos cavalos são? ")

console.log(`A quantidade de ferraduras necessárias é ${horseQuantity * 4}`)