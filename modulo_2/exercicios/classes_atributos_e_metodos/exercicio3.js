/* 
Crie uma classe Retângulo cujos atributos são lado_a e lado_b. Crie um método para calcular a área desse retângulo. Crie um objeto dessa classe e calcule a área e a imprima em seguida.
*/

class Retangulo {
    constructor (lado_a, lado_b) {
        this.lado_a = lado_a;
        this.lado_b = lado_b;
    }

    calculaArea () {
        console.log(`Área do retângulo: ${this.lado_a * this.lado_b}`)
    }
}

let retangulo = new Retangulo (2, 3);
retangulo.calculaArea();

