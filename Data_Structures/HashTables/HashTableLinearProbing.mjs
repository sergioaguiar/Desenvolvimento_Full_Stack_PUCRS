/**************************************************************************
                    HASH TABLE COM LINEAR PROBING
***************************************************************************

Classe filha de HashTableDefective, sobrescreve os métodos put(key, value),
remove(key) e get(key), implementando tratamento de colisões por Linear 
Probing. 

Neste exemplo ainda utilizamos  método gerador de hash ruim - loseloseHashCode(key), 
herdado da classe mãe, de forma que sejam geradas mais colisões, para observar o 
tratamento de colisões dado pela classe.

Para implementar uma classe com método hash mais eficiente, basta substituir 
loseloseHashCode(key) e hashCode(key) por:

    hashCode(key) {
            return this.#djb2HashCode(key);
        }
    #djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }

############################### COMPONENTES ###############################

Classe ValuePair (importada de ./ValuePair.mjs") contendo:
    Atributos
        1. key (chave); e
        2. value (valor).
    
    Método
        1. toString: retorna string no formato "[#key: value]".

Classe HashTableDefective (classe mãe importada de ./HashTableDefective.mjs) contendo 

    Atributos
        1. table: coleção de elementos.

    Métodos herdados 
        4. clear(): Remove todos valores da HashTable;
        5. size(): Retona número de valores da HashTable;
        6. isEmpty(): Verifica se HashTable está vazia;
        7. hashCode(key): Retorna código hash; 
        8. #loseloseHashCode(key): Gera hash a partir de key (privado);
        9. #toStrFn(key): Converte key em strings (privado); e
        10.toString(): Retorna a hash table em formato de String.

Classe HashTableLinearProbing contendo:
    Métodos sobrescritos
        1. put(key, value): Adiciona  ou atualiza elemento à HashTable;
        2. remove(key): Remove value da HashTable usando key como parâmetro; 
        3. #verifyRemoveSideEffect(key, removedPosition): Move elemento com mesmo hash 
                após remoção de elemento; e
        4. get(key): Retorna valor relacionado a key.

*******************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

// ValuePair são nodos que armazenam valores dos elementos de HashTable.
import { ValuePair } from "./ValuePair.mjs";

// HashTableDefective é classe mãe de HashTableSeparateChaining.
import { HashTableDefective as HashTable } from "./HashTableDefective.mjs";

class HashTableLinearProbing extends HashTable {

    // Adiciona  ou atualiza elemento à HashTable
    put(key, value) {
        if (key == null || value == null) return false;
        const position = this.hashCode(key);
        if (!this.table[position]) {
            this.table[position] = new ValuePair(key, value);
        } else {
            let index = position + 1;
            while (this.table[index] != null) {
                index++;
            }
            this.table[index] = new ValuePair(key, value);
        }
        return true;
    }

    // Remove value da HashTable usando key como parâmetro
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.#verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[position];
                this.#verifyRemoveSideEffect(key, position);
                return true;
            }
        }
        return false;
    }

    // Move elemento com mesmo hash após remoção de elemento
    #verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }

    // Retorna valor relacionado a key
    get(key) {
        const position = this.hashCode(key);
        if (this.table[position]) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                return this.table[index].value;
            }
        }
        return undefined;
    }
}

//############################### Testes ###############################

const hash = new HashTableLinearProbing();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos HashTableSeparateChaining:")
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
console.log(hash.get("Jonathan") + " - Jonathan");        // jonathan@email.com - Jonathan
console.log(hash.get("Jamie") + " - Jamie");              // jamie@email.com - Jamie
console.log(hash.get("Jack") + " - Jack");                // jack@email.com - Jack
console.log(hash.get("Jasmine") + " - Jasmine");          // jasmine@email.com - Jasmine
console.log(hash.get("Jake") + " - Jake");                // jake@email.com - Jake
console.log(hash.get("Nathan") + " - Nathan");            // nathan@email.com - Nathan
console.log(hash.get("Athelstan") + " - Athelstan");      // athelstan@email.com - Athelstan
console.log(hash.get("Sue") + " - Sue");                  // sue@email.com - Sue
console.log(hash.get("Aethelwulf") + " - Aethelwulf");    // Aethelwulf@email.com - Aethelwulf
console.log(hash.get("Sargeras") + " - Sargeras");        // sargeras@email.com - Sargeras

console.log("===*===*===*===*===*===*===");


