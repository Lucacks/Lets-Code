const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b > 0 ? a/b : NaN;

/* const calcular = (operacao, a, b) => operacao(a, b); */

/**
 * Exercício de fixação 1:
 * O usuário deve digitar uma operação (soma, subtração, multiplicação, divisão) e dois parâmetros para o cálculo. Realize o cálculo pedido pelo usuário.
 */

// const prompt = require("prompt-sync")({sigint: true});

// let calculo = console.log(prompt("Qual a operação? "))
// let valor1 = console.log(prompt("Primeiro valor: "))
// let valor2 = console.log(prompt("Segundo valor: "))

// switch (calculo) {
//     case "+":
//         resultado = calcular(somar, valor1, valor2);
//         console.log(resultado)
//         break;
//     case "-":
//         resultado = calcular(subtrair, valor1, valor2);
//         console.log(resultado)
//         break;
//     case "*":
//         resultado = calcular(multiplicar, valor1, valor2);
//         console.log(resultado)
//         break;
//     case "/":
//         resultado = calcular(dividir, valor1, valor2);
//         console.log(resultado)
//         break;
//     default:
//         break;
// }

/**
 * Exercício de fixação 2:
 * Criar a média de 2 números utilizando apenas a função calcular.
 * Dica: media(a, b)   
 */

// const media = (a, b) => calcular(dividir, calcular(somar, a, b), 2);

// const calcular = (operacao, a, b) => operacao(a, b);
// const resultado = calcular(media, 4, 2)
// console.log(resultado)

/**
 * Exercício de fixação 3:
 * Criar uma função que mostra o valor de 10% de desconto de um produto. O valor do produto deve ser passado pelo usuário.
 * Dica: desconto(preço)
 */

// const precoComDesconto = (preco) => calcular(subtrair, preco, calcular(multiplicar, preco, 0.1))
// const valorProduto = 1000
// const valorFinal = precoComDesconto(valorProduto)
// console.log(valorFinal)

const createFormatContactFor = (software) => {
    if(software === "programa1"){
        return contato => JSON.stringify(contato)
    }
    if(software === "programa2"){
        return contato => (
        `<contato>
            <nome>${contato.nome}</nome>
            <telefone>${contato.telefone}</telefone>
        </contato>`
        )
    }
}

const formatContato = createFormatContactFor("programa1")
const contato = {
    nome: "Lucas",
    telefone: 119888668888
}

console.log(formatContato(contato))