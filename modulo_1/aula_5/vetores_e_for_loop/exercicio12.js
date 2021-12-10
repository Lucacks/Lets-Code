/* 
Sorteie um vetor de 10 números e imprima:

a. um vetor com os 4 primeiros números;
b. um vetor com os 5 últimos números;
c. um vetor contendo apenas os elementos das posições pares;
d. um vetor contendo apenas os elementos das posições ímpares;
e. um vetor inverso do vetor sorteado (isto é, um vetor que começa com o último elemento o vetor sorteado e termina com o primeiro);
f. um vetor inverso dos 5 primeiros números;
g. um vetor inverso dos 5 últimos números.
*/

let vetorBase = []
let vetorPares = []
let vetorImpares = []

/* Randomiza os números do vetor principal e separa índices pares e ímpares */
for (let index = 0; index < 10; index++) {
    vetorBase[index] = Math.floor(Math.random() * 100) + 1
    index % 2 === 0 ? vetorPares.push(vetorBase[index]) : vetorImpares.push(vetorBase[index])
}

/* Imprime o vetor principal */
console.table(vetorBase)

/* Separa e imprime os vetores A e B */
let quatroPrimeiros = vetorBase.slice(0, 4)
console.log("Quatro primeiros números:", quatroPrimeiros)
let cincoUltimos = vetorBase.slice(5, 10)
console.log("Cinco últimos números:", cincoUltimos)

/* Imprime os vetores C e D */
console.log("Índices pares")
console.table(vetorPares)
console.log("Índices ímpares")
console.table(vetorImpares)

/* Inverte e imprime o vetor E */
let vetorReverso = vetorBase.reverse()
console.log("Vetor ao contrário")
console.table(vetorReverso)

/* Inverte e imprime os vetores F e G */
console.log("Cinco primeiros ao contrário")
console.table(vetorReverso.slice(0, 5))
console.log("Cinco últimos ao contrário")
console.table(vetorReverso.slice(5, 10))