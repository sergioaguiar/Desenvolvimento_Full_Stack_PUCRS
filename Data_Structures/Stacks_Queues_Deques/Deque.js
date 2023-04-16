/********************************************************************************
                                    DEQUEs
*********************************************************************************

Uma deque é uma estrutura de dados mista, com caracteristicas da queue (fila) e 
da stack (pilha) ou seja é segue ambos princípios FIFO e LIFO.

FIFO: First In, First Out. O primeiro elemento adicionado vai ser o primeiro 
    a ser removido.

LIFO: Last In, First Out. O último elemento adicionado na vai ser o primeiro 
    a ser removido.

Uma aplicação de uma deque pode ser uma lista de operações. Cada operação feita 
é inserida no final da lista. Quando o usuário seleciona o método desfazer, a 
operação é retirada (pop) do final da lista (como em uma pilha). Após um certo
número de operações pré-definido, as operações mais antigas são retiradas (enqueue)
do início da lista (como em uma fila).


//############################### IMPLEMENTAÇÃO ################################

/********************************** ARRAYS *************************************
Um array e os métodos .push(val), pop(), unshift(val) e .shift() podem ser usados 
para implementar uma deque - O(n).

/********************************** OBJETO *************************************
Uma fila também pode ter seus itens organizados em um objeto.


/******************************** LINKED LIST **********************************
Deque podem ser implementados com Doubly Linked Lists, com  custo menor que arrays.


A seguir são apresentados 3 exemplos de implementação de deques, com uso de array, 
de objeto e de doubly linked list.


################################# COMPONENTES ##################################

Atributos:
    1. valor(val) do elemento;
    2. indicação de anterior e próximo da fila (propriedade next e prev na 
            Doubly Linked List, ou ordenação dos elementos no array ou por 
            key no object);
    3. indicaçã ode tamanho da deque.

Métodos:
    1. addFront(element): Insere elemento no início da deque;
    2. addBack(element): Insere elemento ao fim da deque;
    3. removeFront(): Retira elemento do início da deque;
    4. removeBack(): Remove um item ao fim da deque;
    5. peekFront(): Retorna elemento do início da deque;
    6. peekBack(): Retorna item do fim da deque;
    7. isEmpty(): Verifica se deque está vazia;   
    8. clear(): Esvazia deque;
    9. size(): Retorna tamanho da deque; e
    10.toString(): Retorna a deque em formato de string.
*/


/********************************************************************************
                            DEQUE SIMPLES COM ARRAY
********************************************************************************/

// Fila com Array
class ArrayDeque {
    constructor() {
        this.items = [];
    }
    // Insere elemento no início da deque
    addFront(element) {
        return this.items.unshift(element);
    }
    // Insere elemento ao fim da deque
    addBack(element) {
        return this.items.push(element);
    }
    // Retira elemento do início da deque
    removeFront() {
        return this.items.shift();
    }
    // Remove um item ao fim da deque
    removeBack() {
        return this.items.pop();
    }
    // Retorna elemento do início da deque
    peekFront() {
        if (this.isEmpty()) return undefined
        return this.items[0];
    }
    // Retorna item do fim da deque
    peekBack() {
        if (this.isEmpty()) return undefined
        return this.items[this.items.length - 1];
    }
    // Verifica se deque está vazia
    isEmpty() {
        return this.items.length === 0;
    }
    // Esvazia deque
    clear() {
        this.items = [];
    }
    // Retorna tamanho da deque
    size() {
        return this.items.length;
    }
    // Retorna a deque em formato de string
    toString() {
        return `first -> ${this.items.toString()} <- last`;
    }
}

/********************************************************************************
                                DEQUE COM OBJETO
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */

