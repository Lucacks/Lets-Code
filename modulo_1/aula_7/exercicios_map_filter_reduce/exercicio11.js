/* 
Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(
    matrix.reduce((soma, linha, index, matrix) => soma + linha[matrix.length - 1 - index], 0)
)