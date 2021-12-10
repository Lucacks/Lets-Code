/* 
Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.
*/

let array = [];
let count = 0;

while(count < 10){
    array[count] = Math.floor(Math.random() * (23 - 1) + 1);
    count++;
}

const numerosPares = array.filter(pares => pares % 2 ===0).map(Number);

console.log(array);
console.table(numerosPares);