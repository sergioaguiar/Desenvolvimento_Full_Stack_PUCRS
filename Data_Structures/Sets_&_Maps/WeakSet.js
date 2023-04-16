/********************************************************************
                                SET
*********************************************************************
 
Como um Set, o WeakSet é uma coleção de elementos não ordenados e únicos, 
ou seja, os elementos presentes não se repetem. Contudo, um WeakSet só 
pode ser uma coleção de objetos, não aceitando qualquer outro tipo. 

O WeakSet é fraco. Referências aos objetos nas coleções são mantidas 
"fracamente". Se não há outra referência para um objeto mantido na WeakSet, 
eles pode ser coletados pelo gerenciamento de memória (garbage collection).

Por conta das referências serem fracas, chaves de WeakSet não são enumeráveis.

Para mais informações: 
<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakSet>


/********************************************************************************
                            CARACTERÍSTICAS WEAK SET
********************************************************************************/

/* 
Para inserir valores, verificar tamanho do set, verificar se set tem valores usamos:
    - weakset.add(obj): insere novo objeto no weakset.
    - weakset.has(obj): verifica se weakset contém objeto.
    - weakset.delete(obj): deleta objeto do weakset.

*/

const weakset = new WeakSet();
console.log("===*===*===*===*===*===*===");
console.log("Testes básicos:")

const obj1 = { num: 1 }
const obj2 = { num: 2 }
const obj3 = { num: 3 }

weakset.add(obj1);
weakset.add(obj2);
weakset.add(obj3);

console.log(weakset.has(obj1));     // true

weakset.delete(obj2);                       
console.log(weakset);               // {{num: 3}, {num: 1}}
