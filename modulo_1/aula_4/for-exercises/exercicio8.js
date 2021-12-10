/* 
Faça um programa para simular uma situação simples de depósito, retirada e consulta em um banco. Exiba o seguinte menu com as opções:
    1 - Depósito
    2 - Retirada
    3 - Saldo
    4 - Sair do algoritmo
Se a escolha do usuário for depósito ou retirada, o algoritmo deverá pedir o valor da operação e atualizar automaticamente o valor existente na conta. O algoritmo deverá ser utilizado até que o usuário escolha a opção sair do algoritmo.
*/

const input = require("prompt-sync")({sigint: true});

let saldo = parseFloat(input("Digite o saldo inicial: "));
let opcao;

console.log("====================================\n======== Bem-vindx ao banco ========\n====================================\n")
console.log("Seu saldo inicial é de R$", saldo.toFixed(2))


while(opcao !== 4){
    console.log("Qual operação deseja fazer?\n1 - Depósito\n2 - Retirada\n3 - Saldo\n4 - Sair do banco\n")
    opcao = parseInt(input())
    switch (opcao) {
        case 1:
            saldo += parseFloat(input("Você gostaria de depositar quanto? "))
            break;
        case 2:
            saldo -= parseFloat(input("Você gostaria de retirar quanto? "))
            break;
        case 3:
            console.log("Seu saldo atual é de R$", saldo.toFixed(2), "\n==================================n")
            break;
        case 4:
            console.log("Obrigado por utilizar o serviço.\n==================================\n")
            break;
        default:
            console.log("Opção inválida\n==================================n")
            break;
    }
}