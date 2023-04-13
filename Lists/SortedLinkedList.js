/********************************************************************
                        SORTED LINKED LISTS
*********************************************************************
 
Uma Sorted Linked List é uma lista que mantém seus elementos ordenados.
Cada elemento, ao ser inserido, é posicionado de forma que a lista
mantenha-se ordenada. Desta forma, não depende de algoritmos de
ordenação.

A Sorted Linked List aqui apresentada é derivada da Singly Linked List.
Como os elementos são inseridos de forma a manter a ordenação,
métodos de inserção nas pontas da lista (push e unshift) não fazem
mais sentido, sendo o unico método de inserção o insert(index, val).

############################ COMPONENTES ############################

Classe Node contendo:
    Atributos
        1. val: Valor do elemento; e 
        2. next: Aponta para próximo node.

Classe SinglyLinkedList contendo:
    Atributos 
        1. head: Aponta para elemento da lista; 
        2. tail: Aponta para o último elemento da lista; e 
        3. length: Indica quantidade de elementos da lista. 
    
    Métodos
        1. pop(): Remove item do final da lista;
        2. shift(): Remove item do inicio da lista;
        3. getElementAt(index): Retorna item de index indicado;
        4. indexOf(val): Retorna o índice do elemento de valor val;
        5. insert(val): Insere item na lista;
        6. getIndexNextSortedElement(val): Retorna indice em que o novo elemento deve ser adicionado;    
        7. removeAt(index): Remove item na posição escolhida;
        8. remove(val): Remove da lista item de valor escolhido;
        9. size(): Retorna o tamanho da lista;
        10.isEmpty(): Verifica se lista está vazia;
        11.getHead(): Retorna primeiro elemento da lista;
        12.getTail(): Retorna último elemento da lista; e 
        13.toString(): Retorna a lista em formato de string.
    
Obs.: O atributo tail não é obrigatório, mas facilita a implementação
    de uma Singly Linked List.


*********************************************************************
                        SORTED LINKED LISTS

                    Insetion    - O(1)
                    Removal     - O(1) or O(n)
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

class SortedLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Remove item do final da lista
    pop() {
        // Se lista vazia
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        // Identifica o último e penúltimo itens da lista
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // Atualiza tail e decrementa length
        this.tail = newTail;
        this.tail.next = null;
        current.next = null;
        this.length--;

        // Se lista ficou vazia, reseta head e tail
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Remove item do inicio da lista
    shift() {
        // Se lista vazia
        if (!this.head) return undefined;

        // Identifica primeiro item e atualiza lista
        let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--;

        // Se lista ficou vazia, reseta tail
        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    // Retorna item de index indicado
    getElementAt(index) {
        // se indice fora da lista
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let itemNum = 0;
        // identifica e retorna o item na posição index
        while (itemNum !== index) {
            current = current.next;
            itemNum++;
        }
        return current;
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

    // Insere item na lista
    insert(val) {
        let newNode = new Node(val);
        // se lista vazia, aponta head e tail ao item adicionado
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            let position = this.getIndexNextSortedElement(val);
            newNode.next = this.getElementAt(position); // Liga newNode ao elemento seguinte
            if (position === 0) this.head = newNode;
            else {
                let previousNode = this.getElementAt(position - 1);
                previousNode.next = newNode;    // Liga o elemento anterior a newNode
                if (position === this.length) this.tail = newNode;
            }
        }
        this.length++;
        return this;
    }

    // Retorna indice em que o novo elemento deve ser adicionado para lista ordenada
    getIndexNextSortedElement(val) {
        let current = this.head;
        let index;
        for (index = 0; index < this.length; index++) {
            if (val < current.val) return index;
            current = current.next;
        }
        return index;
    }

    // Remove item na posição escolhida
    removeAt(index) {
        // Se indice fora da lista
        if (index < 0 || index >= this.length) return undefined;
        // Indice imediatamente superior ao último da lista
        else if (index === this.length - 1) return this.pop();
        // Indice inicial    
        else if (index === 0) return this.shift();

        // emais casos
        let removedNode = this.getElementAt(index);
        let previousNode = this.getElementAt(index - 1);  // Seleciona Node anterior
        previousNode.next = this.getElementAt(index + 1); // Liga anterior a posterior
        this.length--;
        return removedNode;
    }

    // Remove da lista item de valor escolhido;
    remove(val) {
        const index = this.indexOf(val);
        return this.removeAt(index);
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
        while (current) {
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

let list = new SortedLinkedList();
list.insert(250);
list.insert(249);
list.insert(1);


