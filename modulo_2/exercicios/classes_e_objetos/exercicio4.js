/* 
Crie uma classe Televisor cujos atributos são:

a. fabricante;
b. modelo;
c. canal atual;
d. lista de canais; e
e. volume.

Faça métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nessa lista). No atributo lista de canais, devem estar armazenados todos os canais já sintonizados dessa TV.

Obs.: O volume não pode ser menor que zero e maior que cem; só se pode trocar para um canal que já esteja na lista de canais.
*/

const prompt = require('prompt-sync')({sigint: true});

class Televisor {
    constructor (fabricante, modelo) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.canalAtual = 4;
        this.listaCanais = [1, 2, 3, 4, 5];
        this.volume = 99;
    }

    sintonizarCanal (addCanal) {
        if(this.listaCanais.includes(addCanal)){
            console.log('Canal já existe.\n');
        } else {
            this.listaCanais.push(addCanal);            
        }
    }

    trocarCanal (canal) {
        if (canal === this.canalAtual){
            console.log('Você já está neste canal.\n')
        } else {
            if(this.listaCanais.includes(canal))
                this.canalAtual = canal;
            else
                console.log('Este canal não existe.\n')
        }
    }

    mudarVolume (option) {
        let volumeMinimo = 0;
        let volumeMaximo = 100;
        if (this.volume > volumeMinimo && this.volume < volumeMaximo) {
            switch (option) {
                case 4:
                    this.volume++;
                    break;          
                case 5:
                    this.volume--;
                    break; 
            } 
        }
        else 
            console.log('Volume inválido.')
    }    
}

let opt;
const televisao = new Televisor('Samsung', "SB0341-F");

console.log(`Olá! Você comprou uma TV ${televisao.fabricante}, modelo ${televisao.modelo}. `)

do {
    console.log(`Selecione uma das opções abaixo para interagir com sua TV:
    1 - Sintonizar novo canal
    2 - Trocar canal
    3 - Listar canais
    4 - Aumentar volume
    5 - Diminuir volume
    0 - Desligar TV
    
    Canal atual: ${televisao.canalAtual}
    Volume: ${televisao.volume}`)

    opt = Number(prompt("Opção: "))

    switch (opt) {
        case 1:
            televisao.sintonizarCanal(Number(prompt("Qual o número do canal que deseja sintonizar? ")))
            break;
        case 2:
            televisao.trocarCanal(Number(prompt("Quer trocar pra qual canal? ")))
            break;
        case 3:
            console.table(televisao.listaCanais)
            break;
        case 4:
            televisao.mudarVolume(opt)
            break;
        case 5:
            televisao.mudarVolume(opt)
            break;
        default:
            break;
    }
} while (opt !== 0);