/* Faça um algoritmo para calcular a média final da disciplina de Programação, mostrar essa média final e também uma mensagem informando se o aluno foi aprovado (média >= 7) ou reprovado. Considere duas avaliações. */

const input = require("prompt-sync")({sigint: true});

let nota1 = parseFloat(input("Digite a nota da primeira atividade:"));
let nota2 = parseFloat(input("Digite a nota da segunda atividade:"));
let nota3 = parseFloat(input("Digite a nota da terceira atividade:"));
let notaFinal = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if(notaFinal >= 7)
    console.log("Aprovado com nota", notaFinal)
else
    console.log("Reprovado com nota", notaFinal)
