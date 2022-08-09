let carro = {
    marca: "Honda",
    modelo: "Civic",
}

console.log(carro)

//esta função construtora que cria vários objetos e  não precisa criar um por um 
function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

console.log(new Carro("Toyota", "Corolla"));

function Apresentacao(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

console.log(new Apresentacao("Jessica", "Sousa"))