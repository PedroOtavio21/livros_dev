# Capítulo 1 - Introdução a algoritmos

Neste capítulo:
- Acesso ao fundamentos do conteúdo central do livro
- Primeiro algoritmo de busca (pesquisa binária)
- Tempo de execução de algoritmos (notação Big O)
- Prática comum de algoritmos (recursão)

## Introdução - O que é um algoritmo?

O que é um algoritmo?
- conjunto de instruções que realizam um determinado problema. 
- imagine como uma receita para se fazer um bolo

Cada algoritmo tem o seu próprio caso de uso. Ou seja, são mais eficazes em certos casos do que outros, cabendo ao próprio desenvolvedor escolher qual será o melhor algoritmo.

Ao longo do livro, serão mostrados algoritmos de maior aplicabilidade, em diversos problemas do mundo real.
- Desde banco de dados, para IA, buscas e etc.

## Pesquisa binária

Algoritmo bastante utilizado para encontrar um determinado elemento dentro de uma lista (já ordenada anteriormente). 

Exemplos de casos de uso de uma "pesquisa binária":
- Encontrar o nome de uma pessoa em uma agenda telefônica
- Encontrar uma palavra em um dicionário
- Verificar se sua conta está cadastrada em um site (como o facebook)

Como funciona sua aplicação?
- Primeiro, é necessário que seja uma lista ordenada (se não, seu tempo de execução será diferente!)
- Além disso, é preciso que você tenha um valor/elemento a ser encontrado na lista
- Em seu "core", você sempre chuta um número intermediário e elimina metade dos números restantes em cada tentativa.
- A lista irá retornar sua localização, ou então Null

Geralmente, em uma lista de n números, a pesquisa binária leva em torno de:
- Log de n na base 2!

### Exemplo de caso - 100 números
primeira tentativa - 50 números restantes
segunda tentativa - 25 números restantes
terceira tentativa - 13 números restantes
quarta tentativa - 7 números restantes
quinta tentativa - 4 números restantes
sexta tentativa - 2 números restantes
sética tentativa - 1 número restante