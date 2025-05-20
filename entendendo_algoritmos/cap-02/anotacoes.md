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

### Tempo de execução em operações comuns:

| Operação   | Arrays | Listas encadeadas |
|------------|--------|-------------------|
| Leitura    | O(1)   | O(n)              |
| Escrita    | O(n)   | O(1)              |

O(n) = Tempo de execução linear
O(1) = Tempo de execução constante

### Terminologia

Em arrays, a convenção é:
- O **primeiro elemento** → índice `0`
- O **último elemento** → índice `n - 1`

Essa nomenclatura é comum em várias linguagens de programação.

---

## Inserindo algo no meio da lista

O que seria melhor se você quisesse *inserir elementos* no **meio** de uma lista: **arrays** ou **listas encadeadas**?

Em listas encadeadas, basta apenas **mudar o endereço** que o **elemento anterior ao adicionado está apontando**.

Em arrays, é necessário **mover todos os itens que estão abaixo** do endereço de inserção. Caso não haja espaço, pode ser necessário mover **toda a lista para um novo endereço** na memória.

**Conclusão:** listas encadeadas são mais adequadas se você precisa inserir um novo elemento no meio da lista.

---

## Deleções

E em caso de deletar um elemento?

Novamente, é **mais tranquilo** realizar esta tarefa com **listas encadeadas**, pois é necessário apenas **mudar o endereço** para o qual o elemento anterior aponta.  
Já em arrays, **todos os elementos precisam ser movidos** após a exclusão.

**OBS.:** Ao contrário do que ocorre com as inserções, a **eliminação de elementos sempre obterá sucesso**. A inserção poderá falhar quando **não houver espaço suficiente na memória**.

### Tabela comparativa de desempenho

| Operação   | Arrays | Listas encadeadas |
|------------|--------|-------------------|
| Leitura    | O(1)   | O(n)              |
| Escrita    | O(n)   | O(1)              |
| Eliminação | O(n)   | O(1)              |

---

## Qual utilizar?

A escolha entre **arrays** e **listas encadeadas** depende do cenário de uso.

- **Arrays** são amplamente utilizados por permitirem o **acesso aleatório**.
- **Listas encadeadas** são ideais para inserções e deleções frequentes, especialmente no meio da estrutura.

### Tipos de acesso à memória

#### Acesso sequencial

Significa ler os elementos **um por um**, começando pelo primeiro.

- **Listas encadeadas** só funcionam com acesso sequencial.
- Para **ler o décimo elemento**, é necessário **percorrer os nove anteriores**.

#### Acesso aleatório

Permite **pular direto** para qualquer posição, como o décimo elemento, por exemplo.

- **Arrays** são ideais para esse tipo de acesso.
- Muitos algoritmos e estruturas se beneficiam dessa característica.

---