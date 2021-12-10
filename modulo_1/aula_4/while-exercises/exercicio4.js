/* 
Peça ao usuário para digitar um número e imprima o fatorial de n.
*/

const input = require("prompt-sync")({sigint: true});
let fatorial = 1;
let inputUsuario = parseInt(input("Insira um número para saber seu fatorial: "))
let printInput = inputUsuario;

while(inputUsuario > 1){
    fatorial *= inputUsuario;
    inputUsuario--;    
}

console.log("Fatorial de",printInput, "é:", fatorial);