const { writeFileSync } = require('fs');
const meuTexto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
writeFileSync('texto.txt', meuTexto);