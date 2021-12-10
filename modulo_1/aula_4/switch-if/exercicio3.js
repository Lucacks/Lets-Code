/* 
Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
*/

const input = require("prompt-sync")({sigint: true});

let nota1 = parseFloat(input("Digite a primeira nota: "));
let nota2 = parseFloat(input("Digite a segunda nota: "));
let nota3 = parseFloat(input("Digite a terceira nota: "));

if (nota1 !== null && nota2 !== null && nota3 !== null) {
    if((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)){
        let mediaFinal = (nota1 + nota2 + nota3)/3 >= 5 ? console.log("Aprovado!") : console.log("Reprovado!");
    }else {
        console.log("As informações não foram preenchidas corretamente. Comece novamente.")
    }
} 