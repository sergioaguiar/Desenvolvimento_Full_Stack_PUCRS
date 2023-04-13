/********************************************************************************
                                    STACKs
*********************************************************************************

Um stack (pilha) é uma estrutura de dados do tipo LIFO.

LIFO: Last In, First Out. O último elemento adicionado na pilha (stack) vai ser 
    o primeiro a ser removido da pilha.

//############################### IMPLEMENTAÇÃO ################################

/********************************** ARRAYS *************************************
Um array e os métodos .push(val) e .pop() podem ser usados para implementar um 
stack - O(1).

De maneira similar, os métodos .unshift(val) e .shift() também podem ser usados 
para implementar um stack em um array - O(n). Mas não se pode misturar os métodos 
(como push e shift ou unshift e pop). Contudo, com shift e unshift, todos elementos 
do array terão seus idices reorganizados a cada inserção ou remoção de elemento da 
pilha. Assim, push e pop são metodos menos custosos para implementar um stack.

/********************************** OBJETO *************************************
Uma pilha também pode ter seus itens organizados em um objeto.


/******************************** LINKED LIST **********************************
Stacks podem ser implementados com Singly e Doubly Linked Lists, com custo de
processamento menor que arrays.

Obs.: Como é muito custoso retirar(pop) itens do final de Singly Linked Lists - O(n), 
em Stacks, utilizamos o métodos push e pop para adicionar ou retirar itens do início 
da lista, que equivale ao topo da pilha - O(1).


A seguir são apresentados 3 exemplos de implementação de stacks, com uso de array, 
de objeto e de singly linked list.


################################# COMPONENTES ##################################

Atributos:
    1. valor(val) do elemento;
    2. indicação de topo e fundo de pilha (propriedade top e bottom na Singly 
            Linked List, ou ordenação dos elementos no array ou por key no object);
    3. indicação de tamanho da pilha.

Métodos:
    1. push(element): Adiciona um item ao topo da pilha;
    2. pop(): Remove um item ao topo da pilha;
    3. peek(): Retorna item do topo da pilha;
    4. isEmpty(): Verifica se pilha está vazia;
    5. clear(): Esvazia pilha;
    6. size(): Retorna tamanho da pilha; e
    7. toString(): Retorna a pilha em formato de string.
*/

/********************************************************************************
                            STACK SIMPLES COM ARRAY
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */

class ArrayStack {
    constructor() {
        this.items = [];
    }
    // Adiciona um item ao topo da pilha
    push(element) {
        return this.items.push(element);
    }
    // Remove um item ao topo da pilha
    pop() {
        return this.items.pop();
    }
    // Retorna item do topo da pilha
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.items.length - 1];
    }
    // Verifica se pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }
    // Esvazia pilha
    clear() {
        this.items = [];
    }
    // Retorna tamanho da pilha
    size() {
        return this.items.length;
    }
    // Retorna a pilha em formato de string
    toString() {
        return `bottom -> ${this.items.toString()} <- top`;
    }
}

/********************************************************************************
                                STACK COM OBJETO
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */

