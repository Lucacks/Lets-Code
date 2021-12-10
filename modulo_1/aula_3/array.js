const input = require("prompt-sync")({sigint: true});

let array = []

/* Adiciona no final do array */
array.push("Maçã");
array.push(1)
array.push(23545)
array.push(null)
array.push(1)
array.push(10)
array.push({
    "nome": "Pessoa",
    "cabelo": "castanho",
    "idade": 18
})

/* Adiciona no começo do array */
array.unshift("Primeiro")
array.unshift(1)



array.shift()
array.pop()

for (let i = 0; i < array.length; i++) {
    console.log("Índice", i, ":", array[i])    
}

/* 

/* Printa o primeiro encontrado e o último
console.log(array.indexOf(1))
console.log(array.lastIndexOf(1))

/* Se o valor existir no array, retorna true
console.log(array.includes(10))
console.log(array.includes(20))

*/