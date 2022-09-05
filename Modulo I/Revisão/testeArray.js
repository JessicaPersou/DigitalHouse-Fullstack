let sabores = ["Morango"]

function agregandoSabor(novo, atual){
    novoSabor = sabores
    atual = novoSabor.push(novo)
    
    return atual
}

agregandoSabor(["Baunilha","Chocolate"], sabores)

console.log(sabores)