/* const banana = "Banana prata"

console.log(`Fruta do dia: ${banana}`)


function somar(num1, num2){
    let soma = (isNaN(num1) || isNaN(num2) ? NaN : (num1 + num2));
    return soma;
}

console.log(somar(1, "b"))
 */

/* const pessoa = {
    nome: "Lucas",
    sobrenome: "Alves"
};

(function(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`)
})(pessoa.nome, pessoa.sobrenome);
 */
/* Arrow function */

/* Some com a palavra function, chaves e return */
const somar = (num1, num2) => num1 + num2;
/* 
EXEMPLOS QUE ELA ENCURTA
const somar = function(num1, num2){
    return num1, num2
} 

const somar = (num1, num2) => (num1 + num2)
*/

console.log(somar(1, 2))