class ObjectStack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // Adiciona um item ao topo da pilha
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // Remove um item ao topo da pilha
    pop() {
        if (this.isEmpty()) return undefined;
        this.count--;
        const item = this.items[this.count];
        delete this.items[this.count];
        return item;
    }
    // Retorna item do topo da pilha
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }
    // Verifica se pilha está vazia
    isEmpty() {
        return this.count === 0;
    }
    // Esvazia pilha
    clear() {
        this.items = {};
        this.count = 0;
    }
    // Retorna tamanho da pilha
    size() {
        return this.count;
    }
    // Retorna pilha em formato de string
    toString() {
        if (this.isEmpty()) return "";
        let objString = `bottom -> ${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString += `, ${this.items[i]}`;
        }
        objString += ` <- top`;
        return objString;
    }
}

/********************************************************************************
                                STACK DE NODES
********************************************************************************/
/*    Do curso JavaScript Algorithms and Data Structures Masterclass (Colt)    */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // topo da pilha
        this.bottom = null; // fundo da pilha
        this.height = 0;
    }
    // Adiciona um item ao topo da pilha(.top)
    push(val) {
        let newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let topNode = this.top;
            this.top = newNode;
            this.top.next = topNode;
        }
        return ++this.height;
    }
    // Remove um item ao topo da pilha(.top)
    pop() {
        if (!this.top) return undefined;
        let topNode = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = topNode.next;
        topNode.next = null;
        this.height--;
        return topNode.val;
    }
    // Retorna item do topo da pilha
    peek() {
        if (this.isEmpty()) return undefined;
        return this.top;
    }
    // Verifica se pilha está vazia
    isEmpty() {
        return this.height === 0;
    }
    // Esvazia pilha
    clear() {
        while (this.height !== 0) {
            this.pop();
        }
    }
    // Retorna tamanho da pilha
    size() {
        return this.height;
    }
    // Retorna pilha em formato de string a partir do topo
    toString() {
        if (this.isEmpty()) return "";
        let current = this.top;
        let objString = `top -> ${current.val}`;
        while (current.next !== null) {
            objString += `, ${current.next.val}`;
            current = current.next;
        }
        objString += ` <- bottom`;
        return objString;
    }
}

/********************************************************************************
                            POPULANDO UMA STACK DE NODES
********************************************************************************/
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

/********************************************************************************
                            EXEMPLO DE USO DE PILHA:
                    TRANSFORMANDO DECIMAL EM BINÁRIO COM STACK
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */
/*
A ordem dos restos (remainder) obtidas nas divisões sucessivas do número decimal é
o inverso do seu número binário equivalente. Assim, podemos adicionar estes restos 
em uma estrutura como a pilha e retirar os números obtidos na ordem inversa (LIFO),
para obter o binário.

Exemplo:
    10 / 2 == 5  | rem == 0    Stack.push(0) -> [0]
     5 / 2 == 2  | rem == 1    Stack.push(0) -> [0, 1]
     2 / 2 == 1  | rem == 0    Stack.push(0) -> [0, 1, 0]
     1 / 2 == 0  | rem == 1    Stack.push(0) -> [0, 1, 0, 1]
    
    Binário de 10 vai ser a ordem inversa dos rem obtidos, ou seja, a concatenação
    de 4 Stack.pop() == 1010.
*/

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let remainder;
    let binaryString = "";
    // Insere reminders na pilha
    if (number === 0) remStack.push(number);
    while (number > 0) {
        remainder = Math.floor(number % 2);
        remStack.push(remainder);
        number = Math.floor(number / 2);
    }
    // Concatena elementos em binaryString
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(10));   // 1010
console.log(decimalToBinary(233));  // 11101001
console.log(decimalToBinary(1000)); // 1111101000


/********************************************************************************
                        EXEMPLO DE USO DE PILHA:
                TRANSFORMANDO DECIMAL EM QUALQUER OUTRA BASE
********************************************************************************/
/*     Do livro Learning JS Data Structures and Algorithms (Loiane Groner)     */
/*
Podemos adaptar a função acima para converter decimal em uma outra base qualquer
de 2 a 36. Para tanto, a função recebe o número decimal e a base para qual se 
deseja converter esse número.
*/

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = decNumber;
    let remainder;
    let baseString = "";
    // Verifica base
    if (base < 2 || base > 36) return "";
    // Insere reminders na pilha
    if (number === 0) remStack.push(number);
    while (number > 0) {
        remainder = Math.floor(number % base);
        remStack.push(remainder);
        number = Math.floor(number / base);
    }
    // Concatena elementos em baseString
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // Converte um reminder decimal na base 
    }
    return baseString;
}

console.log(baseConverter(100345, 2));   // 11000011111111001
console.log(baseConverter(100345, 8));   // 303771
console.log(baseConverter(100345, 16));  // 187E9
console.log(baseConverter(100345, 356)); // 2AV0