# Algoritmos de Busca e Ordenação de Dados

Este repositório contém implementações de diversos algoritmos de busca e ordenação de dados. Esses algoritmos são fundamentais em ciência da computação e são utilizados para manipular e organizar grandes volumes de dados de maneira eficiente.

## Algoritmos de Busca

### Linear Search

A busca linear é um algoritmo simples que percorre a lista de elementos um por um até encontrar o elemento desejado ou até que todos os elementos tenham sido verificados. É eficiente para listas pequenas ou não ordenadas.

- **Velocidade**: O(n)

### Binary Search

A busca binária é um algoritmo mais eficiente que a busca linear, mas requer que a lista de elementos esteja ordenada. O algoritmo divide repetidamente a lista ao meio, descartando a metade em que o elemento não pode estar, até encontrar o elemento desejado ou até que a lista não possa ser dividida mais.

- **Velocidade**: O(log n)

## Algoritmos de Ordenação

### Bubble Sort

O Bubble Sort é um algoritmo simples que compara pares de elementos adjacentes e os troca se estiverem na ordem errada. Este processo é repetido até que a lista esteja ordenada. É fácil de implementar, mas ineficiente para listas grandes.

- **Velocidade**: O(n^2)

### Insertion Sort

O Insertion Sort constrói a ordenação criando gradualmente uma metade esquerda que está sempre ordenada. Para cada novo elemento, ele é comparado com os elementos já ordenados e inserido na posição correta.

- **Velocidade**: O(n^2)

### Selection Sort

O Selection Sort seleciona repetidamente o menor elemento da lista não ordenada e o coloca no início. É semelhante ao Bubble Sort em termos de complexidade, mas com um número menor de trocas.

- **Velocidade**: O(n^2)

### Merge Sort

O Merge Sort é um algoritmo de ordenação eficiente que utiliza a técnica de divisão e conquista. Ele divide a lista em sub-listas menores, ordena essas sub-listas e depois as combina para formar a lista final ordenada.

- **Velocidade**: O(n log n)

### Quick Sort

O Quick Sort é um algoritmo eficiente que também utiliza a técnica de divisão e conquista. Ele seleciona um elemento como pivô e particiona a lista em torno do pivô. Os elementos menores que o pivô vão para a esquerda e os maiores vão para a direita. O processo é repetido recursivamente para as sub-listas.

- **Velocidade**: O(n log n)

### Radix Sort

O Radix Sort é um algoritmo de ordenação não comparativo que distribui os elementos em baldes de acordo com seus dígitos. Ele processa os dígitos dos números, um de cada vez, e reordena os elementos com base nesses dígitos.

- **Velocidade**: O(nk), onde n é o número de elementos e k é o número de dígitos do maior número.

### Array.sort()

O método `Array.sort()` do JavaScript organiza os dados em ordem alfabética por padrão e pode ser personalizado com uma função de comparação. Embora seja conveniente, pode produzir resultados inesperados se não for configurado corretamente para tipos de dados específicos, como números.

---

Este repositório oferece implementações básicas desses algoritmos em JavaScript, permitindo que se compreenda como cada um deles funciona. Esses algoritmos são fundamentais para o desenvolvimento de software eficiente e são amplamente utilizados em diversas aplicações de computação.
