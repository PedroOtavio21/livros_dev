# Exercícios - Capítulo 4

## 4.1 Escreva o código para a função soma, vista anteriormente

Resposta:

```py
def soma(lista):
    if len(lista) == 0:
        return 0
    else:
        return lista[0] + soma(lista[1:])
```

## 4.2 Escreva uma função recursiva que conte o número de itens em uma lista

Resposta:

```py
def num_lista(lista):
    if len(lista) == 0:
        return 0
    else:
        return 1 + num_lista(lista[1:])
```

## 4.3 Encontre o valor mais alto em uma lista

Resposta: 

```py
def max_lista(lista):
    if len(lista) == 2:
        return lista[0] if lista[0] > lista[1] else lista[1]
    sub_max = max_lista(lista[1:])
    return lista[0] if lista[0] > sub_max else sub_max
```

## 4.4 Você se lembra da pesquisa binária do capítulo 1? Ela também é um algoritmo do tipo dividir para conquistar. Você consegue determinar o caso-base e o caso recursivo para a pesquisa binária?

Resposta: O caso base seria um array de um único item. Se o item que você procura é o mesmo do array, você o encontrou. Se não, não está no array. No caso recursivo da pesquisa binária, você divide o array pela metade, joga o restante fora e executa uma pesquisa binária na outra metade.