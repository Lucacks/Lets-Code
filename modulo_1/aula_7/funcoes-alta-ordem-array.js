/* find */
const contatos = [
    {nome: 'contato1', telefone: '000000000'},
    {nome: 'contato2', telefone: '111111111'},
    {nome: 'contato3', telefone: '222222222'},
    {nome: 'contato4', telefone: '333333333'},
    {nome: 'contato5', telefone: '444444444'},
];

const contato = contatos.find(contato => contato.nome === 'contato3')
console.log(contato)

/* findIndex */
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const indexOf3 = nums.findIndex(num => num === 6)
// console.log(indexOf3)

/* forEach */
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums.forEach(num => console.log(num*2))
// nums.forEach(console.log)
// nums.forEach((num, index, arr) => console.log(num, index, arr))

/* Every */
// const nums1 = [10, 20, 30, 40, 50, 60]
// const nums2 = [11, 20, 30, 40, 50, 60]

// const isEven = num => num % 2 === 0;
// const numsPares = nums2.every(isEven)

// console.log(numsPares)