function calcularValor(){
    // Entrada de dados
    let inPreco = document.getElementById('inPreco').value
    let inTempo = document.getElementById('inTempo').value
    let outValor = document.getElementById('outValor')
    
    // Processamento
    const preco = Number(inPreco) 
    const tempo = Number(inTempo)

    let resultado = 0
    if (tempo > 15){
        const blocosDeTempo = Math.ceil(tempo / 15)
        resultado = blocosDeTempo * preco
        // Saída de dados
        outValor.textContent = resultado.toFixed(2)
    } else {
        resultado = preco
        // Saída de dados
        outValor.textContent = resultado.toFixed(2)
    }
}

let btCalcularValor = document.getElementById('btCalcularValor')
btCalcularValor.addEventListener('click', calcularValor)