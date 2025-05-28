# Capítulo 2 – Integração com HTML

## Estrutura Básica de um Documento HTML

- HTML (HyperText Markup Language): estrutura o conteúdo das páginas web.

- Arquivo `.html` renderizado diretamente pelo navegador.

- Estrutura mínima:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Título da Página</title>
  </head>
  <body>
    <!-- Conteúdo da página -->
  </body>
</html>
```

### Elementos HTML Essenciais

- **Cabeçalhos**: `<h1>` a `<h6>` – títulos e subtítulos.

- **Parágrafos**: `<p>` – blocos de texto.

- **Formulários**: campos como `<input>`, `<button>`, etc.

## Introdução a Eventos e Funções

- **Eventos**: ações do usuário (clique, digitação, etc.).

- **Funções**: blocos de código executados em resposta aos eventos.

```js
function mostrarMensagem() {
  alert("Olá!");
}
```

### getElementById()

- Método que seleciona elementos HTML com um id.

```js
document.getElementById("meuId")
```

### Manipulação de Conteúdo HTML

- **textContent**: altera o texto bruto de um elemento.

- **innerHTML**: altera o conteúdo HTML interno.

- **value**: acessa ou altera o valor de campos de formulário.

## Formas de Inserir JavaScript no HTML

### HTML com eventos inline

```html
<button onclick="mostrarMensagem()">Clique</button>
```

### DOM – usando addEventListener no script

```js
document.getElementById("botao").addEventListener("click", mostrarMensagem);
```

### Listeners

- Permitem associar vários eventos de forma flexível e organizada.

## Nomenclatura e Escopo de Variáveis

- **Escopo**: local onde a variável é acessível (global ou local).

- **Boas práticas**:
    - Nome claro e significativo.
    - Padrão camelCase para variáveis.
    - Evitar uso de nomes reservados pela linguagem.

## Operadores Aritméticos e Funções Matemáticas

- Operadores: `+`, `-`, `*`, `/`, `%`

- Funções matemáticas úteis:

```js
Math.round(); // arredonda
Math.floor(); // arredonda para baixo
Math.ceil();  // arredonda para cima
```

## Exemplos JavaScript + HTML

- Criação de páginas que reagem a entradas do usuário.

- Integração de formulários com lógica de processamento.

- Exibição de resultados em elementos HTML.

## Exercícios Propostos

- Desenvolver páginas HTML com JavaScript que:
    - Leiam dados de campos.
    - Realizem cálculos simples.
    - Apresentem resultados diretamente na página.

## Considerações Finais do Capítulo

- A integração entre HTML e JavaScript permite interatividade nas páginas web.

- É possível criar interfaces ricas, utilizando elementos HTML combinados com código JavaScript.

- O uso de editores como o Visual Studio Code facilita o desenvolvimento e depuração dos scripts.