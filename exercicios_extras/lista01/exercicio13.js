/* 
Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
```
CENTENA = x
DEZENA = x
UNIDADE = x
```
*/

const prompt = require('prompt-sync')({sigint: true});
let numeroInteiro;
let numSeparados;

do {
    numeroInteiro = prompt("Digite o número inteiro com três dígitos: ")
    numSeparados = numeroInteiro.split("")
} while (numSeparados.length !== 3);

for (let index = 0; index < numSeparados.length; index++) {


console.log(numSeparados)