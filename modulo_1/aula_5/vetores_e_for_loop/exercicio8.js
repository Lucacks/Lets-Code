/* 
Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.

OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 pelo número na posição i do vetor2.
*/

let arr1 = [2, 3, 4, 5];
let arr2 = [6, 2, 1, 4];
let produtoEscalar = 0;

for (let index = 0; index < arr1.length; index++) {
    produtoEscalar += arr1[index] * arr2[index];    
}

console.log("O valor do produto escalar é:", produtoEscalar)