function repetirFrutas() {
    const inFruta = document.getElementById('inFruta')
    const inNumero = document.getElementById('inNumero')
    const outFrutas = document.getElementById('outFrutas')

    const fruta = inFruta.value 
    const numero = Number(inNumero.value)
    let frutas = ''
    
    if (fruta === '' || numero === 0 || isNaN(numero)) {
        alert('Conteúdo inserido é inválido.')
        inFruta.focus()
        return
    }

    frutas = frutas + fruta

    if (numero > 1) {
        for (let i = 1; i < numero; i++) {
            frutas = frutas + ' * ' + fruta
        }
    }
    
    outFrutas.textContent = frutas
}

const btRepetirFrutas = document.getElementById('btRepetirFruta')
btRepetirFrutas.addEventListener('click', repetirFrutas)