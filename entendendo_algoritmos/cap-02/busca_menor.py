"""
- O Algoritmo aplicado não resolve o mesmo problema da seleção de lista de músicas
- Porém, resolve algo semelhante, ordenando um array do menor para o maior elemento.
"""

def buscaMenor(arr):
    menor = arr[0] # 1
    menor_indice = 0 # 2
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i
    return menor_indice

# 1 - Armazena o menor valor
# 2 - Armazena o índice do menor valor