# 📘 Capítulo 2 — Integração com HTML e JavaScript

Este capítulo marca o início da **integração do JavaScript com páginas HTML**, permitindo criar aplicações **interativas** no navegador. A lógica do Capítulo 1 será aplicada em formulários e elementos visuais.

---

## 🌐 HTML, CSS e JavaScript: Funções

- **HTML:** estrutura e conteúdo da página (ex: títulos, parágrafos, inputs).
- **CSS:** estilo e aparência (cores, tamanhos, bordas).
- **JavaScript:** comportamento e interatividade (ex: cliques, cálculos, respostas).

---

## 🏗️ Estrutura Básica do HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
  </head>
  <body>
    <!-- Conteúdo -->
  </body>
</html>
```

- Atalho no VS Code: `! + Tab` → estrutura automática.
- Tags essenciais: `<html>`, `<head>`, `<body>`.
- Atributo `lang` define o idioma da página.

### 📋 Elementos HTML para Interação

- Textos: `<h1>`, `<p>`, `<span>` (sem quebra de linha).
- Formulários: `<input type="text">`, `<input type="button">`
  - Atributos:
    - `id`: referência para o JS.
    - `autofocus`: cursor automático no campo.
    - `readonly`: campo somente leitura.

---

## ⚙️ Eventos e Funções

- Um evento é uma ação (ex: clique).
- Uma função é executada quando um evento ocorre:

```js
function mostrarOla() {
  alert("Olá!");
}
```

- Boas práticas: nomes com verbo + camelCase (ex: `mostrarResultado()`).
- `return` encerra a função e devolve um valor (se necessário).

### 🧾 Acessando Elementos com getElementById()

```js
var nome = document.getElementById("inNome").value;
document.getElementById("outMensagem").textContent = "Olá " + nome;
```

- `document`: representa o HTML.
- `getElementById("id")`: acessa o elemento pelo id.

**Propriedades comuns**:

- `value`: conteúdo de inputs (`<input>`, `<textarea>`, etc.)
- `textContent`: texto visível em elementos (`<p>`, `<h1>`, etc.)
- `innerHTML`: insere conteúdo com tags HTML (usar com cautela por segurança).

---

## 📂 Organização e Ferramentas

- Estrutura sugerida:

```
projeto/
├─ cap2/
├─ js/
├─ css/
```

- Editor recomendado: VS Code
  - Recursos: IntelliSense, atalhos de formatação (Alt + Shift + F), validação de sintaxe.

---

## 🧩 Formas de Integrar JavaScript ao HTML

1. Inline HTML (não recomendado):

```html
<input type="button" onclick="mostrarOla()">
```

Mistura HTML e JS. Difícil de manter.

2. DOM com arquivos externos:

```html
<script src="js/script.js"></script>
```

```js
btCalcular.onclick = calcularPreco;
Boa separação, mas não permite múltiplas funções por evento.
```

3. Event Listeners (recomendado):

```js
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
```

Permite múltiplas funções, separa estrutura e comportamento.

---

## 🧠 Nomenclatura e Escopo de Variáveis

Padrão de nomes:
- `inNome` → input
- `btMostrar` → botão
- `outResposta` → saída

Escopo:
- Local: dentro de funções (recomendado).
- Global: fora das funções (evitar).

Sempre declare com `let`, `const` ou `var`.

---

## ➕ Operadores Aritméticos e Math

| Operador | Função                    |
| -------- | ------------------------- |
| `+`      | Adição                    |
| `-`      | Subtração                 |
| `*`      | Multiplicação             |
| `/`      | Divisão                   |
| `**`     | Exponenciação             |
| `%`      | Resto da divisão (módulo) |


### Funções úteis (classe Math):

```js
Math.abs(x)     // absoluto
Math.floor(x)   // para baixo
Math.ceil(x)    // para cima
Math.round(x)   // arredonda
Math.sqrt(x)    // raiz quadrada
Math.random()   // aleatório [0, 1)
```
---

## 💡 Exemplos Práticos
1. Olá Você! (ex2_1.html)
- Input do nome → botão → exibe nome no parágrafo.

2. Vídeo Locadora (ex2_2.html + js/ex2_2.js)
- Lê título e duração (min) → mostra em horas/min.
- Usa Math.floor() e %.

3. Revenda de Veículos (ex2_3.html + js/ex2_3.js)
- Entrada = 50% do valor
- Saldo = dividido em 12 parcelas
- Usa toFixed(2) para formatar dinheiro.

4. Restaurante JS (ex2_4.html + js/ex2_4.js)
- Lê preço por quilo e consumo (g)
- Calcula e mostra total a pagar

## 🧪 Exercícios Propostos

1. Vizinhos do número:
- Entrada: número
- Saída: anterior e posterior

2. Conta da pizzaria:
- Entrada: total da conta e nº de clientes
- Saída: valor por cliente

3. Opções de pagamento:
- Entrada: preço
- Saída: à vista (10% desconto) ou 3x

4. Média de notas:
- Entrada: duas notas
- Saída: média

---

## 🧾 Considerações Finais

- A integração HTML + JS é essencial.
- Formulários permitem entrada de dados; parágrafos exibem resultados.
- JavaScript é interpretado direto no navegador.
- Use event listeners para organizar melhor o código.
- Prefira value e textContent a innerHTML (mais seguro).
- VS Code facilita o desenvolvimento com recursos profissionais.