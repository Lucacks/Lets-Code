/* 
Dado o vetor:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

Utilize filter para selecionar todos os números primos do array.
*/

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.table(array.filter(element => {
  if(element <= 1) return false;
  for (let index = 2; index <= Math.sqrt(element); index++) {
    if(element % index === 0) return false;    
  };
  return true;
}));