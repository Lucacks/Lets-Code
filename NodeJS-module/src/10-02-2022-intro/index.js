const { maiorDeIdade, imprimeIdade } = require('./verificador-de-idade')

const args = process.argv;
const idade = 2;

imprimeIdade(idade);
console.log(maiorDeIdade(idade));