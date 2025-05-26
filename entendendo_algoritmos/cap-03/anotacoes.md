# 📘 Capítulo 3 – Recursão

## 📌 Neste capítulo

- Entenderemos o conceito de **recursão**, uma técnica muito comum em algoritmos.
- Aprenderemos a **separar problemas** em dois componentes fundamentais:
  - **Caso base**
  - **Caso recursivo**

---

## Recursão

Imagine que você está explorando o porão da sua avó e encontra uma **mala trancada**. Sua avó diz que a **chave está em uma das caixas**, mas essas caixas contêm outras caixas... e por aí vai.  
Como você encontraria a chave?

### Abordagem Iterativa (com pilha)

1. Monte uma **pilha** com as caixas a serem analisadas.
2. Pegue uma caixa da pilha e veja o que há dentro.
3. Se encontrar **outra caixa**, adicione-a à pilha.
4. Se encontrar a **chave**, finalize.
5. Repita até esvaziar a pilha.

```py
def procure_pela_chave(caixa_principal):
    pilha = caixa_principal.crie_uma_pilha_para_busca()
    while pilha is not vazia:
        caixa = pilha.pegue_caixa()
        for item in caixa:
            if item.e_uma_caixa():
                pilha.append(item)
            elif item.e_uma_chave():
                print('Chave encontrada!')
```

### Abordagem Recursiva

Outra forma de resolver o problema é usar **recursão**: quando uma função **chama a si mesma**.

```py
def procure_pela_chave(caixa):
    for item in caixa:
        if item.e_uma_caixa():
            procure_pela_chave(item)  # 🔁 Recursão
        elif item.e_uma_chave():
            print('Chave encontrada!')

```

**Ambas as abordagens funcionam**, mas a recursiva costuma ser **mais clara** e **objetiva**.
No entanto, **não traz ganhos de desempenho**. Na verdade, **loops costumam ser mais rápidos** em *termos de performance*.

**Citação**:
"Loops podem melhorar o desempenho do seu programa. A recursão melhora o desempenho do programador."
    — Leigh Caldwell

---

## Caso Base e Caso Recursivo

Como a função recursiva **chama a si mesma**, é muito fácil cair em um **loop infinito** se não houver um fim claro.

### Exemplo: Contagem Regressiva

Você deseja imprimir `3...2...1...`

```py
def regressiva(i):
    print(i)
    regressiva(i - 1)
```

**Problema**:
Esse código entra em loop infinito: `3... 2... 1... 0... -1... -2...`

#### Solução com caso base:

Funções recursivas precisam de duas partes:

- **Caso base** → condição de parada.
- **Caso recursivo** → chamada da função a si mesma.

```py
def regressiva(i):
    print(i)
    if i <= 1:    # Caso base
        return
    else:
        regressiva(i - 1)  # Caso recursivo
```

Com isso, a função agora funciona corretamente!

## A Pilha

### Pilha vs Arrays e Listas

Imagine que você está organizando um **churrasco com amigos** e anota as tarefas em **notas adesivas** empilhadas.  
Você sempre **adiciona novas tarefas no topo** e também **remove a tarefa do topo** quando concluída.

Essa estrutura de dados é chamada de **pilha**.

**Duas operações principais:**
- `push`: adicionar item ao topo da pilha
- `pop`: remover e ler o item do topo

**Diferença para listas e arrays:**
- Em **listas/arrays**, você pode acessar ou remover itens de qualquer posição.
- Em **pilhas**, apenas o **último item adicionado** pode ser removido primeiro (LIFO – *Last In, First Out*).

---

## A Pilha de Chamada (*Call Stack*)

Todo programa usa uma **pilha de chamada interna**, utilizada pelo computador para **controlar o fluxo de execução de funções**.

Sempre que uma função é chamada:
- Ela é colocada **no topo da pilha de chamada**.
- Quando termina sua execução, é **removida (pop)** da pilha.

---

### Exemplo de Código

```py
def sauda(nome):
    print('Olá, ' + nome + '!')
    sauda2(nome)
    print('preparando para dizer tchau...')
    tchau()

def sauda2(nome):
    print('Como vai ' + nome + '?')

def tchau():
    print('ok, tchau!')
```

### ▶️ Chamando a função `sauda`

Se chamarmos a função:

```py
sauda('Pedro')
```

#### 🔍 O que acontece na pilha de chamada?

**Passo a passo:**

1. `sauda('Pedro')` é chamada

- A função `sauda` é colocada no topo da pilha de chamada.
- Imprime: `Olá, Pedro!`

2. Dentro de `sauda`, é chamada a função `sauda2('Pedro')`

- A função `sauda2` é empilhada.
- Imprime: `Como vai Pedro?`
- `sauda2` termina e é removida da pilha.

3. O controle volta para a função `sauda`

- Imprime: `preparando para dizer tchau...`

4. Chama-se então a função `tchau()`

- A função `tchau` é empilhada.
- Imprime: `ok, tchau!`
- `tchau` termina e é removida da pilha.

5. `sauda` termina

- É removida da pilha.

#### A grande ideia desta seção

*"Quando você chama uma função através de outra, a chamada de função fica pausada em um estado parcialmente completo."*

## 🧠 A pilha de chamada com recursão

As funções recursivas **também utilizam a pilha de chamada**! Vamos analisar isso na prática com um exemplo clássico: o **fatorial**, representado pela função `fat`.

A chamada `fat(5)` é escrita como **5!**, e sua definição matemática é:

- 5! = 5 × 4 × 3 × 2 × 1

De forma semelhante:

- fat(3) = 3 × 2 × 1

Aqui está uma função recursiva para calcular o fatorial de um número:

```py
def fat(x):
    if x == 1:  # Caso base
        return x
    else:       # Caso recursivo
        return x * fat(x-1)
```

### Como a pilha age nesse caso?
Vamos considerar a chamada fat(3). O que acontece na pilha de chamada?

Etapas da execução:

1. fat(3) → empilhada
2. fat(2) → empilhada
3. fat(1) → empilhada (caso base atingido)

Agora, os retornos começam a acontecer:

1. fat(1) retorna 1
2. fat(2) retorna 2 * 1 = 2
3. fat(3) retorna 3 * 2 = 6

Ou seja, a pilha armazena as chamadas incompletas e resolve tudo do fim para o começo.

### Observação importante

Usar uma pilha é conveniente, pois você não precisa acompanhar manualmente o que está sendo processado — a pilha gerencia isso automaticamente.

No entanto, há um custo: cada chamada ocupa espaço na memória. Quanto mais chamadas, mais memória será consumida, e isso pode levar a um estouro de pilha (stack overflow) em chamadas muito profundas.

### O que fazer nesses casos?
Quando a profundidade da pilha se torna um problema, você tem duas opções principais:

- Reescrever o código com loops – isso evita o uso intenso da pilha.
- Utilizar tail recursion (recursão de cauda) – uma técnica onde a chamada recursiva é a última instrução da função, permitindo otimizações em algumas linguagens (Python não implementa essa otimização por padrão).

## Recapitulando

- Recursão é quando uma função chama a si mesma.
- Toda função recursiva possui:
    - Caso base: onde a recursão termina.
    - Caso recursivo: onde a função continua chamando a si mesma.
- Uma pilha tem duas operações básicas:
    - push → adicionar item ao topo.
    - pop → remover o item do topo.
- Todas as chamadas de função são empilhadas na pilha de chamada.
- A pilha pode ficar grande e ocupar muita memória, especialmente em chamadas recursivas profundas.