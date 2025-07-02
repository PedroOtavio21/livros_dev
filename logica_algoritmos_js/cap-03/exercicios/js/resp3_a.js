function verificarParImpar(){
    const inNumero = document.getElementById('inNumero')
    const outResposta = document.getElementById('outResposta')

    const numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert('Informe o número corretamente.')
        inNumero.focus()
        return
    }

    if(numero < 0){
        alert('O valor inserido deverá ser positivo.')
        inNumero.focus()
        return
    }

    if(numero % 2 == 0){
        outResposta.textContent = `Resposta: ${numero} é Par`
    } else {
        outResposta.textContent = `Resposta: ${numero} é Ímpar`
    }
}

const btVerificar = document.getElementById('btVerificar').addEventListener('click', verificarParImpar)