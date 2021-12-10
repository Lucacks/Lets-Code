/* Faça um algoritmo que receba três números inteiros e mostre o maior.deles. Considere que os números sempre serão diferentes */

const input = require("prompt-sync")({sigint: true})

console.log("Apenas valores inteiros serão validados")

let valor1 = parseInt(input("Digite o primeiro valor: "))
let valor2 = parseInt(input("Digite o segundo valor: "))
let valor3 = parseInt(input("Digite o terceiro valor: "))

if(valor1 > valor2 && valor1 > valor3)
    console.log("O maior valor é ", valor1)
else if(valor2 > valor3)
    console.log("O maior valor é ", valor2)
else
    console.log("O maior valor é: ", valor3)