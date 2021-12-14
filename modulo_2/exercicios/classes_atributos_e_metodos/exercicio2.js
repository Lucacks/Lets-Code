/* 
Crie uma classe Bola cujos atributos são cor e raio. Crie um método que imprime a cor da bola. Crie um método para calcular a área dessa bola. Crie um método para calcular o volume da bola. Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

Obs.:

Área da esfera = 4*3.14*r*r;

Volume da esfera = 4*3.14*r*r*r/3
*/

class Bola {
    constructor (area, raio, cor) {
        if(isNaN(area) || isNaN(raio)) throw "Valores inválidos"
        this.area = area;
        this.raio = raio;
        this.cor = cor
    }

    calculaArea () {
        return console.log(`Área da bola: ${(4 * Math.PI * (this.area ** 2)).toFixed(0)}`);
    }

    calculaVolume () {
        return console.log(`Volume da bola: ${(4 * Math.PI * (this.raio / 3)).toFixed(0)}`);
    }

    imprimiCor () {
        return console.log(`Cor da bola: ${this.cor}`)
    }
}

const bola = new Bola(2, 3, "laranja");
bola.calculaArea();
bola.calculaVolume();
bola.imprimiCor();