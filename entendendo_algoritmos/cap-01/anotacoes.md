# Capítulo 1 - Introdução a Algoritmos

## Neste capítulo:
- Acesso aos fundamentos do conteúdo central do livro
- Primeiro algoritmo de busca (pesquisa binária)
- Tempo de execução de algoritmos (notação Big O)
- Prática comum de algoritmos (recursão)

---

## Introdução - O que é um algoritmo?

O que é um algoritmo?
- Conjunto de instruções que realizam a solução de um determinado problema
- Imagine como uma receita para se fazer um bolo

Cada algoritmo tem seu próprio caso de uso, sendo mais eficaz em certos contextos. Cabe ao desenvolvedor escolher o mais adequado.

Ao longo do livro, serão mostrados algoritmos de ampla aplicabilidade, em problemas do mundo real:
- Banco de dados
- Inteligência Artificial
- Buscas, entre outros

---

## Pesquisa Binária

Algoritmo utilizado para encontrar um elemento dentro de uma lista **ordenada**.

### Exemplos de uso:
- Encontrar o nome de uma pessoa em uma agenda telefônica
- Encontrar uma palavra em um dicionário
- Verificar se uma conta está cadastrada em um site

### Funcionamento:
- Lista deve estar **ordenada**
- Deve haver um **valor alvo** a ser buscado
- A cada passo, o algoritmo **chuta o valor do meio** da lista
- Elimina **metade** da lista a cada tentativa
- Retorna a **posição** do valor ou `null` (caso não encontrado)

### Eficiência:
- Pesquisa binária em uma lista de `n` elementos leva, em média:  
  **log₂(n)** tentativas

#### Exemplo: lista com 100 elementos
| Tentativa | Elementos Restantes |
|-----------|---------------------|
| 1ª        | 50                  |
| 2ª        | 25                  |
| 3ª        | 13                  |
| 4ª        | 7                   |
| 5ª        | 4                   |
| 6ª        | 2                   |
| 7ª        | 1                   |

---

## Tempo de Execução

Cada algoritmo possui um **tempo de execução** específico, que cresce de forma diferente com o número de elementos (entrada).

### Exemplos:
- Pesquisa simples → tempo **linear**
- Pesquisa binária → tempo **logarítmico**

> A rapidez de um algoritmo não é medida em segundos, mas sim pelo **número de operações necessárias**.

---

## Notação Big O

Forma de medir e comparar o desempenho dos algoritmos, especialmente no **pior caso**.

### Sintaxe:
- Letra **O** maiúscula
- Seguido da **função de complexidade** entre parênteses

### Exemplo de casos:
- **Melhor caso** (encontrar de primeira): `O(1)`
- **Pior caso** (verificar todos): `O(n)`

### Tabela de exemplos:

| Algoritmo                  | Complexidade Big O     |
|---------------------------|------------------------|
| Pesquisa simples           | O(n)                   |
| Pesquisa binária           | O(log n)               |
| Quick sort (visto depois)  | O(n log n)             |
| Ordenação por seleção      | O(n²)                  |
| Caixeiro viajante          | O(n!)                  |

---

## Recapitulação

- A **pesquisa binária** é *muito mais rápida* que a **pesquisa simples**
- `O(log n)` é mais rápido que `O(n)` — e se torna **mais eficiente** quanto maior for a lista
- A rapidez de um algoritmo **não é medida em segundos**
- O **tempo de execução** depende do **crescimento do número de operações**
- Esse crescimento é expresso na **notação Big O**