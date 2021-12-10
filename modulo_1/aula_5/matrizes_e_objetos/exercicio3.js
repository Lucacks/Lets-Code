/* 
Crie um objeto chamado cachorro através de uma função construtora. As propriedades desse objeto devem ser nome, apelido, raça, idade e isVacinado. Ofereça um valor padrão para chaves inexistentes.
*/

const criarCachorro = (nome, apelido, raca, idade, isVacinado) => ({
    nome,
    apelido,
    raca,
    idade,
    isVacinado
})

const novoCachorro = criarCachorro("Luc", "Pichulepo", "Lhasa Apso", 11, "true")
const novoCachorro2 = criarCachorro("Scarlett", "Gorda", "Vira-lata", 5, "true")

console.log(novoCachorro)
console.log(novoCachorro2)

