/* 
Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário.
*/

const prompt = require('prompt-sync')({sigint: true});

const tabuada = parseInt(prompt('Tabuada do número: '));
let aux = 0;

while (aux <= 10){
    console.log(`${tabuada} x ${aux} = ${tabuada * aux}`)
    aux++;
}