# Exercícios - Capítulo 3

## 3.1 Suponha que eu forneça uma pilha de chamada como essa: Primeiro elemento da pilha: função sauda("maggie"), Segundo elemento da pilha: função sauda2("maggie"). Que informações você pode retirar, baseando-se apenas nesta pilha de chamada? Agora, vamos ver esta pilha de chamada sendo executada como uma função recursiva.

Resposta: A pilha de execução funciona da seguinte forma:
- A função sauda é executada, salvando a variável maggie
- A função sauda chama a função sauda2 em sua execução
- Até a função sauda2 terminar sua execução, a função sauda ficará suspensa
- Ao final, a função sauda deverá finalizar sua execução, finalizando a pilha