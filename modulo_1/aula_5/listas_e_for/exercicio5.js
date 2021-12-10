/* 
Faça um programa que imprima o maior número de uma lista, sem usar a função max().
*/

let arr = [2, 4, 6, 1, 22, 4, 39, 44, 12, 66, 16, 48, 55, 52, 7, 19, 24]
let maiorNumero = 0;

for (let index = 0; index < 10; index++) {
    if(arr[index] > maiorNumero){
        maiorNumero = arr[index]
    }    
}

console.log("Maior número:", maiorNumero)