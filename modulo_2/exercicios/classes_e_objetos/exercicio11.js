/* 
Crie uma classe Fração cujos atributos são numerador (número de cima) e denominador (número de baixo).

Implemente os métodos de adição, subtração, multiplicação, divisão que retornam objetos do tipo Fração.

Implemente também o método _ repr _.

Implemente métodos para comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
*/

class Fracao {
    constructor (numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    adicao (fracao1, fracao2) {
        this.compararNumeros();
        return console.log(`${(fracao1.numerador * fracao2.denominador) + (fracao2.numerador * fracao1.denominador)}/${fracao1.denominador * fracao2.denominador}`)
    }
    subtracao (fracao1, fracao2) {
        this.compararNumeros();
        return console.log(`${(fracao1.numerador * fracao2.denominador) - (fracao2.numerador * fracao1.denominador)}/${fracao1.denominador * fracao2.denominador}`)
    }
    mutiplicacao () {

    }
    divisao () {

    }
    compararNumeros () {
        if (fracao1.denominador !== fracao2.denominador) {
            return mmc
        }
    }
    imprimirResultado () {

    }
}

const fracao = new Fracao(2, 3);
const fracao2 = new Fracao(3, 4);
fracao.adicao(fracao, fracao2);
fracao.subtracao(fracao, fracao2);