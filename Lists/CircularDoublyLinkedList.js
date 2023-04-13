/********************************************************************
                    CIRCULAR DOUBLY LINKED LISTS
*********************************************************************
 
Uma Circular Doubly Linked List é uma objeto que referencia uma 
sequencia de elementos não contíguos na memória. Cada um destes 
elementos consiste  de um node que guarda um valor (val) e duas 
referências que apontam para o próximo elemento (next) e o elemento 
anterior (prev) da lista. A diferença de uma lista circular para a
Doubly Linked Lists não circular e que o elemento da cauda (tail.next) 
aponta para o primeiro elemento da lista (head) e o elemento da cabeça 
(head.prev) aponta para a cauda(tail). 


############################ COMPONENTES ############################

Classe Node contendo:
    Atributos
        1. val: Valor do elemento; 
        2. next: Aponta para próximo node; e
        3. prev: Aponta para node anterior.

Classe CircularLinkedList contendo:
    Atributos 
        1. head: Aponta para elemento da lista; 
        2. tail: Aponta para o último elemento da lista; e 
        3. length: Indica quantidade de elementos da lista. 
    
    Métodos
        1. push(val): Adiciona um item ao fim da lista;
        2. pop(): Remove item do final da lista;
        3. unshift(val): Adiciona item no inicio da lista;
        4. shift(): Remove item do inicio da lista;
        5. getElementAt(index): Retorna item de index indicado;
        6. indexOf(val): Retorna o índice do elemento de valor val;
        7. set(index, val): Altera o valor do item da posição escolhida;
        8. insert(index, val): Insere item na posição escolhida;
        9. removeAt(index): Remove item na posição escolhida;
        10.remove(val): Remove da lista item de valor escolhido;
        11.reverse(): Inverte o sentido da lista;
        12.size(): Retorna o tamanho da lista;
        13.isEmpty(): Verifica se lista está vazia;
        14.getHead(): Retorna primeiro elemento da lista;
        15.getTail(): Retorna último elemento da lista; e 
        12.toString(): Retorna a lista em formato de string.
    
Obs.: O atributo tail é obrigatório em Doubly Linked List.


*********************************************************************
                    CIRCULAR DOUBLY LINKED LISTS

                    Insetion    - O(1)
                    Removal     - O(1)
                    Searching   - O(n)
                    Access      - O(n)
********************************************************************/
/*Adaptado do curso JavaScript Algorithms and Data Structures Masterclass(Colt)
e do Do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class DoublyNode extends Node {
    constructor(val) {
        super(val);
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //  Adiciona um item ao fim da lista
    push(val) {
        //Cria novo node
        let newNode = new DoublyNode(val);
        // Se lista vazia
        if (!this.head) { // poderia ser !this.tail ou this.length===0
            this.head = newNode;
            this.tail = newNode;
            // Lista com pelo menos 1 node
        } else {
            // Insere elemento a última posição e atualiza tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            // Atualiza apontadores circulares
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length++;
        return this;
    }

    // Remove item do final da lista
    pop() {
        // Se lista vazia
        if (!this.head) return undefined;

        let popped = this.tail;
        this.length--;
        this.tail = popped.prev; // atualiza tail
        // Se lista ficará vazia
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            // Se lista ficará com apenas 1 elemento
        } else if (this.length === 1) {
            this.tail.next = null;
            this.head.prev = null;
        } else {
            // atualiza ligação circular entre tail e head
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        // remove ligações entre popped e list
        popped.prev = null;
        popped.next = null;

        return popped;
    }

    // Remove item do incio da lista
    shift() {
        // Se lista vazia
        if (!this.head) return undefined;

        let shifted = this.head;
        this.length--;
        this.head = shifted.next; //atualiza head
        // Se lista ficará vazia
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            // Se lista ficará com apenas 1 elemento
        } else if (this.length === 1) {
            this.tail.next = null;
            this.head.prev = null;
        } else {
            // atualiza ligação circular entre tail e head
            this.head.prev = this.tail;
            this.tail.next = this.head;

        }
        // remove ligações entre shifted e list
        shifted.next = null;
        shifted.prev = null;
        return shifted;
    }

    // Adiciona item no inicio da lista
    unshift(val) {
        // Instancia novo node
        let newNode = new DoublyNode(val);
        // Se lista vazia
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            // Outros casos
        } else {
            newNode.next = this.head; // liga newNode a head antigo
            this.head.prev = newNode; // liga head antigo a newNode
            this.head = newNode; // atualiza head
            // atualiza ligação circular entre tail e head
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.length++;
        return this;
    }

    // Retorna item de index indicado
    getElementAt(index) {
        // Se elemento fora da lista
        if (index < 0 || index >= this.length) return null;

        let count, node;
        // Busca inicia por head
        if (index <= this.length / 2) {
            count = 0;
            node = this.head;
            while (count < index) {
                node = node.next;
                count++;
            }
            // busca inicia por tail    
        } else {
            count = this.length - 1;
            node = this.tail;
            while (count > index) {
                node = node.prev;
                count--;
            }
        }
        return node;
    }

    // Retorna o índice do elemento de valor val
    indexOf(val) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.val === val) return i;
            current = current.next;
        }
        return -1;
    }


    // Altera o valor do item da posição escolhida
    set(index, val) {
        let foundNode = this.getElementAt(index);
        // Se node não encontrado
        if (!foundNode) return false;
        // Se encontrar, modifica valor do node
        foundNode.val = val;
        return true;
    }

    // Insere item na posição escolhida
    insert(index, val) {
        // Instancia novo node
        let newNode = new DoublyNode(val);

        // Se index fora da lista
        if (index < 0 || index > this.length) return false;
        // Se index === 0
        if (index === 0) return !!this.unshift(val);
        // Se index == this.length
        if (index === this.length) return !!this.push(val);

        let prevNode = this.getElementAt(index - 1);
        let nextNode = prevNode.next;
        // Atualiza apontadores de newNode
        newNode.next = nextNode, newNode.prev = prevNode;
        // Atualiza apontador de prevNode e nextNode para newNode
        prevNode.next = newNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }

    // Remove item na posição escolhida;
    removeAt(index) {
        // Se index fora da lista
        if (index < 0 || index >= this.length) return undefined;
        // Se index === 0
        if (index === 0) return this.shift();
        // Se item final da lista
        if (index === this.length - 1) return this.pop();

        let removed = this.getElementAt(index);
        let prevNode = removed.prev;
        let nextNode = removed.next;
        //Atualiza apontadores dos prev e next nodes
        prevNode.next = nextNode, nextNode.prev = prevNode;
        //Atualiza apontadores do node removido
        removed.prev = null, removed.next = null;
        this.length--;
        return removed;
    }

    // Remove da lista item de valor escolhido
    remove(val) {
        const index = this.indexOf(val);
        return this.removeAt(index);
    }

    // Inverte o sentido da lista
    reverse() {
        // Inverte apontadores head e tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prevNode = null;
        let nextNode;

        for (let i = 0; i <= this.length; i++) {
            // Atualiza nextNode
            nextNode = current.next;
            // Inverte setas do current node
            current.next = prevNode;
            current.prev = nextNode;
            // Atualiza prevNode e current na lsita
            prevNode = current;
            current = nextNode;
        }
        return this;
    }

    // Retorna o tamanho da lista;
    size() {
        return this.length;
    }

    // Verifica se lista está vazia
    isEmpty() {
        return this.size() === 0;
    }

    // Retorna primeiro elemento da lista
    getHead() {
        return this.head;
    }

    // Retorna último elemento da lista
    getTail() {
        return this.tail;
    }

    // Retorna a lista em formato de string.
    toString() {
        if (this.isEmpty()) return "";
        let objString = `head -> ${this.head.val}`;
        let current = this.head.next;
        while (current !== this.head) {
            objString += `, ${current.val}`
            current = current.next;
        }
        objString += ` <- tail`;
        return objString;
    }
}


/********************************************************************************
                            INSTANCIANDO NOVA LISTA
********************************************************************************/

let list = new CircularDoublyLinkedList;
list.push(2).unshift(1).push(3).unshift(0);
console.log(list.toString());
list.reverse();
console.log(list.toString());