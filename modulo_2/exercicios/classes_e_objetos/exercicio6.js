/* 
O módulo time possui a função time.sleep(x), que faz seu programa “dormir” por x segundos. Utilizando essa função, crie uma classe Cronômetro e faça um programa que cronometre o tempo.
*/

const prompt = require('prompt-sync')({sigint: true});

class Cronometro {
    comecarTimer () {
        return setInterval(() => )
    }

    pararTimer () {

    }

    zerarTimer () {

    }

}

let opt;
const cronometro = new Cronometro();

console.log(`Cronômetro`)

do {
console.log(`============
1 - Começar
2 - Parar
3 - Zerar
0 - Sair do programa
`)

    opt = Number(prompt("Opção: "))

    switch (opt) {
        case 1:
            cronometro.comecarTimer();
            break;
        case 2:
            cronometro.pararTimer();
            break;
        case 3:
            cronometro.zerarTimer();
            break;
    }
} while (opt !== 0);