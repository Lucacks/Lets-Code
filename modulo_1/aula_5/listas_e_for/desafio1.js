/* 
Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno e o número de provas que esse aluno fez. Depois, o programa deve pedir para o usuário digitar as notas de cada prova do aluno. Ao final o programa deve imprimir uma lista contendo:

a. Nome do aluno na posição 0;
b. Idade do aluno na posição 1;
c. Uma lista com todas as notas na posição 2;
d. A média do aluno na posição 3;
e. True ou False, caso a média seja maior que 5 ou não, na posição 4.
Dica: Use o que você fez nos exercícios anteriores para criar esse programa.
*/

const prompt = require("prompt-sync")({sigint: true});

let nomeAluno = prompt("Digite o nome do aluno: ");
let idadeAluno = parseInt(prompt("Digite a idade do aluno: "));
let quantidadeProvas = parseInt(prompt("Quantidade de provas realizadas pelo aluno: "));
let notasProvas = [];

for (let index = 0; index < quantidadeProvas; index++) {
    notasProvas[index] = parseFloat(prompt(`Digite a ${index+1}ª nota do aluno: `));
}

let mediaProvas = Math.round(notasProvas.reduce((mediaProvas, index) => (mediaProvas + index)) / quantidadeProvas)
let imprimeDados = [nomeAluno, idadeAluno, notasProvas, mediaProvas, true];

if(mediaProvas > 5){
    console.log(`
    Nome do aluno: ${imprimeDados[0]}
    Idade: ${imprimeDados[1]}
    Notas das provas: ${imprimeDados[2]}
    Média das provas: ${imprimeDados[3]}
    Passou? ${imprimeDados[4]}
    `)
}else{
    imprimeDados[4] = false
    console.log(`
    Nome do aluno: ${imprimeDados[0]}
    Idade: ${imprimeDados[1]}
    Notas das provas: ${imprimeDados[2]}
    Média das provas: ${imprimeDados[3]}
    Passou? ${imprimeDados[4]}
    `)
}