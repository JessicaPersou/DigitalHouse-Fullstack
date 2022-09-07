var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

// Seu loop aqui:

for(let i = 0; i < listaDeCarros.length; i++){
    console.log("Nome do Carro: ", listaDeCarros[i])
}

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

//seu loop aqui
for( let i = 0; i < listaDeLucro.length; i++){
    lucroTotal += listaDeLucro[i]
}

console.log(lucroTotal)

var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

//seu loop aqui:
for(let i = 0; i < listaDeGanhos.length; i++){
    // console.log(listaDeGanhos[i])
    if(listaDeGanhos[i] < 0){
        totalNegativos += 1
    }
}

console.log(totalNegativos)