/* 
Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).
*/

const prompt = require('prompt-sync')({sigint: true});

let aluno = new Object();

aluno.nome = prompt("Nome do aluno: ");
let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));
let nota3 = Number(prompt("Nota 3: "));

let peso1 = 1, peso2 = 2, peso3 = 3;

aluno.mediaPonderada = Number(((nota1 * peso1 + nota2 * peso2 + nota3 * peso3) 
/ (peso1 + peso2 + peso3)).toFixed(2))

console.table(aluno)