/* 
Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio.
*/

const prompt = require('prompt-sync')({sigint: true});

const anguloSol = parseInt(prompt('Ângulo da sombra: '))
const tamanhoSompra = parseInt(prompt('Tamanho da sombra em metros: '))

console.log('Altura do prédio: ${')