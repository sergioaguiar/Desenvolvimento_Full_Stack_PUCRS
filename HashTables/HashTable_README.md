# HASH TABLE
 
Hash Tables estão presentes em todas linguagens de programação. São estruturas de dados usadas para guardar pares de chaves e valores (key-values pairs). São similares a arrays, mas as chaves(keys) não são ordenadas. 

Hash Tables são rápidas para as operações de: achar valores, adicionar novo valor e remover valor. HashTable também é conhecida como HashMap.
 
Hash functions sempre devolvem um output de tamanho fixo, idependentemete do tamanho do input. Além disso elas devem:
1. Ser rápidas - O(1);
2. Não concentrar outputs em índices específicos, mas distribuí-los uniformemente;
3. Ser determinísticas - um mesmo input deve gerar sempre um mesmo output.

## LIDANDO COM COLISÕES

Colisões são inevitáveis, mesmo com grandes arrays e boas funções hash.

Existem muitas estratégias para lidar com colisões. Aqui focaremos em 2:

### 1. Separate Chaining
    
Com separate chaining, em cada índice do array guardamos valores usando uma estrutura de dados mais sofisticada (como um array ou uma linked list).

Desta forma é possível guardar multiplos pares de chave-valor na mesma posição. Para achar um valor, buscamos em uma lista de pares chave-valor no índice do hash. O número de elementos que a hash table com separate chaining comporta é ilimitado.

### 2. Linear Probing 

Com linear probing, quando uma colisão é encontrada, buscamos o próximo índice vazio no array.

Desta forma cada índice irá apresentar no máximo um par chave-valor. Assim, a quantidade máxima de elementos de uma hash table com linear probing é igual a array.length.

*************************************************************************
## HASH TABLE - Big O

Insetion - O(1)
Deletion - O(1)
Access   - O(1) 
*************************************************************************

## IMPLEMENTAÇÕES

Nesta pasta estão disponíveis 4 implementções de HashTables:


### 1. HashTableArray

Implementação simples de Hash Table, que armazena dados em array bidimensional. O tratamento de colisoões é por separate chaining. 


### 2. HashTableDefective

Classe mais complexa, que armazena dados em nodes (ValuePair) importados do arquivo ValuePair.mjs. Os nodes guardam a chave original e seu valor correspondente e são armazenados como valores em tabela (object) da classe HashTableDefective, cujas chaves são hash gerados a partir da chave original. Desta forma são mantidas tanto o valor da chave original quanto seu hash. 


O método #loseloseHashCode(key), que gera número hash, e #toStrFn(key), que converte keys em strings, são privados, sendo acessiveis apenas dentro da classe.

A classe é propositalmente defeituosa, pois não lida com colisões. Desta forma, é possível demonstrar o efeito da inserção de novos dados cujas chaves geram hash que colide com dados da tabela. Foi utilizado o método #loseloseHashCode, que gera muitas colisões. 


### 3. HashTableLinearProbing

É uma classe filha de HashTableDefective que herda seus atributos e métodos. Contudo sobrescreve o método de inserção (put), seleção (get) e deleção (remove) para lidar com colisões por Lienar Probing. 

O método remove conta com o método auxiliar privado #verifyRemoveSideEffect e, conjuntamente, são capazes de realocar valores para que a tabela não fique com espaços vazios após as deleções.

Ainda é utilizado o método #loseloseHashCode para gerar propositalmente, diversas colisões e demonstrar como a classe lida com elas. Nos comentários do arquivo da classe existe exemplo de função hash mais eficiente.


### 4. HashTableSeparateChaining

Outra classe filha de HashTableDefective que herda seus atributos e métodos. Contudo sobrescreve o método de inserção (put), seleção (get) e deleção (remove) para lidar com colisões por Separate Chaining. 

Para gerar as listas nos campos da tabela, é utilizada SinglyLinkedList, que é importada de arquivo apartado.

Ainda é utilizado o método #loseloseHashCode para gerar propositalmente, diversas colisões e demonstrar como a classe lida com elas. Nos comentários do arquivo da classe existe exemplo de função hash mais eficiente.