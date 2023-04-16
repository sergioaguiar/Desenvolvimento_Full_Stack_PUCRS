/*******************************************************************
                            INSERTION SORT
********************************************************************

Constrói a ordenação criando gradualmente uma metade esquerda que
sempre está ordenada.
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
}

let array1 = [32, 20, 17, 11, 9, 23, 24, 2, 25, 38];
console.log(`Unsorted: [${array1}]`); // [32,20,17,11,9,23,24,2,25,38]
insertionSort(array1);
console.log(`  Sorted: [${array1}]`); // [2,9,11,17,20,23,24,25,32,38]

// Cria um array de tamanho 10 com números aleatórios de 0 a 40
//Array.from({length: 10}, () => Math.floor(Math.random() * 40));

/********************************************************************
                        insertionSort tem O(n^2)

Mas se os dados estiverem organizados próximo ao desejado, é rápida.
Em contrapatida, se tiver organizada em sentido oposto, é lenta.

Funciona muito bem em listas ordenadas que recebem novo dado.
********************************************************************/

