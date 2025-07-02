function verificarTriangulo() {
    const inLadoA = document.getElementById('inLadoA')
    const inLadoB = document.getElementById('inLadoB')
    const inLadoC = document.getElementById('inLadoC')
    const outCondicao = document.getElementById('outCondicao')
    const outTipo = document.getElementById('outTipo')

    outCondicao.textContent = ''
    outTipo.textContent = ''

    const ladoA = Number(inLadoA.value)
    const ladoB = Number(inLadoB.value)
    const ladoC = Number(inLadoC.value)

    if ((ladoA == 0 || isNaN(ladoA)) || (ladoB == 0 || isNaN(ladoB)) || (ladoC == 0 || isNaN(ladoC))) {
        alert('Valores inseridos em capos são inválidos')
        inLadoA.focus()
        return
    }

    if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
        alert('Valores inseridos deverão ser positivos')
        inLadoA.focus()
        return
    }

    let podeSerTriangulo = false

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        podeSerTriangulo = true
        outCondicao.textContent = 'Lados podem formar um triângulo'
    } else {
        outCondicao.textContent = 'Lados NÃO podem formar um triângulo'
    }

    if (podeSerTriangulo) {
        if (ladoA == ladoB == ladoC) {
            outTipo.textContent = 'Tipo: Equilátero'
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outTipo.textContent = 'Tipo: Isóceles'
        } else {
            outTipo.textContent = 'Tipo: Escaleno'
        }
    }
}

const btVerificarLados = document.getElementById('btVerificarLados')
btVerificarLados.addEventListener('click', verificarTriangulo)