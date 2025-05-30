function mostrarPromo(){
    // Entrada de dados
    const inMedicamento = document.getElementById('inMedicamento')
    const inPreco = document.getElementById('inPreco')

    // Conversão
    const medicamento = inMedicamento.value
    const preco = Number(inPreco.value) 
    
    // Processamento
    const promo = 2 * Math.floor(preco)

    // Saída de dados
    document.getElementById('outMedicamento').textContent = medicamento
    document.getElementById('outPromo').textContent = promo.toFixed(2)
}

const btMostrarPromocao = document.getElementById('btMostrarPromocao')
btMostrarPromocao.addEventListener('click', mostrarPromo)