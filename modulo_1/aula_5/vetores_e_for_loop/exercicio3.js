/* Faça um programa que olhe todos os itens de um vetor e diga quantos deles são pares. */

let arr = []
let contador = 0

for (let index = 0; index < 144; index++) {
    arr[index] = index + 1
    if(arr[index] % 2 === 0){
        contador++;
    }
}

console.log("A quantide de números pares são", contador, "números")