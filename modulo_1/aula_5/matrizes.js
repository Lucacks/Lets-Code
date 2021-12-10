const tabela = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

arr1 = [1, 2, 3, 4, 5]

/*
for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela.length; j++) {
        console.log(typeof(tabela[i][j]))        
    }
}

const tabela2 = [...tabela]
tabela2.pop();

console.log(tabela)
console.log(tabela2) 

*/

const [a, ...resto] = arr1;

console.log(a)
console.log(resto)