/* 
Crie um Sistema de Recursos Humanos onde podemos adicionar colaboradores com as seguintes características:

Id(Deve ser único);
Nome;
Idade;
Cargo;
Salário;
Data de admissão(Utilize input do tipo 'date' para facilitar);
O sistema deve ter as seguintes ações:

Adicionar colaborador(Sempre limpar inputs após adicionar);
Remover colaborador;
Busca em tempo real(a cada tecla que colocamos no input) e avançada por id/nome/cargo;
Obs: Sempre atualizar a lista com cada ação que é disparada seja adiconar, remover, etc...
Exiba em alguma lugar na tela as seguintes informações:

Total de colaboradores;
Qual o custo mensal pagando todos esses colaboradores(Soma de todos os salários);
A média da idade dos colaboradores;
A média dos salários dos colaboradores;
Obs: Utilize funções de alta ordem para realizar os cálculos.
*/

const prompt = require('prompt-sync')({sigint: true});

const adicionarColaborador = (id, nome, idade, cargo, salario, dtAdmissao) => ([
    {
    id,
    nome,
    idade,
    cargo,
    salario,
    dtAdmissao
    },
])

const colab1 = adicionarColaborador(1, 'Lucas', 27, 'estagiário', 1500, '10/05')
const colab2 = adicionarColaborador(2, 'Marina', 59, 'farmacêutica', 1500, '10/10')
const colab3 = adicionarColaborador(3, 'Daniela', 27, 'advogada', 3000, '20/12')


const addColab = (colaborador) => {
    colaborador.id = parseInt(prompt("Digite o id: "));
    colaborador.nome = prompt("Digite o nome: ");
    colaborador.idade = parseInt(prompt("Digite a idade: "));
    colaborador.cargo = prompt("Digite o cargo: ");
    colaborador.salario = parseFloat(prompt("Digite o salário: "));
    colaborador.dtAdmissao = prompt("Digite a data de admissão (formato ): ");
}

const addInfos = addColab(adicionarColaborador)

console.log(addInfos)