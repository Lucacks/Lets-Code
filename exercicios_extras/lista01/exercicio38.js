/* 
Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
  a) a idade dessa pessoa em anos;
  b) a idade dessa pessoa em meses;
  c) a idade dessa pessoa em dias;
  d) a idade dessa pessoa em semanas.
*/

const prompt = require('prompt-sync')({sigint: true});

const anoNascimento = Number(prompt('Ano de nascimento: '))
const anoEscolhido = Number(prompt('Escolha uma no qualquer após a data de nascimento: '))

const mesesAno = 12, diasAno = 365, semanasAno = 52;

if(anoEscolhido >= anoNascimento){
    console.log(`
    - Tempo de vida em anos: ${anoEscolhido - anoNascimento} anos;
    - Tempo de vida em meses: ${(anoEscolhido - anoNascimento) * 12} meses;
    - Tempo de vida em dias: ${(anoEscolhido - anoNascimento) * 365} dias;
    - Tempo de vida em semanas: ${(anoEscolhido - anoNascimento) * 52} semanas;
    `)
}
else
    console.log('Ano inválido')