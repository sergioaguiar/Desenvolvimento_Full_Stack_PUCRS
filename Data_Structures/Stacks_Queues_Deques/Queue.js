/********************************************************************************
                                    QUEUEs
*********************************************************************************

Uma queue (fila) é uma estrutura de dados do tipo FIFO.

FIFO: First In, First Out. O primeiro elemento adicionado na fila (queue) vai 
    ser o primeiro a ser removido da fila.

//############################### IMPLEMENTAÇÃO ################################

/********************************** ARRAYS *************************************
Um array e os métodos .push(val) e .shift() podem ser usados para implementar 
uma queue - O(n).

De maneira similar, os métodos .unshift(val) e .pop() também podem ser usados 
para implementar uma queue em um array - O(n). Mas não se pode misturar os 
métodos (como push e shift ou unshift e pop).

/********************************** OBJETO *************************************
Uma fila também pode ter seus itens organizados em um objeto.


/******************************** LINKED LIST **********************************
Queue podem ser implementados com Singly e Doubly Linked Lists, com  custo menor 
que arrays.


A seguir são apresentados 3 exemplos de implementação de queues, com uso de 
array, de objeto e de singly linked list.


################################# COMPONENTES ##################################

Atributos:
    1. valor(val) do elemento; 
    2. indicação de próximo da fila (propriedade next na Singly Linked List, 
            ou ordenação dos elementos no array ou por key no object); e
    3. indicação de tamanho da queue.

Métodos:
    1. enqueue(element): Insere elemento ao fim da fila;
    2. dequeue(): Retira elemento do início da fila;
    3. peek(): Retorna elemento do início da fila;
    4. isEmpty(): Verifica se fila está vazia;
    5. clear(): Esvazia fila;
    6. size(): Retorna tamanho da fila; e
    7. toString(): Retorna a fila em formato de string.
*/

/********************************************************************************
                            QUEUE SIMPLES COM ARRAY
********************************************************************************/

// Fila com Array
class ArrayQueue {
    constructor() {
        this.items = [];
    }
    // Insere elemento ao fim da fila
    enqueue(element) {
        return this.items.push(element);
    }
    // Retira elemento do início da fila
    dequeue() {
        return this.items.shift();
    }
    // Retorna elemento do início da fila
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[0];
    }
    // Verifica se fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }
    // Esvazia fila
    clear() {
        this.items = [];
    }
    // Retorna tamanho da fila
    size() {
        return this.items.length;
    }
    // Retorna a fila em formato de string
    toString() {
        return `first -> ${this.items.toString()} <- last`;
    }
}

/********************************************************************************
                                QUEUE COM OBJETO
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */

class ObjectQueue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // Insere elemento ao fim da fila
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // Retira elemento do início da fila
    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return item;
    }
    // Retorna elemento do início da fila
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }
    // Verifica se fila está vazia
    isEmpty() {
        return this.size() === 0;
    }
    // Esvazia fila
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // Retorna tamanho da fila
    size() {
        return this.count - this.lowestCount;
    }
    // Retorna a fila em formato de string
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
                                QUEUE COM NODES
********************************************************************************/
/*    Do curso JavaScript Algorithms and Data Structures Masterclass (Colt)    */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null; // primeiro da fila
        this.last = null; // último da fila
        this.count = 0;
    }
    // Insere node ao fim da fila
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.count;
    }
    // Retira um node do início da fila
    dequeue() {
        if (!this.first) return null;

        let removedNode = this.first;
        if (this.first === this.last) this.last = null;
        this.first = removedNode.next;
        removedNode.next = null;
        this.count--;
        return removedNode.val;
    }
    // Retorna elemento do início da fila
    peek() {
        if (this.isEmpty()) return undefined;
        return this.first.val;
    }
    // Verifica se fila está vazia
    isEmpty() {
        return this.size() === 0;
    }
    // Esvazia fila
    clear() {
        while (this.count !== 0) {
            this.dequeue();
        }
    }
    // Retorna tamanho da fila
    size() {
        return this.count;
    }
    // Retorna a fila em formato de string
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
                            POPULANDO UMA QUEUE DE NODES
********************************************************************************/
let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);

/********************************************************************************
                            EXEMPLO DE USO DE FILA:
                        HOT POTATO GAME (CIRCULAR QUEUE)
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */
/*
As pessoas sentam em círculo e passam uma "batata quente" para o vizinho o mais 
rapidamente possível. Em certo ponto, o jogo é pausado e quem estiver com a 
batata quente é removido do círculo. O campeão é o último a permanecer no 
círculo.

*/

function hotPotato(elementList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    // Adicionando nomes a queue
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    // Simulação de passar a batata num vezes em queue
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        // Após num iterações, o primeiro da fila é eliminado
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList, //lista de perdedores 
        winner: queue.dequeue()     // último da lista é o vencedor
    };
}

const names = ["Sérgio", "Taissa", "Samuel", "Lívia", "Pedro"];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} foi eliminado no jogo da Batata Quente.`);
});

console.log(`O vencedor foi ${result.winner}!`);

/*
    Samuel foi eliminado no jogo da Batata Quente.
    Taissa foi eliminado no jogo da Batata Quente.
    Pedro foi eliminado no jogo da Batata Quente.
    Lívia foi eliminado no jogo da Batata Quente.
    O vencedor foi Sérgio!
*/