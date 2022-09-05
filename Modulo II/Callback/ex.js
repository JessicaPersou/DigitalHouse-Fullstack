// function dobro(num1) {
//    return num1 * 2;
// }

// function triplo(num1) {
//     return num1 * 3;
// }

// let aplicar = (num, callback) => {
//     return callback(num);
// }

// console.log(aplicar(2, triplo))

function somar(n1,n2){
    return n1+n2;
}

function subtrair(n1,n2){
    return n1-n2;
}

function multiplicar(n1,n2){
    return n1*n2;
}

function dividir(n1,n2){
    return n1/n2;
}

let calculadora = (n1,n2, callback) => {
    return callback(n1,n2);
}

console.log(calculadora(5,2, somar))