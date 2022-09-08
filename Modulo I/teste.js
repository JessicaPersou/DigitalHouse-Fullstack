// function transformaParaMaiusculo(palavras){
//     let novo = []
//     for(let i = 0; i < palavras.length; i++){
//         novo.push(palavras[i].toUpperCase())
        
//     }
//     return novo
// }

// function transformaParaMaiusculo(palavras)
// {
//     for (let i = 0, j = palavras.length; i < j; i++) {
//          palavras[i] = palavras[i].toUpperCase();
//     }

//     return palavras;
// }


// console.log(transformaParaMaiusculo(["gato","cachorro","tartaruga"]))

var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

let morador = [0,1,2,3,4,5,6,7]
let soma = -1
for(let i = 0; i < moradores.length; i++){

    soma = soma +1
    //console.log(soma)
     if(soma % 2 == 0){
        console.log('O morador ' + moradores[i] + 'pode usar o elevador')
     }
}

