/**************************************************************************
                            HASH TABLE DEFECTIVE
***************************************************************************

Trata-se de uma implementação simples de Hash Table, cujos métodos não são
capazes de lidar com colisões. Desta forma, novos valores sobrescrevem 
valores já inseridos na tabela se suas chaves gerarem o mesmo hash (colisões).

O objetivo é demonstrar a ocorrência de colisões e como é importante lidar
com elas para não perdermos dados. Para tanto, foi implementada um método
gerador de hash ruim - loseloseHashCode(key), de forma que sejam geradas 
mais colisões.

A classe HashTableDefective servirá de classe mãe para as classes filhas 
HashTableSeparateChaining e HashTableLinearProbing, como forma de demonstrar 
herança em JavaScript. Além disso, foram criados dois métodos privados, pois 
não precisam ser acessados externamente as instâncias da classe.

############################### COMPONENTES ###############################
 
Classe ValuePair (importada de ./ValuePair.mjs") contendo:
    Atributos
        1. key (chave); e
        2. value (valor).
    
    Método
        1. toString: retorna string no formato "[#key: value]".


Classe HashTableDefective contendo:
    Atributos
        1. table: coleção de elementos do tipo ValuePair.
 
    Métodos
        1. put(key, value): Adiciona  ou atualiza elemento à HashTable;
        2. remove(key): Remove value da HashTable usando key como parâmetro; 
        3. get(key): Retorna valor relacionado a key;
        4. clear(): Remove todos valores da HashTable;
        5. size(): Retona número de valores da HashTable;
        6. isEmpty(): Verifica se HashTable está vazia;
        7. hashCode(key): Retorna código hash; 
        8. #loseloseHashCode(key): Gera hash a partir de key (privado);
        9. #toStrFn(key): Converte key em strings (privado); e
        10.toString(): Retorna a hash table em formato de String.

*******************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

// ValuePair são nodos que armazenam valores dos elementos de HashTable.
import { ValuePair } from "./ValuePair.mjs";

export class HashTableDefective {
    constructor() {
        this.table = {};
    }

    // Adiciona  ou atualiza elemento à HashTable
    put(key, value) {
        if (key == null || value == null) return false;
        const position = this.hashCode(key);
        this.table[position] = new ValuePair(key, value);
        return true;
    }

    // Remove value da HashTable usando key como parâmetro
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    // Retorna valor relacionado a key
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    // Remove todos valores da HashTable
    clear() {
        this.table = {};
    }

    // Retona número de valores da HashTable
    size() {
        return Object.keys(this.table).length;
    }

    // Verifica se HashTable está vazia
    isEmpty() {
        return this.size() === 0;
    }

    // Retorna código hash
    hashCode(key) {
        return this.#loseloseHashCode(key);
    }
    //Gera hash a partir de key (privado)
    #loseloseHashCode(key) {
        if (typeof key === "number") return key;
        const tableKey = this.#toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    // Converte key em strings
    #toStrFn(key) {
        if (key === null) return "NULL";
        else if (key === undefined) return "UNDEFINED";
        else if (typeof key === "string" || key instanceof String) {
            return `${key}`;
        }
        return key.toString();
    }

    // Retorna a hash table em formato de String
    toString() {
        if (this.isEmpty()) return "";
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
        for (let i = 1; i < keys.length; i++) {
            objString += `, {${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString;
    }

}


//############################### Testes ###############################

const hash = new HashTableDefective();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos HashTableDefective:")
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnowf@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.hashCode("Gandalf") + " - Gandalf");  // 19 - Gandalf
console.log(hash.hashCode("John") + " - John");        // 29 - John
console.log(hash.hashCode("Tyrion") + " - Tyrion");    // 16 - Tyrion

console.log(hash.get("Gandalf"));  // gandalf@email.com
console.log(hash.get("Sérgio"));   // undefined

hash.remove("Gandalf");
console.log(hash.get("Gandalf"));  // undefined

hash.clear();

console.log("===*===*===*===*===*===*===");
console.log("Testes de colisão:");

hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "Aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");


console.log("---------------------------");
console.log("Hash para cada chave:");
console.log("---------------------------");

console.log(hash.hashCode("Ygritte") + " - Ygritte");          // 4 - Ygritte
console.log(hash.hashCode("Jonathan") + " - Jonathan");        // 5 - Jonathan
console.log(hash.hashCode("Jamie") + " - Jamie");              // 5 - Jamie
console.log(hash.hashCode("Jack") + " - Jack");                // 7 - Jack
console.log(hash.hashCode("Jasmine") + " - Jasmine");          // 8 - Jasmine
console.log(hash.hashCode("Jake") + " - Jake");                // 9 - Jake
console.log(hash.hashCode("Nathan") + " - Nathan");            // 10 - Nathan
console.log(hash.hashCode("Athelstan") + " - Athelstan");      // 7 - Athelstan
console.log(hash.hashCode("Sue") + " - Sue");                  // 5 - Sue
console.log(hash.hashCode("Aethelwulf") + " - Aethelwulf");    // 5 - Aethelwulf
console.log(hash.hashCode("Sargeras") + " - Sargeras");        // 10 - Sargeras

console.log("---------------------------");
console.log("Resultado das colisões:");
console.log("---------------------------");

console.log(hash.get("Ygritte") + " - Ygritte");          // ygritte@email.com - Ygritte
console.log(hash.get("Jonathan") + " - Jonathan");        // Aethelwulf@email.com - Jonathan
console.log(hash.get("Jamie") + " - Jamie");              // Aethelwulf@email.com - Jamie
console.log(hash.get("Jack") + " - Jack");                // athelstan@email.com - Jack
console.log(hash.get("Jasmine") + " - Jasmine");          // jasmine@email.com - Jasmine
console.log(hash.get("Jake") + " - Jake");                // jake@email.com - Jake
console.log(hash.get("Nathan") + " - Nathan");            // sargeras@email.com - Nathan
console.log(hash.get("Athelstan") + " - Athelstan");      // athelstan@email.com - Athelstan
console.log(hash.get("Sue") + " - Sue");                  // Aethelwulf@email.com - Sue
console.log(hash.get("Aethelwulf") + " - Aethelwulf");    // Aethelwulf@email.com - Aethelwulf
console.log(hash.get("Sargeras") + " - Sargeras");        // sargeras@email.com - Sargeras

console.log("===*===*===*===*===*===*===");