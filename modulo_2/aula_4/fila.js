let arr = []
let numero;

let temp = 0;
for (let index = 0; index < 10; index++) {
    numero = parseInt(Math.random() * (1 + 20) + 1);
    arr.push(numero);
    console.table(arr)
    arr.push(arr.shift())
    console.table(arr)
}