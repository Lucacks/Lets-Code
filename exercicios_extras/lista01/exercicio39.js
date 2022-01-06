/* 
João recebeu seu salário de `R$1200,00` e precisa pagar duas contas (C1=`R$200,00` e C2=`R$120,00`) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João.
*/

const prompt = require('prompt-sync')({sigint: true});

const juros = 0.02;
let salario = 1200.00;
let conta1 = 200.00, conta2 = 120.00;

console.log(`
Coitado do João... 
Valores das contas:
- R$ ${conta1.toFixed(2)};
- R$ ${conta2.toFixed(2)};

Valores das contas com juros de 2%:
- R$ ${(conta1 += (conta1 * juros)).toFixed(2)};
- R$ ${(conta2 += (conta2 * juros)).toFixed(2)};

Salário restante:
R$ ${(salario - (conta1 + conta2)).toFixed(2)}
`)