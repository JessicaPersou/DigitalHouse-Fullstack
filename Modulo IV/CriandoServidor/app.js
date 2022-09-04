const http = require('http');

http.createServer((require, response) => {

    response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});// resposta ao status http e o tipo de conteúdo que a resposta envia ao cliente, nesse caso está sem formatação
    switch(require.url){
        case "/":
            response.end("Página Inicial!");
            break;
        case "/contato":
            response.end("Página de Contato!");
            break;
        default:
            response.end("Essa Página é Desconhecida!");
            break;
    }
    
    // response.end("Bem vindo ao meu servidor, dessa vez estou conseguindo estudar!"); // sempre deve ser uma string

}).listen(3000, "localhost");