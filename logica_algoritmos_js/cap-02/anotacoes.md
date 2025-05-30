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

- a. Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initialscale=
  1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Exemplo 2.2</title>
</head>
<body>
  <h1>Vídeo Locadora JS</h1>
  <hr>
  <p> Título do Filme:
  <input type="text" id="inTitulo">
  </p>
  <p> Duração (min):
  <input type="text" id="inDuracao">
  </p>
  <p>
  <input type="button" value="Converter em Horas e Minutos"
  id="btConverter">
  </p>
  <p id="outTitulo"></p>
  <p id="outResposta"></p>
  <script src="js/ex2_2.js"></script>
</body>
</html>
```

```js
function converterDuracao() {
// cria referência aos elementos da página
var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuracao");
var outTitulo = document.getElementById("outTitulo");
var outResposta = document.getElementById("outResposta")
// obtém conteúdos dos campos de entrada
var titulo = inTitulo.value;
var duracao = Number(inDuracao.value);
// arredonda para baixo o resultado da divisão
var horas = Math.floor(duracao / 60);
// obtém o resto da divisão entre os números
var minutos = duracao % 60;
// altera o conteúdo dos parágrafos de resposta
outTitulo.textContent = titulo;
outResposta.textContent = horas + " hora(s) e " + minutos + "
minuto(s)";
}
// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);
```

- b. Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initialscale=
1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Exemplo 2.3</title>
</head>
<body>
<h1>Revenda de Veículos JS</h1>
<p> Veículo:
<input type="text" id="inVeiculo"></p>
<p> Preço R$:
<input type="text" id="inPreco"></p>
<p> <input type="button" value="Ver Promoção" id="btVerPromocao">
</p>
<h3 id="outVeiculo"></h3>
<h3 id="outEntrada"></h3>
<h3 id="outParcela"></h3>
<script src="js/ex2_3.js"></script>
</body>
</html>
```

```js
function mostrarPromocao() {
// cria referência aos elementos manipulados pelo programa
var inVeiculo = document.getElementById("inVeiculo");
var inPreco = document.getElementById("inPreco");
var outVeiculo = document.getElementById("outVeiculo");
var outEntrada = document.getElementById("outEntrada");
var outParcela = document.getElementById("outParcela");
// obtém conteúdo dos campos de entrada
var veiculo = inVeiculo.value;
var preco = Number(inPreco.value);
// calcula valor da entrada e das parcelas
var entrada = preco * 0.50;
var parcela = (preco * 0.50) / 12;
// altera o conteúdo dos parágrafos de resposta
outVeiculo.textContent = "Promoção: " + veiculo;
outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
// cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);
```

- c. Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago, conforme ilustra a Figura 2.10.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initialscale=
1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Exemplo 2.4</title>
</head>
<body>
<h1>Restaurante JS</h1>
<p>Buffet por Quilo R$:
<input type="text" id="inQuilo">
</p>
<p>Consumo do Cliente (gr):
<input type="text" id="inConsumo">
</p>
<p>
<input type="button" value="Calcular Preço" id="btCalcular">
</p>
<h3 id="outValor"></h3>
<script src="js/ex2_4.js"></script>
</body>
</html>
```

```js
function calcularPreco() {
// cria referência aos elementos da página
var inQuilo = document.getElementById("inQuilo");
var inConsumo = document.getElementById("inConsumo");
var outValor = document.getElementById("outValor")
// obtém conteúdo dos campos de entrada
var quilo = Number(inQuilo.value);
var consumo = Number(inConsumo.value);
// calcula valor a ser pago
var valor = (quilo / 1000) * consumo;
// altera o conteúdo da linha de resposta
outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
// cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);
```

## Exercícios Propostos

- Desenvolver páginas HTML com JavaScript que:
    - Leiam dados de campos.
    - Realizem cálculos simples.
    - Apresentem resultados diretamente na página.

## Considerações Finais do Capítulo

- A integração entre HTML e JavaScript permite interatividade nas páginas web.

- É possível criar interfaces ricas, utilizando elementos HTML combinados com código JavaScript.

- O uso de editores como o Visual Studio Code facilita o desenvolvimento e depuração dos scripts.