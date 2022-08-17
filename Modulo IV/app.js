const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Bem vindo ao meu servidor");
}).listen(3000)