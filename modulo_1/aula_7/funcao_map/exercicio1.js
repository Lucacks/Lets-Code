/* 
Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00
10% para produtos abaixo de R$ 400,00
15% para produtos abaixo de R$ 2000,00
20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.
*/

const precoProdutos = [70, 150, 210, 320, 480, 730, 990, 1500, 2100, 3500]

const produtosComDesconto = precoProdutos.map(produto => {
    if(produto < 200)
        return produto - (produto * .05)
    else if(produto >= 200 && produto < 400)
        return produto - (produto * .1)
    else if(produto >= 400 && produto < 2000)
        return produto - (produto * .15)
    else
        return produto - (produto * .2)
})

console.table(produtosComDesconto)