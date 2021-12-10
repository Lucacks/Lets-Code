/* Implemente um código para aprovar empréstimo bancário. O código deve pedir 3 informações: valor do empréstimo, número de parcelas e salário do solicitante. Aprovar empréstimo caso o valor das parcelas representem no máximo 30% do salário do solicitante. */

const input = require("prompt-sync")({sigint: true});

let valorDoEmprestimo = parseFloat(input("Digite o valor do empréstimo: "));
let numeroDeParcelas = parseInt(input("Digite o número de parcelas: "));
let salario = parseFloat(input("Digite o salário do solicitante: "));

let valorParcelas = valorDoEmprestimo / numeroDeParcelas <= salario * 0.3 ? console.log("Empréstimo aprovado.") : console.log("Empréstimo reprovado.");