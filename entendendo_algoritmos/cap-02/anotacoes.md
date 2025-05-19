# Capítulo 2 - Ordenação por Seleção

## Neste capítulo:
- Você conhecerá *arrays* e *listas encadeadas* — dois tipos de estrutura básica. Este capítulo explana os **prós** e **contras** de ambas as estruturas para que possa decidir qual é a **ideal para o seu algoritmo**.
- Você aprenderá a fazer o seu primeiro *algoritmo de ordenação*. Este capítulo lhe apresentará a **ordenação por seleção**, um trampolim para o **quicksort**, que será abordado no próximo capítulo.

---

## Como funciona a memória

Imagine que você deseja guardar suas 3 roupas limpas e passadas dentro do seu guarda-roupa. Cada gaveta poderá guardar **apenas uma** de suas roupas.

> Isso se assemelha ao funcionamento da memória de um computador:  
> O computador é como um conjunto de **gavetas numeradas**, onde cada uma possui seu **próprio endereço**.

Sempre que você deseja armazenar um item na memória, você:
1. Solicita um espaço ao computador
2. Recebe um **endereço de memória**
3. Armazena o item neste local

Se desejar armazenar **múltiplos itens**, há duas formas comuns:
- **Arrays**
- **Listas encadeadas**

---

## Arrays e Listas Encadeadas

Suponha que você deseja guardar uma lista de itens como:
- Lista de tarefas
- Lista telefônica
- Alunos matriculados

Nesses casos, você pode usar **arrays** ou **listas encadeadas**. Mas qual usar?

### Arrays

Nos arrays:
- Os elementos ficam **contiguamente alocados** na memória (lado a lado)
- É possível acessar **qualquer elemento instantaneamente**

#### Problema:
Se a posição seguinte da memória estiver **ocupada**, e você tentar adicionar um novo item:
- A lista **precisará ser movida** para um novo espaço que caiba todos os itens + o novo
- Isso custa desempenho e memória

#### Solução parcial:
Reservar **mais espaço do que o necessário** inicialmente:
- Pode haver **desperdício** de memória
- Ou ainda **não ser suficiente**, obrigando a mover novamente

#### Vantagem:
- **Acesso rápido e direto** a qualquer elemento pelo índice

### Listas Encadeadas

Nas listas encadeadas:
- Os elementos **não precisam estar juntos na memória**
- Cada item armazena o **endereço do próximo elemento**

#### Vantagem:
- **Nunca precisa mover** os elementos, mesmo ao adicionar novos

#### Desvantagem:
- **Acesso a elementos específicos é lento**
- Para encontrar um item, é necessário **percorrer um por um** até achá-lo

---

### Terminologia

Em arrays, a convenção é:
- O **primeiro elemento** → índice `0`
- O **último elemento** → índice `n - 1`

Essa nomenclatura é comum em várias linguagens de programação.

---

