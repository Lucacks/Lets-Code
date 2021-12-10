/* 
const arr = [10,20,30,40,50];

for(index in arr){
    console.log(index, arr[index]);
}

for (value of arr) {
    console.log(value)
}

 */


/* 

Crie um código que leia 10 valores inteiros e:
• Encontre e mostre o maior valor
• Encontre e mostre o menor valor
• Calcule e mostre a média dos números lidos */

const input = require("prompt-sync")({sigint: true});
let arr = [10]

for (let index = 0; index < 10; index++) {    
    arr[index] = parseInt(input("Digite um número: "))
}

