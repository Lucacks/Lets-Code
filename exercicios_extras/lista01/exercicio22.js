/* 
Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero.
*/

const prompt = require('prompt-sync')({sigint: true});

let totalEconomizado = 0.00;
let opt;

do {
    opt = parseInt(prompt(`Qual moeda deseja adicionar?
    1 - 1 centavo
    2 - 5 centavos
    3 - 10 centavos
    4 - 25 centavos
    5 - 50 centavos
    6 - 1 real

    0 - Encerrar programa \n`))
    switch (opt) {
        case 1:
            totalEconomizado += 0.01;
            console.log('toma 1 centavo')
            break;
        case 2:
            totalEconomizado += 0.05;
            break;
        case 3:
            totalEconomizado += 0.1;
            break;
        case 4:
            totalEconomizado += 0.25;
            break;
        case 5:
            totalEconomizado += 0.5;
            break;
        case 6:
            totalEconomizado += 1;
            break;
    }

    
} while (opt !== 0);    

console.log(`Total economizado: R$ ${totalEconomizado.toFixed(2)}`)