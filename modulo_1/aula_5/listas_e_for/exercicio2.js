/* 
Faça um programa que imprima todos os itens de uma lista usando while e compare com o exercício 1.
*/

const lista = ["ABC", "is better than", 1, 2, 3, true, null, 4, 5, 6, NaN];
let contador = 0;

while(contador < lista.length){
    console.log(lista[contador])
    contador++;
}