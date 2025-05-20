# Exercícios – Capítulo 2

## 2.1 – Suponha que você esteja criando um aplicativo para acompanhar suas finanças. Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, revisará seus gastos. Você deve usar um array ou uma lista?

**Resposta:** Uma **lista encadeada**, pois:
- Haverá **muitas inserções**
- Poucas leituras
- Inserções são mais eficientes: `O(1)`

---

## 2.2 – Você está criando um app para anotar pedidos em um restaurante. Os garçons adicionam pedidos no fim da fila, e os chefes removem do início. Qual estrutura usar?

**Resposta:** Utilize uma **fila**, implementada com **lista encadeada**.  
- Modelo FIFO (First In, First Out)
- Inserções e remoções rápidas: `O(1)`

---

## 2.3 – Imagine que o Facebook guarda uma lista de usuários. Para acessar a conta, faz-se uma pesquisa binária por nome. Qual estrutura é mais adequada?

**Resposta:** Um **array**, pois:
- A pesquisa binária exige **acesso aleatório**
- Arrays permitem leitura direta: `O(1)`

---

## 2.4 – Suponha que o Facebook use arrays para armazenar usuários. Quais são as desvantagens?

**Resposta:**
1. Se a lista estiver **cheia**, a inserção falha.  
   Será necessário alocar **novo espaço na memória**.
2. Para manter a ordem, os elementos podem precisar ser **movidos**.

---

## 2.5 – O Facebook usa uma estrutura híbrida: um **array de listas encadeadas** (cada posição para uma letra do alfabeto). Como ela se compara às demais?

**Resposta do livro:**
- **Buscas:** mais **lenta** que arrays, mais **rápida** que listas encadeadas.
- **Inserções:** mais **rápida** que arrays, igual às listas encadeadas.

**Resumo:**
- Estrutura híbrida tem **bom equilíbrio** entre leitura e inserção.