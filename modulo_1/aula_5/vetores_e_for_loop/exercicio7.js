/* 
Pegue o vetor gerado no exercício anterior (exercício 5) e transforme cada um dos itens desse vetor em um number.

OBS: Não é para alterar o programa anterior, mas sim o vetor gerado por ele.
*/

const prompt = require("prompt-sync")({sigint: true});

let arr = []

for (let index = 0; index < 5; index++) {
    let inputUsuario = parseInt(prompt("Digite um número:"))
    arr.push(inputUsuario)    
}

console.log(arr)