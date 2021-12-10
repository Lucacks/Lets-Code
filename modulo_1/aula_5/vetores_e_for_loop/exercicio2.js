/* Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando vetores. */

const prompt = require("prompt-sync")({sigint: true});
let arr = []

for (let index = 0; index < 4; index++) {
    arr[index] = parseFloat(prompt("Digite a nota:"))    
}

let total = arr.reduce((total, index) => (total + index)) / 4
console.log(total)