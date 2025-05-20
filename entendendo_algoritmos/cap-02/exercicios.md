# Exercícios - Capítulo 2

## 2.1 Suponha que você esteja criando um aplicativo para acompanhar suas finanças. Todo os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?

Resposta: Levando em consideração que haverá *muitas inserções* e *poucas leituras*, o ideal para esta aplicação será utilizar uma lista, devido o tempo de execução constante para inserções e linear para leitura.

## 2.2 Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinhá-los. Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/eliminações e arrays são bons para acesso aleatório. O que fazer neste caso?)

Resposta: Como a estrutura deverá ser algo onde o primeiro elemento que entra é o primeiro a sair (FIFO), a ideia seria utilizar da fila para solucionar com problema, devido sua eficácia para operações de inserção e deleção.

## 2.3 Vamos analizar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome do usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para procurar um nome na lista. A pesquisa binária requer um acesso aleatório - você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista com um array ou uma lista encadeada?

Resposta: Implementaria a solução com um array. Devido aos arrays serem imprescindíveis para leituras de um conjunto de elementos, devido ao acesso aleatório, permitindo um tempo de execução O(1).

## 2.4 As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

Resposta:
1 - A desvantagem seria o seguinte: caso uma lista esteja cheia, a inserção será interrompida. Além disso, você terá de mudar o posicionamento da lista para outro local da memória, para que assim todos os elementos fiquem juntos.
2 - Sempre que você adiciona um novo usuário, todos os elementos anteriores ao novo usuário terão de ser movidos de lugar, pois nos arrays, os elementos estão postos um ao lado do outro.

## 2.5 Na verdade, o Facebook não usa nem arrays nem listas encadeadas para armazenar informações. Vamos considerar uma estrutura de dados híbrida: um array de listas encadeadas. Você tem um array de 26 slotes. Cada slot aponta para uma lista encadeada. Por exemplo, o primeiro slot do array aponta para uma lista encadeada que contém os usuários que começam com a letra A. O segundo slot aponta para a lista encadeada que contém os usuários que começam com a letra B, e assim por diante. Suponha que Adit B se inscreva no Facebook e você queira adicioná-lo à lista. Você vai ao slot 1 do array, a seguir para a lista encadeada do slot 1, e adiciona Adit B no final. Agora, suponha que você queira procurar o Zakhir H. Você vai ao slot 26, que aponta para a lista encadeada de todos os nomes começados em Z. Então, procura pela lista até encontrar o Zakhir H. Compare esta estrutura híbrida com arrays e listas encadeadas? Você não precisa responder dando o tempo de execução Big(O), apenas diga se a nova estrutura de dados é mais rápida ou mais lenta do que os arrays e as listas encadeadas.

Resposta do livro: Para buscas - mais lenta do que arrays, mais rápido do que listas encadeadas. Para inserções, mais rápida do que arrays, mesmo tempo de listas encadeadas. 
Logo, é mais lenta para buscas do que arrays, porém mais rápida ou igual às listas encadeadas para tudo.