/* 
Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.

[1, 2, 3, 4] -> "1234"
*/

let array = [];
let count = 0;

while(count < 10){
    array[count] = Math.floor(Math.random() * (23 - 1) + 1);
    count++;
}

console.table(array.reduce(() => {}, ''))