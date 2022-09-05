
//array .map

let nomes = ["Maria", "Antonia", "Joaquina", "Joana"]

let sobrenomes = nomes.map(function(n){
    return n + " Silveira"
})
console.log(sobrenomes)



//usando array .find

let frutas = ["Banana", "Maça", "Pêra", "Mamão" ]

let queMaisGosto = frutas.find(function(fruta){
    return fruta == "Banana"
})
console.log(queMaisGosto)


//usando array.filter

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(valor){
    return valor > 18 
})

console.log(maiores)

//usando array.reduce

let nota = [9, 5, 6]

let soma = nota.reduce(function(pegaNum, somaNum){
    return pegaNum + somaNum
})

console.log(soma)


//usando forEach

let livros = ["O poder do Agora", "Capitães da Areia", "A arte de ser imperfeito"]

let melhores = livros.forEach(function(elemento){
    console.log("Livro: " + elemento)
})

