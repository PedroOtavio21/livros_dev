# Exercícios - Capítulo 3

## 3.1 Suponha que eu forneça uma pilha de chamada como essa: Primeiro elemento da pilha: função sauda("maggie"), Segundo elemento da pilha: função sauda2("maggie"). Que informações você pode retirar, baseando-se apenas nesta pilha de chamada? Agora, vamos ver esta pilha de chamada sendo executada como uma função recursiva.

Resposta: A pilha de execução funciona da seguinte forma:
- A função sauda é executada, salvando a variável maggie
- A função sauda chama a função sauda2 em sua execução
- Até a função sauda2 terminar sua execução, a função sauda ficará suspensa
- Ao final, a função sauda deverá finalizar sua execução, finalizando a pilha

## 3.2 Suponha que você acidentalmente escreva uma função recursiva que fique executando infinitamente. Como você viu, seu computador aloca memória na pilha para cada chamada de função. O que acontece com a pilha quando a função recursiva fica executando infinitamente?

Resposta: O programa além de executar infinitamente (com a ausência do caso base), ocorrerá um erro em algum momento, ocorre um erro de overflow/estouro na pilha