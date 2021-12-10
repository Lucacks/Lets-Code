/* function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; //let indica que é privado
}

const quadrado = new Quadrado(3, 5);

console.log(quadrado);
 */


// function createQuadrado(base, altura){
//     let cor = 'blue'

//     return{
//         base,
//         altura,
//         getCor: function() {return cor;}
//     }
// }

// const quadrado = createQuadrado(3, 5);
// console.log(quadrado);

class Quadrado{
    constructor(base, altura){
        let cor = 'blue'
        this.base = base;
        this.altura = altura;
        this.getCor = function() {return cor;};
    }
}

const quadrado = new Quadrado(3, 5)
console.log(quadrado)
console.log(quadrado.getCor())