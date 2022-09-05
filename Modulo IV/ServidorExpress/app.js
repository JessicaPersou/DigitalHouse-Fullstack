const express = require("express");

const app = express();

app.get("/contato", function(req,res){
    res.send({mensagem:"Estamos na página de contatos!", nome: "Jessica", profissao: "Programadora de Computadores"})
})


app.listen(3000, () => console.log("Servidor Rodando!"));