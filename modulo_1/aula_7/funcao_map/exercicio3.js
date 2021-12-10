/* 
Crie uma função para gerar um número inteiro aleatório entre -10 e 10. Em seguida, utilize a função map e a função criada para construir um array com 20 números inteiros aleatórios entre -10 e 10.
*/

let numeroAleatorio = new Array(20);

function criaNumeros () {
    for (let index = 0; index < numeroAleatorio.length; index++) {
        numeroAleatorio[index] = Math.floor((Math.random() * (10 - (-10) + 1)) + (-10));        
    }
}

let arr = numeroAleatorio.map(arr => {
    arr = criaNumeros();
})

console.log(arr)