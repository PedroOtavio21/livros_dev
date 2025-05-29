def quicksort(array):
    if len(array) < 2:
        return array # 1
    else:
        pivo = array[0] # 1
        menores = [i for i in array[1:] if i <= pivo] # 3
        maiores = [i for i in array[1:] if i > pivo] # 4
        return quicksort(menores) + [pivo] + quicksort(maiores)

print(quicksort([10, 5, 2, 3]))

"""
1 - Base: arrays com 0 ou 1 elemento já estão "ordenados"
2 - Caso recursivo
3 - Subarray de todos os elementos menores que o pivô
4 - Subarray de todos os elementos maiores que o pivô
"""