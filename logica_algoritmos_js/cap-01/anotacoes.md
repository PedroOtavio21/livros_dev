# Capítulo 1 – Introdução

## Conceitos Fundamentais

- **Lógica de Programação**: Base para ensinar ao computador como resolver problemas de forma estruturada, sequencial, condicional e repetitiva.

- **Algoritmo**: Sequência lógica e finita de passos para resolver uma tarefa.

- **Programar é ensinar**: Devemos pensar em como resolver o problema antes de codificar.

## Habilidades Essenciais

- **Compreender o problema**: Ler e interpretar corretamente o que é pedido.

- **Dedução lógica**: Fazer inferências com base em condições (ex: se A então B).

- **Listar etapas**: Quebrar o problema em passos sequenciais.

- **Explorar soluções alternativas**: Um problema pode ter várias soluções corretas.

- **Detalhamento minucioso**: Cada passo deve ser claro e pensado com cuidado.

## Fluxo de um Programa

1. **Entrada** – dados recebidos do usuário.

2. **Processamento** – cálculos, decisões e manipulações.

3. **Saída** – exibição dos resultados.

---

## A Linguagem JavaScript

- Criada em 1995; padronizada como ECMAScript.

- Executada principalmente no lado do cliente (navegador).

- Muito utilizada no desenvolvimento web, junto com HTML e CSS.

- Permite criar interatividade, validações, jogos e aplicativos web.

- Muito valorizada no mercado de trabalho.

### Editores de Código

- **Online**: w3schools, jsbin, js.do.

- **Offline**: Visual Studio Code (recomendado).

---

## Primeiros Comandos

- `alert()`: exibe mensagens ao usuário.

- `prompt()`: solicita informações do usuário.

- Exemplo de uso:

```js
var nome = prompt("Qual é o seu nome?");
alert("Olá " + nome);
```

### Variáveis e Constantes

- Variáveis: armazenam dados que podem mudar.
    - Declaração: `var nome`
    - Atribuição: `var idade = 18;`

- Constantes: valores fixos que não mudam.
    - Exemplo: `const PI = 3.14;`

- Regra de nomes: evitar espaços, números no início, caracteres especiais e palavras reservadas.

### Comentários

- Linha única: `// comentário`

- Várias linhas:

```js 
/*
  comentário
  em várias linhas
*/
```

### Tipos de Dados e Conversões

- Principais tipos: **string**, **number**, **boolean**.

- Conversão:
    - `Number("20")` converte texto para número.
    - `toFixed(2)` fixa casas decimais (útil para valores em R$).

---

## Exemplos de Programas

- Dobro de um número.

```html
<meta charset="utf-8">
<script>
    // lê um dado de entrada
    var num = prompt("Número: ");
    // calcula o dobro
    var dobro = num * 2;
    // exibe a resposta
    alert("Dobro é: " + dobro);
</script>
```

- Soma de dois números.

```html
<meta charset="utf-8">
<script>
    // lê os números
    var num1 = Number(prompt("1º Número: "));
    var num2 = Number(prompt("2º Número: "));
    // calcula a soma
    var soma = num1 + num2;
    // exibe o resultado
    alert("Soma é: " + soma);
</script>
```

- Cálculo de taxa de garçom (10%).

```html
<meta charset="utf-8">
<script>
    // lê o valor do jantar
    var jantar = Number(prompt("Valor do Jantar R$: "));
    // calcula os dados
    var garcom = jantar * 0.10;
    var total = jantar + garcom;
    // apresenta as respostas
    alert("Taxa Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2));
</script>
```

- Total de horas de uma viagem em dias e horas.

```html
<meta charset="utf-8">
<script>
    // lê os dados de entrada
    var dias = Number(prompt("Nº Dias: "));
    var horas = Number(prompt("Nº Horas: "));
    // calcula a duração
    var total = (dias * 24) + horas;
    // exibe o total
    alert("Total de Horas: " + total);
</script>
```

## Exercícios Propostos

- Vizinhos de um número.

- Divisão de conta entre clientes.

- Preço com desconto e parcelamento.

- Média de duas notas.

---

## Considerações Finais

- Persistência e atenção aos detalhes são fundamentais.

- Treinamento e prática desenvolvem a lógica.

- Toda solução começa por entrada, processamento e saída.

- JavaScript é uma excelente escolha para começar na programação.

- Bons fundamentos são a base para construir sistemas maiores.