# Exercícios - Capítulo 1

## 1.1 - Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

Resposta: Levaria em torno de no máximo 7 tentativas para encontrar o determinado nome na lista

Explicação:
- n = 128
- Pesquisa binária -> Log 128 = 2^7

## 1.2 - Suponha que você duplique o tamanho da lista. Qual seria o número de etapas agora?

Resposta: Levaria em torno de no máximo 8 etapas para encontrar o nome.

Explicação:
- n = 256
- pesquisa binária -> log 256 = 2^8

**Forneça o tempo de execução para cada um dos casos a seguir em termos da notação Big O.**

## 1.3 - Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica.

Resposta: Levando o menor tempo possível, o mais indicado seria a *pesquisa binária*. O(log n).

## 1.4 - Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)

Resposta: Tendo em vista que será necessário procurar pela *agenda inteira*, o algoritmo deverá ser a *pesquisa simples*. O(n).

## 1.5 - Você quer ler o número de cada pessoa da agenda telefônica.

Resposta: O(n). Devido ao fato de querer ler o número de *cada pessoa* da agenda.

## 1.6 - Você quer ler o número apenas dos nomes que começam com A. (Isso é complicado! Esse algoritmo envolve conceitos que são abordados mais profundamente no Capítulo 4. Leia a resposta - você ficará surpreso!)

*Resposta do livro: O(n)*.

OBS: "Você deverá ignorar números que são somados, subtraídos, multiplicados ou divididos. Ex.: O(n + 26), O(n - 26), O(n * 26), O(n / 26). Todos estes são os mesmos que O(n)! Você deverá sempre ignorar constantes."