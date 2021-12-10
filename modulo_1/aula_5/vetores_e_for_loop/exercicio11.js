/* 
Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

a. o maior número sorteado;
b. o menor número sorteado;
c. a média dos números sorteados;
d. a soma dos números sorteados.
*/

let arr = []
let maiorNumero = 0, menorNumero;

for (let index = 0; index < 10; index++) {
    arr[index] = Math.floor(Math.random() * 100) + 1;
    if(arr[index] > maiorNumero){
        maiorNumero = arr[index]
    }    
}

let somarNumeros = arr.reduce((somarNumeros, index) => (somarNumeros + index));
let mediaNumeros = Math.round(arr.reduce((mediaNumeros, index) => (mediaNumeros + index)) / arr.length)

console.table(arr)

console.log(`
Maior número: ${maiorNumero}
Menor número: ${menorNumero}
Soma dos números: ${somarNumeros}
Média dos números: ${mediaNumeros}
`)