/* 
Faça um programa que pede para o usuário digitar 5 números e, ao final, imprime um vetor com os 5 números digitados pelo usuário (sem converter os números para o tipo number).

Exemplo: Se o usuário digitar 1, 5, 2, 3, 6, o programa deve imprimir o vetor ['1','5','2','3','6']
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = []

for (let index = 0; index < 5; index++) {
    let inputUsuario = prompt("Digite um número:")
    arr.push(inputUsuario)    
}

console.log(arr)


