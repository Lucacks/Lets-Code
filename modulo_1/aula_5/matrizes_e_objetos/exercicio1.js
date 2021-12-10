/* 

Considere a matriz a seguir:

    const alunos = [
        ["João", 30, "Python", "Data Science"],
        ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
        ["Pedro", 40, "Java", "Mobile"],
        ["Luciana", 25, "C#", "Web Full Stack - Backend"]
    ]
Essa matriz representa os dados de 4 alunos. Os dados são: nome, idade, linguagem de programação que está aprendendo e curso que está fazendo na Let's Code.
Mostre no console todos os dados da aluna Luciana.
Mostre no console a idade da aluna Letícia.
Modifique o curso do aluno Pedro de Mobile para Data Science. 

*/

const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[3][index])    
}

for (let index = 0; index < alunos.length; index++) {
    for (let indexJ = 0; indexJ < alunos.length; indexJ++) {
        if(alunos[index][0] === "Pedro"){
            alunos[index].pop(alunos[index][3])
            alunos[index].push("Data Science")
            break;
        }
    }
}

console.table(alunos)