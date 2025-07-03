function listarChinchilas() {
    const inChinchilas = document.getElementById('inChinchilas')
    const inAnos = document.getElementById('inAnos')
    const outChinchilas = document.getElementById('outChinchilas')

    outChinchilas.textContent = ''

    let numChinchilas = Number(inChinchilas.value)
    const numAnos = Number(inAnos.value)
    let listaChinchilas = ''

    if (isNaN(numChinchilas) || numChinchilas <= 0 || isNaN(numAnos) || numAnos <= 0) {
        alert('Por favor, insira valores numéricos válidos e positivos para Chinchilas e Anos.')
        inChinchilas.focus()
        return
    }

    if (numChinchilas < 2) {
        alert('A quantidade inicial de Chinchilas deve ser de no mínimo 2 (um casal).')
        inChinchilas.focus()
        return
    }

    for (let i = 1; i < numAnos; i++) {
        listaChinchilas += `${i}º Ano: ${numChinchilas} Chinchilas \n`

        if (i < numAnos) { 
            numChinchilas *= 3
        }
    }

    outChinchilas.innerText = listaChinchilas
    outChinchilas.style.fontFamily = 'monospace'
}

const btListarChinchilas = document.getElementById('btListarChinchilas')
btListarChinchilas.addEventListener('click', listarChinchilas)