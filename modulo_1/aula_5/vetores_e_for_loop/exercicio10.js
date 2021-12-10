/* 
Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.
*/

let arr = []
let contador = 0;

for (let index = 0; index < 10; index++) {
    arr[index] = Math.floor(Math.random() * 100) + 1;
    if(arr[index] % 2 === 0)
        contador++
}

console.log("Quantidade de números pares:", contador)
console.table(arr)

/* 
Última tabela impressa:
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   83   │
│    1    │   19   │
│    2    │   9    │
│    3    │   60   │
│    4    │   1    │ <<<
│    5    │   85   │
│    6    │   23   │
│    7    │   14   │
│    8    │  100   │ <<<
│    9    │   84   │
└─────────┴────────┘
*/