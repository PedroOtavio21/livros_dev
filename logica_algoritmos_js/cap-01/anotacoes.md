# 📘 Capítulo 1 — Introdução à Lógica de Programação com JavaScript

Este capítulo introduz os conceitos fundamentais de **lógica de programação e algoritmos**, essenciais para resolver problemas com o auxílio de computadores. A linguagem JavaScript será utilizada como meio para praticar esses conceitos.

---

## 🧠 O que é Lógica de Programação?

> Lógica de programação é a habilidade de **estruturar o raciocínio** para resolver problemas com código.

- O aprendizado é **gradual e prático**.
- **Erros são comuns**: persistência é essencial.
- Dominar lógica ajuda na **transição entre linguagens** (JS, Python, C#, etc.).

### 🏧 Exemplo: Caixa Eletrônico
- **Sequência**: pedir CPF → senha → mostrar menu.
- **Condicional**: verificar senha correta.
- **Repetição**: tentar novamente até acertar ou travar.

---

## 🧩 Aspectos Fundamentais da Lógica

1. **Entender o problema com atenção.**
2. **Aplicar lógica dedutiva.**
3. **Listar as etapas necessárias.**
4. **Explorar diferentes soluções.**
5. **“Ensinar” o computador.**
6. **Pensar em cada detalhe.**

> 💡 Um algoritmo é como uma **receita de bolo**: esquecer um passo compromete tudo!

---

## 🔄 Entrada, Processamento e Saída

Fluxo básico de um programa:

1. **Entrada:** usuário informa dados → `prompt()`
2. **Processamento:** manipulação dos dados
3. **Saída:** resultado mostrado ao usuário → `alert()`

---

## 💻 Sobre o JavaScript

- Criado em **1995**, hoje padronizado como **ECMAScript**.
- Torna páginas web **interativas e dinâmicas**.
- Atua no lado do cliente (navegador) e no servidor (com Node.js).
- Utilizado no livro para fins educacionais.

---

## 🛠️ Editores de Código

| Tipo              | Exemplos             | Recomendado? |
|-------------------|----------------------|---------------|
| Simples           | Bloco de Notas       | ❌ Não        |
| Online            | w3schools, jsbin     | ☑️ Para testes |
| Profissionais     | **VS Code**, Sublime | ✅ Sim        |

> 📌 **VS Code** é o editor recomendado.

---

## 🖥️ `alert()` — Saída de Dados

```js
alert("Bem-vindo!");
```

- Colocado entre <script></script>.
- JS é case sensitive: Alert ≠ alert.

## 📥 `prompt()` — Entrada de Dados

```js
var nome = prompt("Qual seu nome?");
alert("Olá " + nome);
```

- Sempre retorna String.
- Para usar números:

```js
var num = Number(prompt("Digite um número:"));
```

## 📦 Variáveis e Constantes

- Variável: espaço para guardar dados mutáveis.

```js
var idade = 18;
```

- Constante: valor fixo, declarado com const.

```js
const PI = 3.14;
```

### Regras de Nomenclatura

- Sem espaços ou acentos.
- Não iniciar com número.
- Evitar palavras reservadas.
- Usar camelCase (nomeCliente).

## 📝 Comentários no Código

```js
// Comentário de uma linha

/*
   Comentário de várias linhas
*/
```

## 🧾 Tipos de Dados

| Tipo    | Exemplo         |
| ------- | --------------- |
| String  | `"texto"`       |
| Number  | `10`, `3.14`    |
| Boolean | `true`, `false` |

- JS não exige declaração de tipo.
- Converter string → número:

```js
var valor = Number(prompt("Digite:"));
```

- Exibir decimais:

```js
total.toFixed(2);
```

## ⚙️ Exemplos Práticos

1. Dobro de um número

```js
var num = Number(prompt("Número:"));
alert("Dobro: " + (num * 2));
```

2. Soma de dois números

```js
var n1 = Number(prompt("1º número:"));
var n2 = Number(prompt("2º número:"));
alert("Soma: " + (n1 + n2));
```

3. Conta do Jantar com 10% de taxa

```js
var valor = Number(prompt("Valor do jantar:"));
var taxa = valor * 0.1;
var total = valor + taxa;
alert("Taxa: R$ " + taxa.toFixed(2) + "\nTotal: R$ " + total.toFixed(2));
```
4. Duração de viagem (dias + horas)

```js
var dias = Number(prompt("Dias:"));
var horas = Number(prompt("Horas:"));
var totalHoras = (dias * 24) + horas;
alert("Total de horas: " + totalHoras);
```

## 📌 Conclusões do Capítulo

- Persistência é fundamental.
- Cuidado com sintaxe e lógica.
- Usar sempre o fluxo Entrada → Processamento → Saída.
- JavaScript é uma ótima linguagem para iniciar.
- Edite e execute os programas com VS Code.
- Pratique com prompt(), alert(), variáveis e cálculos simples.