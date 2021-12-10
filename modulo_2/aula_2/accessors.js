class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Valores inválidos"
        this._base = null;
        this._altura = null;
        this._cor = undefined;
    }
    
    get base() {
        return this._base;
    }
    
    set base(base){
        if(isNaN(base)) throw "Base inválida"
        this._base = base;
    }
    
    get altura() {
        return this._altura;
    }
    
    set altura(altura){
        if(isNaN(altura)) throw "Altura inválida"
        this._altura = altura;
    }

    
    get cor() {
        return this._cor;
    }
    
    set cor(cor){
        if(cor !== 'red' && cor !== 'blue' && cor !== 'green') throw "Cor inválida";
        this._cor = cor;
    }
}

const quadrado = new Quadrado(null, null);
console.log(quadrado);

quadrado.cor = 'green';
quadrado.base = 20;
quadrado.altura = 30;


console.table(quadrado);