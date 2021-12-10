/* A empresa XKW concedeu um bônus de 20% do valor do salário a todos os funcionários com tempo de trabalho na empresa igual ou superior a 5 anos e de 10% aos demais. Faça um algoritmo que receba o salário e o tempo de serviço de um funcionário, calcule e mostre o valor do bônus recebido por ele. */

const input = require("prompt-sync")({sigint: true});

let tempoDeTrabalho = parseInt(input("Digite o tempo de trabalho na empresa: "));
let salario = parseFloat(input("Digite o salário: "))
 
if(tempoDeTrabalho >= 5){
    salario += (salario * .2);
    console.log("O salário com bônus de 20% é de: ", salario.toFixed(2));
}else{
    salario += (salario * .1);
    console.log("O salário com bônus de 10% é de: ", salario.toFixed(2));
}