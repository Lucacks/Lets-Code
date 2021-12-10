const prompt = require("prompt-sync")({sigint: true})

const valor1 = parseInt(prompt("Digite um número: "))

if(valor1 % 2 === 0)
    console.log("Seu número é par.")
else
    console.log("Seu número é ímpar.")