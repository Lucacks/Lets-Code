/* 
Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este tipo de conversão).
*/

const prompt = require('prompt-sync')({sigint: true});

let temperatura = Number(parseFloat(prompt('Digite a temperatura em °C: ')));

console.log(`Temperatura em Fahrenheit: ${(temperatura * 1.8 + 32).toFixed(1)}`);