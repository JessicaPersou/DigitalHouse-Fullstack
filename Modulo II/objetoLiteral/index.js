let pessoa = {
    nome : "Flávio",
    idade : 19,
    curso : "ADS"
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idade"]);

// métodos nosobjetos literais são funções que atribuem um valor a uma chave 

let pais ={
    local: "Brasil",
    capital: "Brasilia",

    nacionalidade: function(){
        
       return "Não é Estrangeiro!!!"
        
    }
}

console.log(pais.nacionalidade());