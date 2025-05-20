# Exercícios – Capítulo 1

## 1.1 – Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

**Resposta:** No máximo **7 etapas**.

**Explicação:**
- n = 128
- Pesquisa binária → log₂(128) = **7**

---

## 1.2 – Suponha que você duplique o tamanho da lista. Qual seria o número de etapas agora?

**Resposta:** No máximo **8 etapas**.

**Explicação:**
- n = 256
- Pesquisa binária → log₂(256) = **8**

---

## 1.3 – Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica.

**Resposta:** A operação mais eficiente seria uma **pesquisa binária**  
**Complexidade:** `O(log n)`

---

## 1.4 – Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)

**Resposta:** É necessário fazer uma **pesquisa linear**  
**Complexidade:** `O(n)`

---

## 1.5 – Você quer ler o número de cada pessoa da agenda telefônica.

**Resposta:** É necessário percorrer todos os registros  
**Complexidade:** `O(n)`

---

## 1.6 – Você quer ler o número apenas dos nomes que começam com A.  
*(Esse algoritmo envolve conceitos que serão vistos no Capítulo 4)*

**Resposta do livro:** `O(n)`

> **Observação:** Ignore constantes na notação Big O.  
> Ex: O(n + 26), O(n * 26) etc. continuam sendo O(n).