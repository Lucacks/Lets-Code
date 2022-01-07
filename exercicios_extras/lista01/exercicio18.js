/* 
A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos.
*/

const prompt = require('prompt-sync')({sigint: true});

const funcionario = new Object ();

const tributos = ['INSS', 'FGTS', 'IRRF']
let inss, irrf, fgts;

funcionario.salarioBruto = Number(parseFloat(prompt('Digite o salário bruto: ')))

funcionario.salarioLiquido = funcionario.salarioBruto

for (let index = 0; index < tributos.length; index++) {
    if(tributos[index] === 'INSS'){
        if(funcionario.salarioBruto <= 1045){
            funcionario.salarioLiquido -= funcionario.salarioBruto * 0.075;
            inss = 7.5
        }
        else if (funcionario.salarioBruto > 1045 && funcionario.salarioBruto <= 2089.60){
            funcionario.salarioLiquido -= funcionario.salarioBruto * 0.09;
            inss = 9
        }
        else if (funcionario.salarioBruto > 2089.60 && funcionario.salarioBruto <= 3134.40){
            funcionario.salarioLiquido -= funcionario.salarioBruto * 0.12;
            inss = 12
        }
        else{
            funcionario.salarioLiquido -= funcionario.salarioBruto * 0.14;
            inss = 14
        }
    }

    if(tributos[index] === 'FGTS'){
        if(funcionario.salarioBruto >= 3000){
            funcionario.salarioLiquido -= funcionario.salarioBruto * 0.08;
            fgts = 8
        }
        else
            console.log('FGTS não descontado')
    }
    
    if(tributos[index] === 'IRRF'){
        if(funcionario.salarioBruto <= 1903.98)
            console.log('INSS não descontado')
        else if (funcionario.salarioBruto > 1903.98 && funcionario.salarioBruto <= 2826.65){
            funcionario.salarioLiquido -= 142.80;
            irrf = 7.5
        }
        else if (funcionario.salarioBruto > 2826.65 && funcionario.salarioBruto <= 3751.05){
            funcionario.salarioLiquido -= 354.80;
            irrf = 15
        }
        else if (funcionario.salarioBruto > 3751.05 && funcionario.salarioBruto <= 4664.68){
            funcionario.salarioLiquido -= 636.13;
            irrf = 22.5
        }
        else{
            funcionario.salarioLiquido -= 869.36;
            irrf = 27.5
        }
    }
}

console.log(`
================================================
========= Total na folha de pagamento: =========
================================================
Salário Bruto: ${funcionario.salarioBruto}
Imposto de Renda (%): ${irrf}%
Fundo de Garantia (%): ${fgts}%
INSS (%): ${inss}%

================================================

Salário líquido total: ${(funcionario.salarioLiquido).toFixed(2)}
`)