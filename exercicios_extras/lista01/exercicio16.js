/* 
A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.
*/

const prompt = require('prompt-sync')({sigint: true});

const sanduiche = {
    pesoQueijo: 50,
    pesoPresunto: 50,
    pesoHamburguer: 100
}

let qtdSanduiches = parseInt(prompt("Quantidade de sanduíches a fazer: "))

console.log(`
Valor total (em Kg) dos ingredientes a serem utilizados:
- Queijo: ${(sanduiche.pesoQueijo * qtdSanduiches) * 0.001} Kg
- Presunto: ${(sanduiche.pesoPresunto * qtdSanduiches) * 0.001} Kg
- Hambúrguer: ${(sanduiche.pesoHamburguer * qtdSanduiches) * 0.001} Kg`) 