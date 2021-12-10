/* 
5. Calcule a soma de até mil termos da série 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...

Dica! Use três variáveis:
    um contador, que começa em zero;
    uma variável para a soma de todos os termos, que também começa em zero;
    uma variável para cada termo, que começa em 1 e a cada loop é dividida por 2.
*/

let contador = 0;
let somaTotal = 0;
let valor = 1;

while(contador < 1000){
    somaTotal += 1 / valor;
    valor *= 2;
    contador++;
}

console.log("Valor da soma total:", somaTotal);