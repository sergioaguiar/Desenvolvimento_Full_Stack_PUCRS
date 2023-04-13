/**************************************************************************
                                VALUE PAIR
***************************************************************************

Classe ValuePair que serve para instanciar de nodes utilizados para armazenar 
valores nas Hash Tables.

############################### COMPONENTES ###############################
 
Classe ValuePair contendo
    Atributos
        1. key (chave); e
        2. value (valor).
    
    Método
        1. toString: retorna string no formato "[#key: value]".
**************************************************************************/

export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}