class ObjectDeque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // Insere elemento no início da deque
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    // Insere elemento ao fim da deque
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // Retira elemento do início da deque
    removeFront() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return item;
    }
    // Remove um item ao fim da deque
    removeBack() {
        if (this.isEmpty()) return undefined;
        this.count--;
        const item = this.items[this.count];
        delete this.items[this.count];
        return item;
    }
    // Retorna elemento do início da deque
    peekFront() {
        if (this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }
    // Retorna item do fim da deque
    peekBack() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }
    // Verifica se deque está vazia
    isEmpty() {
        return this.size() === 0;
    }
    // Esvazia deque
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // Retorna tamanho da deque
    size() {
        return this.count - this.lowestCount;
    }
    // Retorna a deque em formato de string
    toString() {
        if (this.isEmpty()) return "";
        let objString = `first -> ${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `, ${this.items[i]}`;
        }
        objString += ` <- last`;
        return objString;
    }
}

/********************************************************************************
                                DEQUE COM NODES
********************************************************************************/
/*Adaptado do curso JavaScript Algorithms and Data Structures Masterclass(Colt)*/
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.first = null; // primeiro da fila
        this.last = null; // último da fila
        this.length = 0;
    }
    // Insere elemento no início da deque
    addFront(element) {
        let newNode = new Node(element);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            // Outros casos
        } else {
            newNode.next = this.first; // liga newNode a first antigo
            this.first.prev = newNode; // liga first antigo a newNode
            this.first = newNode; // atualiza first
        }
        this.length++;
        return this;
    }
    // Insere elemento ao fim da deque
    addBack(element) {
        let newNode = new Node(element);
        if (!this.first) { // poderia ser !this.last ou this.length===0
            this.first = newNode;
            this.last = newNode;
            // Lista com pelo menos 1 node
        } else {
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    // Retira elemento do início da deque
    removeFront() {
        if (!this.first) return undefined;
        let shifted = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = shifted.next; //atualiza first
            this.first.prev = null; // corta link do new first com shifted
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }
    // Remove um item ao fim da deque
    removeBack() {
        if (!this.first) return undefined;
        let popped = this.last;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.last = popped.prev; // atualiza last
            this.last.next = null; // quebra ligação entre last e popped
            popped.prev = null; // remove ligação entre popped e list
        }
        this.length--;
        return popped;
    }
    // Retorna elemento do início da deque
    peekFront() {
        if (this.isEmpty()) return undefined;
        return this.first.val;
    }
    // Retorna item do fim da deque
    peekBack() {
        if (this.isEmpty()) return undefined;
        return this.last.val;
    }
    // Verifica se deque está vazia
    isEmpty() {
        return this.size() === 0;
    }
    // Esvazia deque
    clear() {
        while (this.length !== 0) {
            this.removeBack();
        }
    }
    // Retorna tamanho da deque
    size() {
        return this.length;
    }
    // Retorna a deque em formato de string
    toString() {
        if (this.isEmpty()) return "";
        let current = this.first;
        let objString = `first -> ${current.val}`;
        while (current.next !== null) {
            objString += `, ${current.next.val}`;
            current = current.next;
        }
        objString += ` <- last`;
        return objString;
    }
}

/********************************************************************************
                            POPULANDO UMA DEQUE DE NODES
********************************************************************************/
let deque = new Deque();

deque.addFront(10);
deque.addFront(9);
deque.addFront(8);
deque.addFront(7);
deque.addFront(6);
deque.addFront(5);
deque.addFront(4);
deque.addFront(3);
deque.addFront(2);
deque.addFront(1);
deque.addBack(11);
deque.addBack(12);
deque.addBack(13);
deque.addBack(14);
deque.addBack(15);
deque.addBack(16);
deque.addBack(17);
deque.addBack(18);
deque.addBack(19);
deque.addBack(20);

/********************************************************************************
                            EXEMPLO DE USO DE DEQUE:
                                PALINDROME CHECKER
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */
/*
Palíndromo é uma palavra, frase, numero ou outra sequencia de caracteres que se 
pode ler, indiferentemente, da esquerda para a direita ou vice-versa.

Ex.: osso, Ana, radar, Renner, Roma é amor.
*/

function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        aString !== null && aString.length === 0) {
        return false;
    }
    // Inicia deque, transforma letras em minusculas e remove espaços de aString
    const deque = new Deque();
    const loweString = aString.toLocaleLowerCase().split(" ").join("");

    let isEqual = true;
    let firstChar, lastChar;
    // Adiciona cada letra como um node de deque
    for (let i = 0; i < loweString.length; i++) {
        deque.addBack(loweString[i]);
    }
    // Verifica se é palíndromo
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront().val;
        lastChar = deque.removeBack().val
        if (firstChar !== lastChar) isEqual = false;
    }
    return isEqual;
}

console.log(`a: ${palindromeChecker("a")}`);                        // a: true
console.log(`aa: ${palindromeChecker("aa")}`);                      // aa: true
console.log(`kayak: ${palindromeChecker("kayak")}`);                // kayak: true
console.log(`Osso: ${palindromeChecker("Osso")}`);                  // Osso: true
console.log(`Roma é amor: ${palindromeChecker("Roma é amor")}`);    // Roma é amor: true
console.log(`Step on pets: ${palindromeChecker("Step on pets")}`);  // Step on pets: false
console.log(`vice-versa: ${palindromeChecker("vice-versa")}`);      // vice-versa: false
console.log(`palíndormo: ${palindromeChecker("palíndormo")}`);      // palíndormo: false
console.log(`"": ${palindromeChecker("")}`);                        // "": false
console.log(`undefined: ${palindromeChecker(undefined)}`);          // undefined: false
console.log(`null: ${palindromeChecker(null)}`);                    // null: false