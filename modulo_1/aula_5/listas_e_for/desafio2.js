/* 
Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar a maior e menor nota do aluno (nesse caso o número de provas precisa ser obrigatoriamente maior que dois).

Dica: crie uma cópia com a lista de todas as notas antes de fazer a média.
*/

const prompt = require("prompt-sync")({sigint: true});

/* Inicialização das variáveis */
let nomeAluno = prompt("Digite o nome do aluno: ");
let idadeAluno = parseInt(prompt("Digite a idade do aluno: "));

/* Obriga o usuário a digitar pelo menos duas notas */
let quantidadeProvas;
do {
    quantidadeProvas = parseInt(prompt("Quantidade de provas realizadas pelo aluno (mínimo 2): "));    
} while (quantidadeProvas < 2);

/* Input das notas das provas */
let notasProvas = [];
for (let index = 0; index < quantidadeProvas; index++) {
    notasProvas[index] = parseFloat(prompt(`Digite a ${index+1}ª nota do aluno: `));
}

/* Retira o maior número do array */
notasProvas.splice(notasProvas.indexOf(notasProvas.reduce(function(a, b){
    return Math.max(a, b);
})), 1)

/* Retira o menor número do array */
notasProvas.splice(notasProvas.indexOf(notasProvas.reduce(function(a, b){
    return Math.min(a, b);
})), 1)

/* Inicializa a média e a impressão de dados */
let mediaProvas = Math.round(notasProvas.reduce((mediaProvas, index) => (mediaProvas + index)) / notasProvas.length)
let imprimeDados = [nomeAluno, idadeAluno, notasProvas, mediaProvas, true];

/* Confirma qual a média para imprimir corretamente o último índice */
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