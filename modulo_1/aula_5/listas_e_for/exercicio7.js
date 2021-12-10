/* 
Faça um programa que, dadas duas listas de mesmo tamanho, crie uma nova lista com cada elemento igual a soma dos elementos da lista 1 com os da lista 2, na mesma posição.

Exemplo:
Dadas lista1 = [1, 4, 5] e lista2 = [2, 2, 3], então lista3 = [1+2, 4+2, 5+3] = [3, 6, 8]
*/

let arr1 = [1, 4, 5];
let arr2 = [2, 2, 3];
let arr3 = []

for (let index = 0; index < arr1.length; index++) {
    arr3[index] = arr1[index] + arr2[index];    
}

console.table(arr3)

