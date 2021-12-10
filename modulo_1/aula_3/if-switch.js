/* Construa um algoritmo que leia o código de um determinado produto e mostre a sua classificação. Utilizando ifs e usando switch

Código Classificação
1 - Alimento não-perecível
2, 3 ou 4 - Alimento perecível
5 ou 6 - Vestuário
7 - Higiene pessoal
8, 9, 10 - Utensílios domésticos
Qualquer outro código Inválido */

const input = require("prompt-sync")({sigint: true});

let codigoDoProduto = parseInt(input("Digite o código do produto: "))


switch (codigoDoProduto) {
    case 1:
        console.log("Alimento não-perecível")        
        break;    
    case 2:
    case 3:
    case 4:
        console.log("Alimento perecível")        
        break;        
    case 5:
    case 6:
        console.log("Código Vestuário")    
        break;
    case 7:
        console.log("Higiene pessoal")    
        break;
    case 8:
    case 9:
    case 10:
        console.log("Utensílios domésticos")   
        break;
    default:
        console.log("Código inválido")
        break;
}


/* if(codigoDoProduto == 1){
    console.log("Alimento não-perecível")
}else if(codigoDoProduto == 2 || codigoDoProduto == 3 || codigoDoProduto == 4){
    console.log("Alimento perecível")
}else if(codigoDoProduto == 5 || codigoDoProduto == 6){
    console.log("Código Vestuário")
}else if(codigoDoProduto == 7){
    console.log("Higiene pessoal")
}else if(codigoDoProduto == 8 || codigoDoProduto == 9 || codigoDoProduto == 10){
    console.log("Utensílios domésticos")
}else
    console.log("Código inválido") */
