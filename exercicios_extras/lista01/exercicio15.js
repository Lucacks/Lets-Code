/* 
Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. Ex: uma conta de `R$101,53` resulta em `R$33,00` para Carlos, `R$33,00` para André e `R$35,53` para Felipe.
*/

const prompt = require('prompt-sync')({sigint: true});

let totalConta = Number(parseFloat(prompt("Valor total da conta: ")));

const amigos = [
    {
        name: "Carlos",
        totalAPagar: Number(Math.trunc(totalConta / 3).toFixed(2))
    },
    {
        name: "André",
        totalAPagar: Number(Math.trunc(totalConta / 3).toFixed(2))
    },
    {
        name: "Felipe",
        totalAPagar: Number((totalConta / 3).toFixed(2))
    }
];

console.table(amigos)