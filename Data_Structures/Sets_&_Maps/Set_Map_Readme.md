# Estruturas de Dados: Map e Set

Este repositório contém implementações de estruturas de dados Map e Set em JavaScript, incluindo suas variantes mais avançadas como WeakMap e WeakSet. Estas estruturas são fundamentais para a organização e manipulação de dados.

## Map

Um Map é uma coleção de pares chave-valor, onde cada chave é única. Ele permite o uso de qualquer tipo de dados como chave.

### Principais Características

- **Chaves únicas**: Cada chave é única dentro do Map.
- **Qualquer tipo de dado**: As chaves e valores podem ser de qualquer tipo.

## Set

Um Set é uma coleção de valores únicos, ou seja, não permite elementos duplicados.

### Principais Características

- **Valores únicos**: Cada valor é único dentro do Set.
- **Qualquer tipo de dado**: Os valores podem ser de qualquer tipo.

## WeakMap

Um WeakMap é semelhante a um Map, mas suas chaves são fracamente referenciadas, permitindo a coleta de lixo (garbage collection) quando não há outras referências às chaves.

### Principais Características

- **Chaves fracamente referenciadas**: As chaves são coletadas pelo garbage collector se não houver outras referências.
- **Apenas objetos como chaves**: As chaves devem ser objetos.

## WeakSet

Um WeakSet é semelhante a um Set, mas seus valores são fracamente referenciados, permitindo a coleta de lixo (garbage collection) quando não há outras referências aos valores.

### Principais Características

- **Valores fracamente referenciados**: Os valores são coletados pelo garbage collector se não houver outras referências.
- **Apenas objetos como valores**: Os valores devem ser objetos.

## Implementações Customizadas

Além das implementações padrão, este repositório inclui implementações customizadas de Map e Set utilizando classes em JavaScript. Essas implementações servem para fins de estudo e compreensão mais profunda das estruturas de dados.

---
