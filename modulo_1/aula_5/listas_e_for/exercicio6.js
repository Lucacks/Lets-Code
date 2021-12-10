/* 
Agora usando a função max() faça um programa que imprima os três maiores números de uma lista.

Dica: Use o método próprio de listas .remove().
*/

let arr = [2, 4, 6, 1, 22, 4, 39, 44, 12, 66, 16, 48, 55, 52, 7, 19, 24]
let maiorNumero = []

for (let index = 0; index < 3; index++) {
    maiorNumero[index] = arr.reduce(function(a, b){
        return Math.max(a, b);
    });
    arr.splice(arr.indexOf(arr.reduce(function(a, b){
        return Math.max(a, b);
    })), 1)
}
console.log("Maiores números:", maiorNumero)