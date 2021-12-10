/* 
Faça um programa que, dadas dois vetores de mesmo tamanho, crie um novo vetor com cada elemento igual a soma dos elementos do vetor 1 com os do vetor 2, na mesma posição.

Exemplo:
Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]
*/

let arr1 = [1, 4, 5];
let arr2 = [2, 2, 3];
let arr3 = []

for (let index = 0; index < arr1.length; index++) {
    arr3[index] = arr1[index] + arr2[index];    
}

console.table(arr3)