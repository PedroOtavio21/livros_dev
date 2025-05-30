function verPromocao(){
    // Entrada de dados
    const inProduto = document.getElementById('inProduto')
    const inPreco = document.getElementById('inPreco')
    const outProduto = document.getElementById('outProduto')
    const outPromo = document.getElementById('outPromo')
    const outValorProdutoPromo = document.getElementById('outValorProdutoPromo')

    const produto = inProduto.value
    const preco = inPreco.value

    const promoProduto = preco / 2
    const resultado = (2 * preco + promoProduto)

    outProduto.textContent = produto
    outPromo.textContent = resultado.toFixed(2)
    outValorProdutoPromo.textContent = promoProduto.toFixed(2)
}

let btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', verPromocao)