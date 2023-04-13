/********************************************************************
                        SINGLY LINKED LISTS
*********************************************************************
 
Uma Singly Linked List é uma objeto que referencia uma sequencia de 
elementos não contíguos na memória. Cada um destes elementos consiste 
de um node que guarda um valor (element) e uma referência que aponta para 
para o próximo elemento da lista (next).

Uma grande vantagem do uso de listas é que ao retirar ou inserir novos
elementos, não é necessário reordená-los na memória como em arrays.


############################ COMPONENTES ############################

Classe Node contendo:
    Atributos
        1. element: Valor do elemento; e 
        2. next: Aponta para próximo node.

Classe SinglyLinkedList contendo:
    Atributos 
        1. head: Aponta para elemento da lista; 
        2. tail: Aponta para o último elemento da lista; e 
        3. length: Indica quantidade de elementos da lista. 
    
    Métodos
        1. push(element): Adiciona um item ao fim da lista;
        2. pop(): Remove item do final da lista;
        3. unshift(element): Adiciona item no inicio da lista;
        4. shift(): Remove item do inicio da lista;
        5. getElementAt(index): Retorna item de index indicado;
        6. indexOf(element): Retorna o índice do elemento de valor element;
        7. set(index, element): Altera o valor do item da posição escolhida;
        8. insert(index, element): Insere item na posição escolhida;
        9. removeAt(index): Remove item na posição escolhida;
        10.remove(element): Remove da lista item de valor escolhido;
        11.reverse(): Inverte o sentido da lista;
        12.size(): Retorna o tamanho da lista;
        13.isEmpty(): Verifica se lista está vazia;
        14.getHead(): Retorna primeiro elemento da lista;
        15.getTail(): Retorna último elemento da lista; e 
        12.toString(): Retorna a lista em formato de string.
    
Obs.: O atributo tail não é obrigatório, mas facilita a implementação
    de uma Singly Linked List.


*********************************************************************
                        SINGLY LINKED LISTS

                    Insetion    - O(1)
                    Removal     - O(1) or O(n)
                    Searching   - O(n)
                    Access      - O(n)
********************************************************************/
/*Adaptado do curso JavaScript Algorithms and Data Structures Masterclass(Colt)
e do Do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

export class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adiciona item ao final da lista
    push(element) {
        let newNode = new Node(element);
        // se lista vazia, aponta head e tail ao item adicionado
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //aponta ultimo item da lista ao item adicionado
            this.tail.next = newNode;
            // aponta tail ao item adicionado
            this.tail = newNode;
        }
        this.length++;
        return this;
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

    // Adiciona item no inicio da lista
    unshift(element) {
        let newNode = new Node(element);

        // se lista vazia
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Retorna item de index indicado
    getElementAt(index) {
        // se indice fora da lista
        if (index < 0 || index >= this.length) return undefined;

        let current = this.head;
        let itemNum = 0;
        // identifica e retorna o item na posição index
        while (itemNum !== index) {
            current = current.next;
            itemNum++;
        }
        return current;
    }

    // Retorna o índice do elemento de valor element
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.element === element) return i;
            current = current.next;
        }
        return -1;
    }

    // Altera o valor do item da posição escolhida
    set(index, element) {
        let foundNode = this.getElementAt(index);

        // Se indice fora da lista
        if (!foundNode) return false;

        // Altera valor do item
        foundNode.element = element;
        return true;
    }

    // Insere item na posição escolhida
    insert(index, element) {
        // Se indice fora da lista
        if (index < 0 || index > this.length) return false;
        // Indice imediatamente superior ao último da lista
        else if (index === this.length) return !!this.push(element); // A dupla negação !! transforma o retorno em boolean 
        // Indice inicial    
        else if (index === 0) return !!this.unshift(element); // A dupla negação !! transforma o retorno em boolean 

        //Demais casos
        let newNode = new Node(element);
        newNode.next = this.getElementAt(index); // Liga newNode ao elemento seguinte
        let previousNode = this.getElementAt(index - 1);
        previousNode.next = newNode;    // Liga o elemento anterior a newNode
        this.length++;
        return true;
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
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // Inverte o sentido da lista
    reverse() {
        // Identifica o primeiro item e inverte o posicionamento de tail e head
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null; // Importante começar com null para zerar .next na primeira iteração
        let next;

        for (let i = 0; i < this.length; i++) {
            // Identifica o próximo da lista
            next = node.next;
            // Inverte a seta do item atual para o anterior (null na primeira vez)
            node.next = prev;
            // Move o previous e atual na lsita
            prev = node;
            node = next;
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
        let objString = `head -> ${this.head.element}`;
        let current = this.head.next;
        while (current) {
            objString += `, ${current.element}`
            current = current.next;
        }
        objString += ` <- tail`;
        return objString;
    }
}


/********************************************************************************
                            INSTANCIANDO NOVA LISTA
********************************************************************************/

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!!!");


