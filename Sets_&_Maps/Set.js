/********************************************************************
                                SET
*********************************************************************
 
Um Set é uma coleção de elementos não ordenados e únicos, ou seja,
os elementos presentes no Set não se repetem. São equivalentes, na 
matemática, a conjuntos finitos. Os valores de Set podem ser de
qualquer tipo.

O ECMAScript 2015 introduziu o Set como parte do Javascript, não 
sendo mais necessária sua implementação. Abaixo, exploramos algumas
funcionalidades.

Para mais informações: 
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set>


/********************************************************************************
                    CARACTERÍSTICAS SET - ECMAScript 2015
********************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

/* 
Para inserir valores, verificar tamanho do set, verificar se set tem valores usamos:
    - set.add(valor): insere novo valor no set.
    - set.has(valor): verifica se set contém elemento.
    - set.size: retorna número de elementos do set.

A classe Set introduzida pelo ECMAScript 2015 retorna o @iterator com .values(), 
um objeto contendoseus valores, que pode ser iterado em loop for...of.

Para deletar elementos ou limpar o mapa temos:
    - set.delete(valor): deleta elemento do mapa.
    - set.clear(): retira todos elementos do mapa, deixando-o vazio.
*/

const set = new Set();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")

set.add(1);
set.add(2);
set.add(3);
console.log(set.has(1));    // true
console.log(set.size);      // 1

let values = set.values();
console.log(set.values());          // SetIterator {1, 2, 3}
for (let value of values) {         // 1
    console.log(value);             // 2
}                                   // 3

set.delete(2);                       // true
console.log(set);                    // {1, 3}
set.clear();
console.log(set);                    // {size: 0}


/********************************************************************************
                        TESTES SET - ECMAScript 2015
********************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

console.log("===*===*===*===*===*===*===");
console.log("Testes funções matemáticas:");
console.log("----------------------------");

// Simulando operação de união
const union = (set1, set2) => {
    const unionSet = new Set();
    set1.forEach(value => unionSet.add(value));
    set2.forEach(value => unionSet.add(value));
    return unionSet;
};

console.log("Simulando operação de união:");
console.log(`União de A e B: {${[...union(setA, setB)]}}`); //{1, 2, 3, 4}
console.log("----------------------------");


// Simulando operação de interseção
const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};

console.log("Simulando operação de interseção:");
console.log(`Interseção de A e B: {${[...intersection(setA, setB)]}}`); //{2, 3}
console.log("----------------------------");


//Simulando diferença entre A e B
const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });

    return differenceSet;
};

console.log("Simulando operação de diferença:");
console.log(`Diferença entre A e B: {${[...difference(setA, setB)]}}`); //{1}
console.log("===*===*===*===*===*===*===");


/********************************************************************************
                            Utilizando Spread Operator
********************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

/* 
Com o ECMAScript 2015, foi introduzido o spread operator (...) que pode espalhar
elementos de um set em um array. A nova classe SET - ECMAScript 2015 aceita
arrays em sua inicialização, e converte cada um dos elementos dos arrays passados 
como parâmetros como valores de Set.

Desta forma, para fazer uma união de um setA com um setB podemos:
*/

// Simulando União com spread operator
const unionAB = new Set([...setA], [...setB]);
console.log("Operação de união com spread operator:");
console.log(`União de A e B: {${[...unionAB]}}`);       // {1, 2, 3, 4}
console.log("----------------------------");

/*
    O código acima equivale a:
        const unionAB = new Set(...setA, ...setB);
        const unionAB = new Set([1, 2, 3], [2, 3, 4]);

    A inicialização do Set unionAB então pega cada elemento dos arrays passados e 
    adiciona como valor de Set. Como Set não aceita valores repetidos, a 
    operação é equivalente a: 
        const unionAB = new Set([1, 2, 3, 4]);
*/


// Simulando Interseção com spread operator
const intersectionAB = new Set([...setA].filter(value => setB.has(value)));
console.log("Operação de interseção com spread operator:");
console.log(`Interseção de A e B: {${[...intersectionAB]}}`); // {2,3}
/*
    Construimos uma array de setA com spread operator e fitlramos cada valor
    se presente em setB para construir um novo array. Este novo array dá origem 
    aos valores do Set intersectionAB.
*/


// Simulando Diferença com spread operator
const differenceAB = new Set([...setA].filter(value => !setB.has(value)));
console.log("Operação de diferença com spread operator:");
console.log(`Diferença entre A e B: {${[...differenceAB]}}`); // {1}
/*
   Mesma operação da interseção, mas filtramos caso value não esteja em setB.
*/