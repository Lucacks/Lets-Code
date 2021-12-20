/* 
A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. Cada pãozinho custa `R$0,12` e a broa custa `R$1,50.` 
Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de poupança (10% do total arrecadado).
Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados solicitados.
*/

const prompt = require('prompt-sync')({sigint: true});

let valorPao = 0.12;
let valorBroa = 1.50;

let donoDaPadaria = new Object();

donoDaPadaria.nome = prompt("Nome do dono: ")

let totalPao = prompt("Quantidade de pães vendidos: ");
let totalBroa = prompt("Total de broas vendidas: ");

donoDaPadaria.lucroTotal = Number(
    parseFloat((valorPao * totalPao) + (valorBroa * totalBroa))
    .toFixed(2)
    );
    
donoDaPadaria.poupanca = Number(
    parseFloat(donoDaPadaria.lucroTotal * 0.1)
    .toFixed(2)
    );

console.table(donoDaPadaria);