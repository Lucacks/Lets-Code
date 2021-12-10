/* 
Faça um programa que imprima o maior número de um vetor.
*/

const arr = [1, 2, 3, 16, 22, 10, 5, 8]
let maiorNumero = 0;

// Opção 1:
for (let index = 0; index < arr.length; index++) {
    if(arr[index] > maiorNumero)
        maiorNumero = arr[index]    
}

console.log(maiorNumero)

/* 
// Opção 2:
console.log(Math.max.apply(null, arr))
 */