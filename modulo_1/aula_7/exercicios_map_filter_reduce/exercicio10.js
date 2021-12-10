/* 
Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

[["1", "2", "3"],[true], [4, 5, 6]] -> ["1", "2", "3", true, 4, 5, 6]
*/

const array = [["1", "2", "3"],[true], [4, 5, 6]];

console.log(`Array único: ${array.reduce((element, arr) => element.concat(arr), [])}`)