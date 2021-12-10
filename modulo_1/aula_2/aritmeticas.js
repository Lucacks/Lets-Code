const prompt = require("prompt-sync")({sigint: true});

const valor1 = parseFloat(prompt("Digite o primeiro número: "));
const valor2 = parseFloat(prompt("Digite o segundo número: "));

const media = (valor1 + valor2) / 2.0;

console.log(media);
