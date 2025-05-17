def pesquisa_binaria(lista, item):
    baixo = 0 # 1
    alto = len(lista) - 1 # 1

    while baixo <= alto: # 2
        meio = (baixo + alto) // 2 # 3
        chute = lista[meio]
        if chute == item: # 4
            return meio
        if chute > item: # 5
            alto = meio - 1
        else: # 6
            baixo = meio + 1
    return None # 7

minha_lista = [1, 3, 5, 7, 9] # 8

print(pesquisa_binaria(minha_lista, 3)) # 9
print(pesquisa_binaria(minha_lista, -1)) # 10

"""
1 - As variáveis "baixo" e "alto" representam o limite de busca do item que você deseja encontrar
2 - Enquanto ainda não encontrar o elemento...
3 - ... verifica o elemento central
4 - Encontra o item
5 - O chute foi muito alto
6 - O chute foi muito baixo
7 - O item não existe na lista
8 - Vamos testá-lo!
9 - Lembre-se, as listas começam em 0. O próximo endereço tem indice 1.
10 - "None" significa nulo em Python. Ele indica que o item não foi encontrado.
"""