// const notas = [7.2,7.5,8.4,6.3,9.1,4.5,6.8]

// console.log(notas[0])
// console.log(notas.indexOf(8.4)) // mostar o indice da nota escrita

// //ler array com for each escrevendo menos código
// notas.forEach(notas /*elemento*/  =>{
//     if(notas/*elemento*/  < 7){ // if usado para fazer impressão de forma seletiva
//         console.log(notas/*elemento*/ )
//     }
// })

// let a1 = [1,2,3]
// let a2 = [4,5]

// function moverItem(arrayA, arrayB){
//     console.log(arrayA,arrayB)
//     let ultimo = arrayA.pop()
//     console.log(arrayA)
//     console.log(ultimo)
//     arrayB.push(ultimo)
//     console.log(arrayB)
// }

// console.log(moverItem([1,2,3],[4,5]))

// Seu código vem aqui
// function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
//     if(nomesDosPresentes.includes(nomeDoAluno)){
//         nomesDosPresentes.indexOf(nomeDoAluno)
//         return true
//     }else{
//         return false
//     }
// }

// let nomes = ["Maria", "Joana"]

// console.log(estavaPresenteNaAula("Joana",nomes))


/*function transformaParaMaiusculo(palavras){
    for(let i = 0; i < palavras.length; i++){
        let novo = palavras[i].toUpperCase()
        console.log(novo)
        
    }
}


transformaParaMaiusculo(["gato","cachorro","tartaruga"])
console.log()

*/

let text = ["Hello World!","Hello World!", "Hello World!"];
let result 
function transformaParaMaiusculo(text){
    result = text.toUpperCase()
}


console.log(result)