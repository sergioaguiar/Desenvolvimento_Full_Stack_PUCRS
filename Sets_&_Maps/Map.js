/********************************************************************
                                MAP
*********************************************************************
 
Assim como um Set é uma coleção de elementos de pares[key,key], um
Map, também conhecido como dicionário, é uma coleção de elementos de 
pares [key, value] não ordenados e com chaves únicas. Qualquer valor 
(objetos e valores primitivos) podem ser usados como chave ou valor.
 
O ECMAScript 2015 introduziu o Map como parte do Javascript, não 
sendo mais necessária sua implementação. 

Para mais informações: 
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map>


/********************************************************************************
                    CARACTERÍSTICAS MAP - ECMAScript 2015
********************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

/* 
Para inserir valores, verificar tamanho do mapa, pegar valores baseado em chave
e verificar se uma chave faz parte do mapa usamos:
    - map.set(key, valor): insere novo par [key, valor] no mapa.
    - map.has(key): verifica se mapa contém elemento com key.
    - map.size: retorna número de elementos do mapa.
    - map.get(key): retorna valor relacionado a key. 

A classe Map introduzida pelo ECMAScript 2015 retorna o @iterator com .keys() e
.values(), um objeto contendo suas chaves ou valores, que pode ser iterado em 
loop for...of.

Para deletar elementos ou limpar o mapa temos:
    - map.delete(key): deleta elemento do mapa.
    - map.clear(): retira todos elementos do mapa, deixando-o vazio.
*/

const map = new Map();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")
map.set("Gandalf", "gandalf@email.com");
map.set("John", "johnsnowf@email.com");
map.set("Tyrion", "tyrion@email.com");

console.log(map.has("Gandalf"));     // true
console.log(map.size);               // 3
console.log(map.get("Tyrion"));      // tyrion@email.com

let keys = map.keys();               // MapIterator {'Gandalf', 'John', 'Tyrion'}
for (let key of keys) {              // Gandalf
    console.log(key);                // John
}                                    // Tyrion

let values = map.values();           // MapIterator {'gandalf@email.com', 'johnsnowf@email.com', 'tyrion@email.com'}
for (let value of values) {          // gandalf@email.com
    console.log(value);              // johnsnowf@email.com
}                                    // tyrion@email.com

map.delete("Gandalf");               // true
console.log(map);                    // {'John' => 'johnsnowf@email.com', 'Tyrion' => 'tyrion@email.com'}
map.clear();
console.log(map);                    // {size: 0}
