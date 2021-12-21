/* 
O restaurante a quilo Bem-Bão cobra `R$12,00` por cada quilo de refeição. Escreva um algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato.
*/

const prompt = require('prompt-sync')({sigint: true});

let valorQuilo = 12.00 / 1000; // valor por quilo / quilo em gramas
let pesoPrato = Number(prompt("Peso do prato (em gramas): "));
let pesoComida = Number(prompt("Quantos gramas você vai comer? "));
let valorTotal = (pesoComida - pesoPrato) * valorQuilo;

console.log(`Valor total do prato: R$ ${valorTotal.toFixed(2)}`)