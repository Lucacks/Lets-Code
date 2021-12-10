/* 
Crie uma classe Retângulo cujos atributos são lado_a e lado_b. Crie um método para calcular a área desse retângulo. Crie um objeto dessa classe e calcule a área e a imprima em seguida.
*/

class Retangulo {
    constructor (lado_a, lado_b) {
        this.base = lado_a;
        this.altura = lado_b;
    }

    calcularArea(){
        return console.log(`Área do retângulo: ${this.base * this.altura}`)
    }
}

const retangulo = new Retangulo(10, 20);
retangulo.calcularArea();