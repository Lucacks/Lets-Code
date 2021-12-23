/* 
Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento, desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final.
*/

const prompt = require('prompt-sync')({sigint: true});

const funcionario = new Object();

funcionario.nome = prompt("Nome do funcionário: ")
funcionario.salario = parseInt(prompt("Salário do funcionário: "))

funcionario.aumentoSalario = funcionario.salario + funcionario.salario * 0.15;
funcionario.salarioFinal = funcionario.aumentoSalario - funcionario.aumentoSalario * 0.08;

console.table(funcionario)