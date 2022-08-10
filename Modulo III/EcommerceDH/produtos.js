function pedido(produtos, numeroPedido, valorTotal, dataPedido, metodoPagamento, previsaoEntrega, nrNotaFiscal, cliente, cupomDesconto){
    this.produtos = produtos;
    this.numeroPedido = numeroPedido;
    this.valorTotal = valorTotal;
    this.dataPedido = dataPedido;
    this.metodoPagamento = metodoPagamento;
    this.previsaoEntrega = previsaoEntrega;
    this.nrNotaFiscal = nrNotaFiscal;
    this.cliente = cliente;
    this.cupomDesconto = cupomDesconto;
}

modulo.export = Pedido;