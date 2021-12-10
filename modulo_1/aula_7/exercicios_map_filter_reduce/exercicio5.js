/* 
Dado um array numérico x, crie um novo array com os elementos do array x que são maiores do que 5.
*/

let arr = [];
let count = 0;

while(count < 10){
    arr[count] = Math.floor(Math.random() * (10 - 1) + 1);
    count++;
}

const maiorQueCinco = arr.filter(number => number > 5).map(Number)

console.log(arr);
console.table(maiorQueCinco);