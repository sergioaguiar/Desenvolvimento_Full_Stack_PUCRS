/********************************************************************
                            WEAK MAP
*********************************************************************
 
Como um Map é uma coleção de elementos de pares[key,value]. Porém as
chaves são fracamente referenciadas e DEVEM ser objetos. Os valores 
podem ser de qualquer tipo.

 Nos WeakMaps nativos, referências aos objetos chave são segurados de 
 modo "fraco", o que significa que eles não previnem a coleção pelo 
 Garbage Collector no caso de não haver nenhuma outra referência ao 
 objeto.
 
Por conta das referências serem fracas, chaves de WeakMap não são 
enumeráveis. Não existe um método que dá a você uma lista de chaves. 
Assim, para resgatar um valor, deve-se passar ao WeakMap o objeto chave.
Se este for perdido, não há como buscá-lo em uma lista. de chaves.

Para mais informações: 
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakMap>


/********************************************************************************
                    CARACTERÍSTICAS WEAK MAP - ECMAScript 2015
********************************************************************************/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

/* 
Para verificar se o WeakMap contém valores específicos, retorná-los ou deletá-los,
é necessário passar um objeto criado como chave:
    - weakmap.set(obj, valor): insere novo par [key, valor] no weakmap.
    - weakmap.has(obj): verifica se weakmap contém elemento com key.
    - weakmap.get(obj): retorna valor relacionado a key. 
    - weakmap.delete(obj): deleta elemento do weakmap.
*/

const weakmap = new WeakMap();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")

const obj1 = { name: "Gandalf" }
const obj2 = { name: "John" }
const obj3 = { name: "Tyrion" }

weakmap.set(obj1, "gandalf@email.com");
weakmap.set(obj2, "johnsnowf@email.com");
weakmap.set(obj3, "tyrion@email.com");

console.log(weakmap.has(obj1));     // true
console.log(weakmap.get(obj3));     // tyrion@email.com

weakmap.delete(obj1);               // true
console.log(weakmap);               // {{name: 'John'} => 'johnsnowf@email.com', {name: 'Tyrion'} => 'tyrion@email.com'}
