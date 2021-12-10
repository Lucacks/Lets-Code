/* 
Dado o vetor people de  produtos que tem interesse em comprar, calcule quanto custaria comprar todos os produtos a vista.
*/

const products = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.table(`Valor total: ${products.reduce((increment, {price}) => increment + price, 0)}`)

