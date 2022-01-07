/* 
Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa.
*/

const prompt = require('prompt-sync')({sigint: true});

const blusas = Number(prompt('Quantidade de blusas confeccionadas: '))
const novelosBlusa = 4

console.log(`Quantidade de novelos necessários: ${blusas * novelosBlusa}`)