function verificarVelocidade(){
    const inVelPermitida = document.getElementById('inVelPermitida')
    const inVelCondutor = document.getElementById('inVelCondutor')
    const outSituacao = document.getElementById('outSituacao')

    const velPermitida = Number(inVelPermitida.value)
    const velCondutor = Number(inVelCondutor.value)

    if (velPermitida == 0 || isNaN(velPermitida)) {
        alert('Insira os dados de velocidade permitida corretamente.')
        inVelPermitida.focus()
        return
    }

    if (velCondutor == 0 || isNaN(velCondutor)) {
        alert('Insira os dados do condutor corretamente.')
        inVelCondutor.focus()
        return
    }

    if (velPermitida < 0 || velCondutor < 0) {
        alert('Dados inseridos não podem ser negativos.')
        inVelPermitida.focus()
        return
    }

    if (velCondutor <= velPermitida){
        outSituacao.textContent = 'Situação: Sem Multa'
    } else if (velCondutor <= velPermitida + (velPermitida * 0.2)) {
        outSituacao.textContent = 'Situação: Multa Leve'
    } else {
        outSituacao.textContent = 'Situação: Multa Grave'
    }
}

const btVerificarVel = document.getElementById('btVerificarVel')
btVerificarVel.addEventListener('click', verificarVelocidade)