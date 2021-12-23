/* 
Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada ponto é um par ordenado (x,y). 
*/

const prompt = require('prompt-sync')({sigint: true});

let pontoA = [
    parseInt(prompt("(A) Primeiro ponto X: ")), 
    parseInt(prompt("(A) Primeiro ponto Y: "))
]
let pontoB = [
    parseInt(prompt("(B) Segundo ponto X: ")), 
    parseInt(prompt("(B) Segundo ponto Y: "))
]

let distancia = Math.sqrt(
    Math.pow(
        (pontoB[0] - pontoA[0]), 2
    ) +
    Math.pow(
        (pontoB[1] - pontoA[1]), 2
    )
)

console.log(`Distância entre os dois pontos: ${distancia.toFixed(2)}`)