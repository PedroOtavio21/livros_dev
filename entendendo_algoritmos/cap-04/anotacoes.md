# Capítulo 4 - Quicksort

## Neste capítulo:

- Você irá se deparar com problemas, ocasionalmente, que não podem ser resolvidos com um algoritmo de seu conhecimento. Porém, em casos assim, você utiliza da técnica **dividir para conquistar**, uma das mais importantes para a solução de algoritmos.

- Você conhecerá também o **quicksort**, um algoritmo de ordenação elegante que é utilizado com frequência. Este algoritmo utiliza da técnica *dividir para conquistar*.

---

Quando você se deparar com um problema novo, não terá motivos para ficar abalado. Em vez disso, poderá se perguntar:

> "Será que posso resolver este problema usando a técnica de dividir para conquistar?"

---

## Dividir para conquistar

Os algoritmos **dividir para conquistar** (DC) são **recursivos**. Assim, para resolver um problema utilizando DC, você deverá seguir dois passos:

1. Descubra o **caso-base**, que deve ser o *caso mais simples possível*.
2. **Divida ou diminua seu problema** até que ele se torne o *caso-base*.

> O algoritmo DC não é um simples algoritmo que você aplica em um problema, mas sim **uma maneira de se pensar sobre o problema**.

---

### Exemplo - Somar todos os números de um array

Você deve somar todos os números e retornar o valor total. Isto é tranquilo de se fazer com um loop.

```py
def soma(lista):
    total = 0
    for x in lista:
        total += x
    return total

print(soma([1, 2, 3, 4]))
```

Mas e em caso de realizar este problema com **recursão**?

**Passo 1: Descubra o caso base**

*Qual seria o array mais simples* que você poderia obter?

- Um array com nenhum elemento, retornando 0

- Um array com um único elemento, retornando o próprio elemento

**Passo 2: Diminua o problema a cada chamada recursiva** 

Você deve chegar o mais próximo possível do array vazio a cada chamada. Considere o exemplo:

```py
soma([2, 4, 6]) = 12
```

Isso pode ser reescrito como:

```py
2 + soma([4, 6]) = 12
```

Ambos os casos retornam o mesmo resultado. Porém, na segunda versão, estamos usando um array menor dentro da função `soma`.

- Ou seja, você está **diminuindo o tamanho do problema!**

**DICA**:

- Quando estiver escrevendo uma *função de recursão* que envolva um **array**, o caso-base será, muitas vezes, um **array vazio** ou um **array com apenas um elemento**. Se estiver com problemas, use este caso como base.