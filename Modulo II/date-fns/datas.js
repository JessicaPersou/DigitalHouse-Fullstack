const {format} = require("date-fns") 

const nome = "Jessica";

const nascimento = new Date(2022,06,26);

console.log(format(nascimento, "' Today is: ' eeee" ))

