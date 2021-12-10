/* 
Faça um programa que lê uma indeterminada quantidade de números até que o 0 (zero) seja digitado. Ao final, mostre os três menores de forma decrescente.
*/

const input = require("prompt-sync")({sigint: true});
let inputUsuario;
let ordemDecrescente = [];

console.log("Digite 0 a qualquer momento para encerrar o programa")

while(inputUsuario !== 0){    
    inputUsuario = parseInt(input("Número: "))
    ordemDecrescente.push(inputUsuario)
}

ordemDecrescente.sort(function(a, b){
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
})

let index = ordemDecrescente.indexOf(0);
ordemDecrescente.splice(index, 1)

console.log("Os 3 menores números são:", ordemDecrescente[2], "", ordemDecrescente[1], "", ordemDecrescente[0])