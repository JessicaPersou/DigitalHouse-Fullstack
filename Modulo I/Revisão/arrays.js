const notas = [7.2,7.5,8.4,6.3,9.1,4.5,6.8]

console.log(notas[0])
console.log(notas.indexOf(8.4)) // mostar o indice da nota escrita

//ler array com for each escrevendo menos código
notas.forEach(notas /*elemento*/  =>{
    if(notas/*elemento*/  < 7){ // if usado para fazer impressão de forma seletiva
        console.log(notas/*elemento*/ )
    }
})

