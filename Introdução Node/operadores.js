let valor1 = 5
let valor2 = 5

let soma = valor1 + valor2
let sub = valor1 - valor2
let div = valor1 / valor2
let multi = valor1 * valor2

let v1 = 81
let v2 = 5
let resto =  v1 %  v2

let expo =  valor1 **  valor2
let concatenar =  (valor1  ,  valor2)
valor1++
valor2--

console.log( "OPERAÇÕES DE EXPRESSÃO:  ")

console.log( "Soma -> 5 + 5 = " ,  soma  ) 
console.log(  "Subtração -> 5 - 5 = "  ,  sub   )
console.log(  "Divisão -> 5 / 5 = "  , div   )
console.log(  "Multiplicação -> 5 * 5 = "  ,  multi  )
console.log(  "Resto da Div -> 81 % 5 = "  ,  resto  )
console.log( "Exponenciação -> 5 ** 5 = " ,  expo  )
console.log( "Concatenar -> 5  , 5 = " ,  concatenar  )
console.log( "Incremento -> 5  = " ,  valor1 )
console.log( "Decremento -> 5  = " , valor2  )


console.log( "OPERADORES DE COMPARAÇÃO:  ") // pode ser usador para comparar qualquer tipo de valor, string, array, float e int ,
let valores1 = 5
let valores2 = 5



if( valor1 ===  valor2){
    console.log( "Identico (===) ")
}

if( valor1 ==  valor2){
    console.log( "Igual (==) ")
}

if( valor1 !==  v1){
    console.log( "Diferente (!=)  ")
}

if( v1 >  valor2){
    console.log( "Maior (>) ")
}

if( valor1 <  v1){
    console.log( "Menor (<) ")
}

if( v1 >=  valor2){
    console.log( "Maior igual (>=) ")
}

if( valor1 <=  v1){
    console.log( "Menor igual (<=) ")
}


console.log( "OPERADORES DE LÓGICOS:  ") 

if( valor1 ==  valor2 &&  v1 >  v2){
    console.log( "Operador AND && (Dois valores tem que ser verdadeiros!) ")
}
if( valor1 ==  valor2 ||  v1 <  v2){
    console.log( "Operador OR || (Um dos valores verdadeiros!) ")
}
if(! v1 <  v2){
    console.log( "Operador NOT ! (Valores Falsos!) ")
}

console.log( "OPERADORES CAST:  ") // ele força a conversão de dados seja qual for 



if( valor1 ===  v2){
    console.log( "Operador de Cast verificando se é identico!")
}


console.log( "OPERADORES DE ATRIBUIÇÃO:  ")

console.log( "Soma += "  ,  soma) // como se fosse o número operado pelo operador dele novamente 

console.log( "Subtração -= "  ,  sub)

console.log( "Divisão /= "  ,  div)

console.log( "Multiplicação *= "  ,  multi)

console.log( "Resto da divisão %= "  ,  resto)


console.log( "OPERADORES DE TERNÁRIO:  ") // pode ser usado com qualquer valor
console.log( 20 > 10 ? "Verdadeiro": "Falso")

console.log( 20 == 10 ? "Verdadeiro": "Falso")