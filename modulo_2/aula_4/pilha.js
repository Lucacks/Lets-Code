/* const prompt = require("prompt-sync")({sigint: true});

const run = () => {
    const num = parseInt(prompt("Digite um número: "));

    console.log(num)
}

run(); */

const criarPilha = () => {
    let lista = [];

    return {
        adicionar: (elemento) => {
            lista = [elemento, ...lista];
        },
        remover: () => {
            const [primeiro, ...resto] = lista;
            lista = resto;
            return primeiro;
        }
    }
}

const pilha = criarPilha ();

pilha.adicionar(100);
pilha.adicionar(400);


console.log(pilha)

const removido1 = pilha.remover();
console.log(removido1)

pilha.adicionar(400);


