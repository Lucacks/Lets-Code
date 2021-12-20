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
        this.cor = cor;
        this.area;
        this.volume
    }

    calculaArea () {
        return this.volume = (4 * Math.PI * (this.area ** 2)).toFixed(0);
    }

    calculaVolume () {
        return this.area = (4 * Math.PI * (this.raio / 3)).toFixed(0);
    }

    imprimeDados () {
        return console.log(`Área da bola: ${this.area}\nVolume da bola: ${this.volume}\nCor da bola: ${this.cor}`)
    }
}

const bola = new Bola(2, 3, "Branca");
bola.calculaArea();
bola.calculaVolume();
bola.imprimeDados();