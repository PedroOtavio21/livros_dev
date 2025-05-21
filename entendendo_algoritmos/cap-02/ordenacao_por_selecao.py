from busca_menor import buscaMenor

def ordenacaoporSelecao(arr): # 1
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenor(arr) # 2
        novoArr.append(arr.pop(menor))
    return novoArr

print(ordenacaoporSelecao([5, 3, 6, 2, 10]))

# 1 - Ordenações em um array
# 2 - Encontra o menor elemento do array e adiciona ao novo array