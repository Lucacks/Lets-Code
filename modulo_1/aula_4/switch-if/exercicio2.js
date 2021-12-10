/* 
Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.
*/

const input = require("prompt-sync")({sigint: true});

let valor1 = parseFloat(input("Digite o primeiro valor: "))
let operacao = input("Digite a operação: ")
let valor2 = parseFloat(input("Digite o segundo valor: "))
let resultado;

switch (operacao) {
    case "+":
        resultado = valor1 + valor2
        console.log("Resultado da soma de", valor1, "+", valor2, "=", resultado)
        break;

    case "*":
        resultado = valor1 * valor2
        console.log("Resultado da soma de", valor1, "*", valor2, "=", resultado)
        break;

    case "-":
        resultado = valor1 - valor2
        console.log("Resultado da soma de", valor1, "-", valor2, "=", resultado)
        break;

    case "/":
        resultado = valor1 / valor2
        console.log("Resultado da soma de", valor1, "/", valor2, "=", resultado)
        break;

    default:
        console.log("Não é uma operação válida.")
        break;
}