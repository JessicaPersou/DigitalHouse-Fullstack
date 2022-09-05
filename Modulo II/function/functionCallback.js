function adicionarHttp(url) {
    let urlCorreta =  ["http://" + url]
    return urlCorreta
}

function processar(url,callback){
   
}


//console.log(processar("www.google.com", adicionarHttp))
console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp))