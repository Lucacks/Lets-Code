/* 
Crie uma classe Data cujos atributos são dia, mês e ano. Implemente métodos _ repr _ e para comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
*/

const prompt = require('prompt-sync')({sigint: true});

class Data {
    constructor (dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    


    imprimeAlgo () {
        console.log();
    }

}

let dia = prompt("Qual dia: ")
let mês = prompt("Qual mês: ")
let ano = prompt("Qual ano: ")

const data = new Data (dia, mes, ano)