/* 
3. Faça um programa que peça para o usuário digitar a idade, o salário e o sexo de uma pessoa até que as entradas digitadas sejam válidas:
Idade: entre 0 e 150;
Salário: maior que 0;
Gênero: M, F ou Outro.
*/

const input = require("prompt-sync")({sigint: true});
let idade, salario, genero;

do {
    idade = parseInt(input("Digite uma idade válida (de 0 a 150): "));    
} while (idade < 0 || idade > 150);

do {
    salario = parseFloat(input("Digite um salário válido (maior do que 0): "));
} while (salario <= 0);

do {
    genero = input("Digite um gênero válido (M, F ou Outro): ").toUpperCase();
} while (genero !== "M" && genero !== "F" && genero !== "OUTRO");

console.log("Idade: ", idade, "\nSalário:", salario.toFixed(2), "\nGênero:", genero)