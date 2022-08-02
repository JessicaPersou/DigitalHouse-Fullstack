//ESCREVER ARQUIVOS
// const { writeFileSync  } = require('fs'); /*nome do modulos que precisa para executar a função*/
// const meuTexto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// writeFileSync('texto.txt', meuTexto);

//LER ARQUIVOS
// const fs = require('fs');
// let leitura = fs.readFileSync(__dirname + '/text.txt' , 'utf8');
// console.log(leitura)

//CRIANDO UM MODULO
const superHeroes = require('./superHeroes');
console.log(superHeroes);