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

### Exemplo de aplicação (Pesquisa Binária) - 100 números

- primeira tentativa  ->  50 números restantes
- segunda tentativa   ->  25 números restantes
- terceira tentativa  ->  13 números restantes
- quarta tentativa    ->  7 números restantes
- quinta tentativa    ->  4 números restantes
- sexta tentativa     ->  2 números restantes
- sética tentativa    ->  1 número restante

## Tempo de execução

Na área de desenvolvimento em geral, entende-se que cada algoritmo tem o seu próprio **tempo de execução**, onde crescem em taxas diferentes em tempo x número de elementos. 

Por exemplo, uma pesquisa simples possui um *tempo linear*, visto que realiza uma pesquisa de n por n elemento. Já na pesquina binária, ela possui um *tempo logarítmico*, por dividir sempre sua pesquisa pela metade.

Em suma: a medição de rapidez de um algoritmo não é medida em segundos, mas pelo crescimento do número de operações! Quanto menos operações, mais rápido o algoritmo!

## Notação Big O

Geralmente, para entender o tempo de execução de algoritmo, é utilizada uma notação chamada Notação Big O, na qual diz o quão rápido um algoritmo é. Desta forma, você pode comparar o número de operações entre os algoritmos, para escolher o melhor entre eles.

A notação se escreve da seguinte forma
- O grande "O"
- Seguido da quantidade de operações entre parêntesis 

Além disso, esta notação leva em consideração na pior das hipóteses. Ou seja, ela percorre toda a lógica do algoritmo em questão, tendo certeza que ela nunca terá um tempo de execução pior do que esperado, na pior das hipóteses. Agora, como assim pior e melhor?

- Melhor caso -> encontrar um elemento na primeira tentativa: O(1)
- Pior caso -> encontrar o elemento após percorrer por todos os elementos: O(n)

### Exemplos de notações Big O

- Pesquisa simples -> O(n)
- Pesquisa binária -> O(Log n)
- Quick sort (será visto mais afrente) -> O(n * log n)
- Ordenação por seleção -> O(n²)
- Um algoritmo muito lento (como o "caixeiro viajante")-> O(n!)

## Recaptulação

- A **pesquisa binária** é *muito mais rápida* do que a **pesquisa simples**.
- O(log n) é mais rápido do que O(n), e O(log n) **fica ainda mais rápido** conforme os elementos da lista aumentam.
- A **rapidez** de um algoritmo **não é medida em segundos**.
- O **tempo de execução** de um algoritmo é medido por meio de **seu crescimento**.
- O tempo de execução de algoritmos é expresso na **notação Big O**.