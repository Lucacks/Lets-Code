const pessoa1 = {nome: "Lucas", idade: 27}

const quadrado = {
    base: 10,
    altura: 10,
    calcularArea: function(){return this.base * this.altura}
}

const agenda = {
    contatos: [
    {nome: 'contato1', telefone: '000000000'},
    {nome: 'contato2', telefone: '111111111'},
    {nome: 'contato3', telefone: '222222222'},
    {nome: 'contato4', telefone: '333333333'},
    {nome: 'contato5', telefone: '444444444'},
    ],
    adicionar: function(contato) {this.contatos.push()}
}