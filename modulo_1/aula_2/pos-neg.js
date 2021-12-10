const prompt = require("prompt-sync")({sigint: true})

const valor1 = parseInt(prompt("Digite um número inteiro: "))

if(valor1 >= 0)
    console.log("Seu número é positivo.")
else
    console.log("Seu número é negativo.")
