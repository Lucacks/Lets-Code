/* 
Considere dois arrays:

const x = [3,4,7,1,5];
const y = [4,3,1];

Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. É possível que os arrays tenham tamanhos diferentes, certo? Por isso, o array resultante deverá ter o tamanho do menor dos arrays.

Exemplo 01:
Entrada		Saída
[1, 2, 3]		[1, 4, 9]
[1, 2, 3, 4]		
Exemplo 02:
Entrada		Saída
[5, 7, 3]		[10, 14]
[2, 2]		
*/

const arr1 = [3,4,7,1,5];
const arr2 = [4,3,1];

if (arr1.length < arr2.length) {
    const multiplicados = arr1.map((array, index) => {
        array = arr1[index];
        return arr2[index] * array;
    })
    console.table(multiplicados)
}else{
    const multiplicados = arr2.map((array, index) => {
        array = arr2[index];
        return arr1[index] * array;
    })
    console.table(multiplicados)
}