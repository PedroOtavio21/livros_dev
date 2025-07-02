function confirmarDeposito () {
    const inValor = document.getElementById('inValor')
    const outTempo = document.getElementById('outTempo')
    const outTroco = document.getElementById('outTroco')

    const valor = Number(inValor.value)

    if (valor == 0 || isNaN(valor)) {
        alert('O valor deverá ser inserido corretamente')
        inValor.focus()
        return
    }

    if (valor < 0) {
        alert('Valor deverá ser positivo')
        inValor.focus()
        return
    }

    if (valor < 1.00) {
        alert('Valor inserido insuficiente')
        return
    } else if (valor < 1.75) {
        outTempo.textContent = 'Tempo: 30 min'
        outTroco.textContent = `Troco R$: ${(valor - 1.00).toFixed(2)}`
    } else if (valor < 3.00) {
        outTempo.textContent = 'Tempo: 60 min'
        outTroco.textContent = `Troco R$: ${(valor - 1.75).toFixed(2)}`
    } else {
        outTempo.textContent = 'Tempo: 120 min'
        outTroco.textContent = `Troco R$: ${(valor - 3.00).toFixed(2)}`
    }
}

const btConfirmarDeposito = document.getElementById('btConfirmarDeposito')
btConfirmarDeposito.addEventListener('click', confirmarDeposito)