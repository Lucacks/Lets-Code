/* 
Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.
*/

const prompt = require('prompt-sync')({sigint: true});

let camisaP = 10;
let camisaM = 12;
let camisaG = 15;
let valorTotal = 0;
let opt;

console.log("Digite SAIR para sair do programa.")
while(opt !== 'SAIR'){
    opt = prompt("Escolha o tamanho da camisa para acrescentar ao carrinho (P, M ou G): ").toUpperCase();
    switch (opt) {
        case 'P':
            valorTotal += camisaP;
            console.log(`Camisa pequena adicionada. Valor total atual: R$ ${valorTotal.toFixed(2)}\n`)
            break;
        case 'M':
            valorTotal += camisaM;
            console.log(`Camisa média adicionada. Valor total atual: R$ ${valorTotal.toFixed(2)}\n`)
            break;
        case 'G':
            valorTotal += camisaG;
            console.log(`Camisa grande adicionada. Valor total atual: R$ ${valorTotal.toFixed(2)}\n`)
            break;    
        default:
            "Opção inválida"
            break;
    }
}

console.log(`Valor total da venda: R$ ${valorTotal.toFixed(2)}`)