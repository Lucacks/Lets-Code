/* const obj = {
    nome: "Lucas",
    idade: 27,
    sangue: "O-"
} */

const agenda = [
    {
        nome: "Contato1",
        telefone: "11 11111-1111",
        endereco: "Rua Nome Maluco, 52"
    },
    {
        nome: "Contato2",
        telefone: "22 22222-2222"
    },
    {
        nome: "Contato3",
        telefone: "33 33333-3333"
    }
];

for (const contato of agenda) {
    console.log(contato.nome, contato["telefone"], contato.endereco || "");
};

const criarContato = (nome, telefone, endereco) => ({
    /* nome: nome,
    telefone: telefone,
    endereco: endereco || "" */
    nome,
    telefone,
    endereco: endereco || ""
});

const contato1 = criarContato("Lucas", "11 11111-1111", "Rua qualquer, 99")

console.log(contato1)