/********************************************************************
                            DICTIONARIES
*********************************************************************
 
Assim como um Set é uma coleção de elementos de pares[key,key], um
dicionário é uma coleção de elementos de pares [key, value] não 
ordenados e com chaves únicas. Dicionário também é conhecido como
Map, symbol table e associative array.
 
O ECMAScript 2015 introduziu o Map como parte do Javascript, não 
sendo mais necessária sua implementação. Contudo, como forma de 
estudo, a classe Map será implementada a seguir. Nesta implementação,
cada chave poderá guardar apenas um valor por chave.
 
 
############################ COMPONENTES ############################
 
Classe ValuePair contendo
    Atributos
        1. key (chave); e
        2. value (valor).
    
    Método
        1. toString: retorna string no formato "[#key: value]".


Classe Dictionary contendo:
    Atributos
        1. table: coleção de elementos; e
        2. toStrFn: converte key em strings.
 
    Métodos
        1. set(key, value): Adiciona novo elemento ao dicionário. Se key já
            existir, sobrescreve seu valor;
        2. remove(key): Remove value do dicionário usando key como parâmetro;
        3. hasKey(key): Verifica se Dicionário contém a key;
        4. get(key): Retorna valor relacionado a key;
        5. clear(): Remove todos valores do dicionário;
        6. size(): Retona número de valores do dicionário;
        7. isEmpty(): Verifica se dicionário está vazio;
        8. keys(): Retorna um array com as chaves do dicionário;
        9. values(): Retorna array com valores do dicionário;
        10.keyValues(): Retorna um array com pares [key, value]; e
        11.forEach(callbackFn): Itera por todos pares de valor do dicionário.
                callbackFn tem dois parâmetros (key e value) e pode ser
                interrompida se retornar false (similar a .every); e
        12.toString(): Retorna o dicionário em formato de String.
 
Obs.: Na classe é apresentado método keyValuesLegacy() com opção de código
    que roda em navegadores antigos.
 
 
*********************************************************************
                        DICTIONARY
 
                Insetion    - O(1)
                Removal     - O(1)
                Searching   - O(1)
                Access      - O(1)
********************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

// Converte item em string
function defaultToString(item) {
    if (item === null) return "NULL";
    else if (item === undefined) return "UNDEFINED";
    else if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

// JS só permite uso de String como key, por isso o uso de toStrFn
class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // Adiciona novo elemento ao dicionário. Se key já existir, sobrescreve seu valor
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            // As chaves e valores são guardados no dicionário como string e em ValuePair no formato original
            this.table[tableKey] = new ValuePair(key, value);
            return true
        }
        return false;
    }

    //Remove value do dicionário usando key como parâmetro
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // Verifica se Dicionário contém a key
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    // Retorna valor relacionado a key
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    // Remove todos valores do dicionário
    clear() {
        this.table = {};
    }

    // Retona número de valores do dicionário
    size() {
        return Object.keys(this.table).length;
    }

    // Verifica se dicionário está vazio
    isEmpty() {
        return this.size() === 0;
    }

    // Retorna um array com as chaves do dicionário
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    //Retorna array com valores do dicionário.
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    // Retorna um array com pares [key, value] (pode não funcionar em todos navegadores)
    keyValues() {
        return Object.values(this.table);
    }

    // Retorna um array com pares [key, value] (funciona todos navegadores)
    keyValuesLegacy() {
        const valuePairs = [];
        for (let k in this.table) {
            // Garante que apenas propiedades com key entrem em valuePairs
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }

    // Itera por todos pares de valor do dicionário
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) break; // Interrompe iteração se callBack retorna falso
        }
    }

    // Retorna o dicionário em formato de String
    toString() {
        if (this.isEmpty()) return "";
        let valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString += `, ${valuePairs[i].toString()}`;
        }
        return objString;
    }

}


/********************************************************************************
                            TESTANDO CLASSE DICTIONARY
********************************************************************************/

const dictionary = new Dictionary();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnowf@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.hasKey("Gandalf"));  // true
console.log(dictionary.size());             // 3

console.log(dictionary.keys());             // ['Gandalf', 'John', 'Tyrion']
console.log(dictionary.values());           // ['gandalf@email.com', 'johnsnowf@email.com', 'tyrion@email.com']
console.log(dictionary.get("Tyrion"));      // tyrion@email.com

dictionary.remove("John");

console.log(dictionary.keys());             // ['Gandalf', 'Tyrion']
console.log(dictionary.values());           //['gandalf@email.com', 'tyrion@email.com']
console.log(dictionary.keyValues());        //[{key: 'Gandalf', value: 'gandalf@email.com'}, {key: 'Tyrion', value: 'tyrion@email.com'}]

dictionary.forEach((k, v) => {
    console.log(`forEach -> key: ${k}, value: ${v}`);   //forEach -> key: Gandalf, value: gandalf@email.com
});                                                     //forEach -> key: Tyrion, value: tyrion@email.com
