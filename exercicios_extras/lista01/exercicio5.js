/* 
Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.
*/

const prompt = require('prompt-sync')({sigint: true});

let valorLitroGasolina = Number(parseFloat(prompt("Qual o valor da gasolina? ")))
let valorPagamento = Number(parseFloat(prompt("Quantos reais você quer abastecer? ")))

console.log(`Litros no tanque: ${(valorPagamento / valorLitroGasolina).toFixed(2)}`)