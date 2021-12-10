/* 
Considere o seguinte objeto abaixo:
    const venda = {
        produto: "ventilador",
        marca: "Arno",
        loja: "Amazon",
        quantidade: 5,
        preco: 500,
        hasDesconto: ???
        calcularValorFinal: ???
    }
Implemente o valor da propriedade hasDesconto. Esse valor deve ser uma função que verifica se o preço do produto é maior do que 450, se for, retorna verdadeiro, senão, retorna falso. Tente usar o conceito de Truthy e Falsy nessa questão.
Implemente o valor da propriedade calcularValorFinal. Esse valor deve ser uma função que calcula o valor total a pagar se houver desconto e se não houver desconto no produto. O valor do desconto é de 10% para cada produto com preço maior que 450. Use a propriedade hasDesconto para saber se há desconto. Retorne o preço final da venda (com ou sem desconto).
Mostre no console a seguinte mensagem: [Amazon] - [ventilador Arno] - [5] - [Valor Total da Venda = ???]

*/

const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: (() => console.log(this.preco) ? 1 : 0)(),
    calcularValorFinal: () => (this.hasDesconto()) ? (this.preco - (this.preco * 0.1)) : this.preco
}

console.log(venda)


/**
 * Exemplo:
 * const obj = {
 *  a: 1,
 *  b: 2,
 *  soma: soma(this.a, this.b)
 * }
 */