/* 
Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.
*/

let StringArray = ['Teste', 'Oitenta e quatro', 'São Paulo', 'Nove', 'Palavrão','Oi', 'Chegou aqui?', 'Sim', 'Não', 'Falso', 'Verdadeiro', 'True'];

const menoresStrings = StringArray.filter(string => string.length <= 5).map(String)

console.table(menoresStrings)