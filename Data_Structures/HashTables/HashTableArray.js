/************************************************************************
                            HASH TABLE COM ARRAY
*************************************************************************

Implementação simples de Hash Table, que armazena dados em array bidimensional. 
O tratamento de colisoões é por separate chaining.

############################## COMPONENTES ##############################

Classe HashTableArray contendo 
    Atributos
        1. keyMap = []. 
        
    Métodos
        1. set(key, value): adiciona novo valor a hash table;
        2. get(key): retorna um valor da tabela;
        3. vals(): retorna array com valores da Hash Table;
        4. keys(): retorna array com chaves Hash Table; e
        5. _hash(key): gera numero hash auxiliando set(key, value) e get(key) (private).
*************************************************************************/


// Classe Hash Table
class HashTableArray {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    // Gera numero hash
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0);
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // Adiciona novo valor a hash table
    set(key, value) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) this.keyMap[hash] = [];
        this.keyMap[hash].push([key, value]);
    }

    // Retorna um valor da tabela
    get(key) {
        let hash = this._hash(key);
        if (this.keyMap[hash]) {
            for (let i = 0; i < this.keyMap[hash].length; i++) {
                if (this.keyMap[hash][i][0] === key) return this.keyMap[hash][i];
            }
        }
        return undefined;
    }
    // Retorna array com valores da Hash Table (não repete valores)
    values() {
        let vals = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    !vals.includes(this.keyMap[i][j][1]) && vals.push(this.keyMap[i][j][1]);
                }
            }
        }
        return vals;
    }

    // Retorna array com chaves Hash Table     
    keys() {
        let chaves = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    chaves.push(this.keyMap[i][j][0]);
                }
            }
        }
        return chaves;
    }
}

//############################### Testes ###############################

// Instancia nova Hash Table com 10 posições
let hash = new HashTableArray(10);

// Insere key-value pairs na Hash Table
hash.set("darkblue", "#00008b");    // Entra na posição 2
hash.set("salmon", "#fa8072");      // Entra na posição 0
hash.set("blue", "#0000FF");        // Entra na posição 4
hash.set("Antiquate", "#8d8aa0");   // Entra na posição 0
hash.set("Appetite", "#b1e5aa");    // Entra na posição 8
hash.set("Jewel", "#136843");       // Entra na posição 3
hash.set("Yellow", "#ffff00");      // Entra na posição 6
hash.set("Grape", "#6c3461");       // Entra na posição 5
hash.set("Grass", "#5cac2d");       // Entra na posição 2
hash.set("Lacey", "#caaeab");       // Entra na posição 4
hash.set("Laird", "#79853c");       // Entra na posição 2
hash.set("REPETIDO", "#79853c");    // Entra na posição 4 - valor repetido para testar se .values() volta apenas 11

// Busca valores na Hash Table
console.log(hash.get("salmon"));        // ['salmon', '#fa8072']
console.log(hash.get("darkblue"));      // ['darkblue', '#00008b']
console.log(hash.get("blue"));          // ['blue', '#0000FF']
console.log(hash.get("Antiquate"));     // ['Antiquate', '#8d8aa0']
console.log(hash.get("Appetite"));      // ['Appetite', '#b1e5aa']
console.log(hash.get("Jewel"));         // ['Jewel', '#136843']
console.log(hash.get("Yellow"));        // ['Yellow', '#ffff00']
console.log(hash.get("Grape"));         // ['Grape', '#6c3461']
console.log(hash.get("Grass"));         // ['Grass', '#5cac2d']
console.log(hash.get("Lacey"));         // ['Lacey', '#caaeab']
console.log(hash.get("Laird"));         // ['Laird', '#79853c']
console.log(hash.get("red"));           // undefined

// Busca valores na Hash Table
console.log(hash.values());        // deve voltar array com apenas 11 valores, pois existe 1 valor repetido

// Busca keys na Hash Table
console.log(hash.keys());        // deve voltar array com 12 chaves
