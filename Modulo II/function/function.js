function triplo (number){
    return 3*number
}

let n = 5

triplo(n);

//

// function calcularValorDevido(pesoDaRoupaSuja){
//     return pesoDaRoupaSuja * 5
// }

// console.log(calcularValorDevido(5))

// //
// function calcularValorDevido(pesoDeRoupaSuja){
//     return (pesoDeRoupaSuja * 3.00) + 10.0  
// }
// console.log(calcularValorDevido(3))

//
// function passoAPasso(){
//     for(let i = 0; i < 5; i++){
//         console.log(i)
//     }
// }
// passoAPasso()

// function osPares(){
//   for( let i = 1 ; i <= 6 ; i++){
//     let x = i
//         if(x % 2 == 0){ 
//             console.log("O numero " + i + " é par")
//         }
//     }
// }

// osPares()

let cont = 0
function somaDosPares(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
             return cont +=i
             // console.log(cont)
        }
        
    }
}


console.log(somaDosPares(6))