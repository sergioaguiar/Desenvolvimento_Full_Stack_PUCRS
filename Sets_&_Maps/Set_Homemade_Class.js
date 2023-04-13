/********************************************************************
                                SET
*********************************************************************
 
Um Set é uma coleção de elementos não ordenados e únicos, ou seja,
os elementos presentes no Set não se repetem. São equivalentes, na 
matemática, a conjuntos finitos.

O ECMAScript 2015 introduziu o Set como parte do Javascript, não 
sendo mais necessária sua implementação. Contudo, como forma de 
estudo, a classe Set será implementada a seguir, tentando emular a 
nativa do ECMAScrit 2015. 


############################ COMPONENTES ############################

Classe Set contendo:
    Atributos
        1. items: coleção de elementos.

    Métodos
        1. add(element): Adiciona um item ao set;
        2. delete(element): Remove um item do set;
        3. has(element): Verifica se o item faz parte do set;
        4. clear(): Remove todos itens do set;
        5. size(): Retorna o número de itens que o set contém; 
        6. values(): Retorna um array com os valores dos itens do set;
        7. union(otherSet): Retorna unionSet que é união entre set e otherSet; 
        8. intersection(otherSet): Retorna intersectionSet que é interseção entre set e otherSet; 
        9. difference(otherSet): Retorna differenceSet que é diferença entre set e otherSet; e
        10.isSubsetOf(otherSet): Retorna true se set é subset de otherSet e false caso contrário. 

Obs.1: Na classe é apresentado método sizeLegacy() com opção de código
    que roda em navegadores antigos.

Obs.2: O controle de tamanho poderia ser feito com atributo length que
    seria incrementado ou decrementado pelos métodos add e delete(element).

Obs.3: De forma similar, foi implementado valuesLegacy() com opção de 
    código que roda em navegadores antigos.

*********************************************************************
                        SET

                Insetion    - O(1)
                Removal     - O(1)
                Searching   - O(1)
                Access      - O(1)
                Union       - O(n)
                Intersection- O(n) - sendo n o tamanho do menor set
********************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

class Set {
    constructor() {
        this.items = {};
    }

    // Adiciona um item ao set
    add(element) {
        if (this.has(element)) return false;
        this.items[element] = element; // adicionar o elemento como chave auxilia em sua busca
        return true;
    }

    // Remove um item do set
    delete(element) {
        if (!this.has(element)) return false;
        delete this.items[element];
        return true;
    }

    // Verifica se o item faz parte do set
    has(element) {
        return element in this.items;
        /* return Object.prototype.hasOwnProperty.call(this.items, element);
        segundo Groiner, a linha acima é mais aceita em diferentes plataformas */
    }

    // Remove todos itens do set
    clear() {
        this.items = {};
    }

    // Retorna o número de itens que o set contém (funciona em browsers modernos)
    size() {
        // Object.keys retorna array com keys
        return Object.keys(this.items).length;
    }

    // Retorna o número de itens que o set contém (funciona em qualquer browser)
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            // Evita contar propriedades herdadas que não tem key
            if (this.items.hasOwnProperty(key)) count++;
        }
        return count;
    }

    // Retorna um array com os valores dos itens do set (funciona em browsers modernos)
    values() {
        // Object.values retorna array com values
        return Object.values(this.items);
    }

    // Retorna um array com os valores dos itens do set (funciona em qualquer browser)
    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            // Evita contar propriedades herdadas que não tem key
            if (this.items.hasOwnProperty(key)) {
                values.push(this.items[key]);
            }
        }
        return values;
    }

    // Retorna unionSet que é união entre set e otherSet
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    // Retorna intersectionSet que é interseção entre set e otherSet
    intersection(otherSet) {
        const intersectionSet = new Set();

        const values = this.values();
        const otherValues = otherSet.values();
        // Inicia arrays com valores
        let smallerSet = values;
        let biggerSet = otherValues;
        // Se smallerSet maior que biggerSet, altera os valores
        if (smallerSet.length > biggerSet.length) {
            smallerSet = otherValues;
            biggerSet = values;
        }
        // Alimenta intersectionSet
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    // Retorna differenceSet que é diferença entre set e otherSet
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    // Retorna true se set é subset de otherSet e false caso contrário
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) return false;

        let isSubset = true;
        // forEach aqui não funcionaria porque um retorno falso não interrompe iteração
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;   // necessário alterar isSubset para retorno da isSubsetOf(otherSet) 
                return false;       // retorna falso para função every e interrompe iteração
            }
            return true;            // retorna true para função every
        });
        return isSubset;
    }
}



/********************************************************************************
                            TESTANDO CLASSE SET
********************************************************************************/

const set = new Set();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")
set.add(1);
console.log(set.values());  // [1]
console.log(set.has(1));    // true
console.log(set.size());    // 1

set.add(2);
console.log(set.values());  // [1, 2]
console.log(set.has(2));    // true
console.log(set.size());    // 2

console.log(set.add(1));    // false
console.log(set.values());  // [1, 2]

console.log(set.delete(3));    // false

set.delete(1);
console.log(set.values());  // [2]

set.delete(2);
console.log(set.values());  // []


console.log("===*===*===*===*===*===*===");
console.log("Testes funções matemáticas:");

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const setC = new Set();
setC.add(3);
setC.add(4);

const unionAB = setA.union(setB);
console.log(`          setA = [${setA.values()}]`)
console.log(`          setB = [${setB.values()}]`)
console.log(`       unionAB = [${unionAB.values()}]`);          //[1, 2, 3, 4, 5, 6]

const intersectionAB = setA.intersection(setB);
console.log(`intersectionAB = [${intersectionAB.values()}]`);   // [2,3]

const differenceAB = setA.difference(setB);
const differenceBA = setB.difference(setA);
console.log(`  differenceAB = [${differenceAB.values()}]`);     // [1]
console.log(`  differenceBA = [${differenceBA.values()}]`);     // [4,5,6]

const AisSubsetOfB = setA.isSubsetOf(setB);
const CisSubsetOfB = setC.isSubsetOf(setB);
const BisSubsetOfC = setB.isSubsetOf(setC);
console.log(`A isSubsetOf B = ${AisSubsetOfB}`);     // false
console.log(`C isSubsetOf B = ${CisSubsetOfB}`);     // true
console.log(`B isSubsetOf C = ${BisSubsetOfC}`);     // false

console.log("===*===*===*===*===*===*===");