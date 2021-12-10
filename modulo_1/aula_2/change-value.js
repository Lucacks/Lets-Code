const prompt = require("prompt-sync")({sigint: true});

let A = 10;
let B = 20;

console.log("Variável A: ", A, "\nVariável B: ", B);

let C = A;
A = B;
B = C;

console.log("======Após troca======")
console.log("Variável A: ", A, "\nVariável B: ", B);