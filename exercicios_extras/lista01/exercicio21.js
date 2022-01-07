/* 
A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou.
*/

const prompt = require('prompt-sync')({sigint: true});

const meiaCoca = {
    lata: 350,
    garrafa: 600,
    pet: 2000
}

let opt, totalLitros = 0;

console.log("Digite 0 para sair do programa.")
do {
    opt = Number(prompt("Qual garrafa acrescentar ao carrinho? Digite 1 para lata, 2 para garrafa de 600ml e 3 para garrafa pet 2L\n"));
    switch (opt) {
        case 1:
            totalLitros += meiaCoca.lata
            break;
        case 2:
            totalLitros += meiaCoca.garrafa
            break;
        case 3:            
            totalLitros += meiaCoca.pet
            break;    
        default:
            "Opção inválida"
            break;
    }    
} while (opt !== 0);
console.log(`Litros comprados: ${totalLitros / 1000}L`)