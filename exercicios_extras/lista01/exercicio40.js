/* 
Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa. 
*/

const prompt = require('prompt-sync')({sigint: true});

const triangulo = new Object();
triangulo.cateto1 = parseFloat(prompt('Primeiro cateto: '))
triangulo.cateto2 = parseFloat(prompt('Segundo cateto: '))

triangulo.hipotenusa = Number(
    (Math.sqrt(
    Math.pow(triangulo.cateto1, 2) + 
    Math.pow(triangulo.cateto2, 2))
    ).toFixed(2)
    )
    
console.table(triangulo)