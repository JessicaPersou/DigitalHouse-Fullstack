// diferenças entre var e let
if(true){
    var nome = "Jessica"
    var nome = "Maria"
}

//Permite criar duas variaveis com o mesmo nome e pega o valor da ultima variavel

console.log(nome)

// //a variavel sobrenome só existe no scopo local, ou seja, dentro do if
if(true){
    let sobrenome = "Sousa"
//  let sobrenome = "Pereira" // não permite criar duas variaveis com o mesmo nome
}
console.log(sobrenome)

//const só está disponivel no cloco que for declarada
const idade = "28 anos"

if(true){
    const idade = "29 anos"
    console.log(idade)
}

console.log(idade)
//não pode ser redeclarada
idade = "30 anos"

//caso seja feita alguma das coisas que não pode, javascript retorna um erro no console