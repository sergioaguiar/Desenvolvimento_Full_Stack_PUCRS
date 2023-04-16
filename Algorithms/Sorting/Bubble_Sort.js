/*******************************************************************
                            BUBBLE SORT
*******************************************************************/
/*
Compara cada elemento com o seguinte e, se for maior, troca (swap) os
elementos de posição.
*/

// Exemplo de funções de swap

function swap1(arr, id1, id2) {
    let temp = arr[id1];
    arr[id1] = arr[id2];
    arr[id2] = temp;
}

const swap2 = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
}


//Bubble Sort
function bubbleSortNotOpt(arr) {
    //loop externo define janela de swap, que diminui acada iteração excluindo o último elemento
    for (let i = arr.length; i > 0; i--) {
        //loop interno leva o maior elemento ainda não sorted para o fim da janela
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap2(arr, j, j + 1);
        }
    }
}

let array1 = [-28, 34, 10, 2, 0, -26, -22, 19, 25, -14, 26];
console.log(`Unsorted: [${array1}]`);
bubbleSortNotOpt(array1);
console.log(`  Sorted: [${array1}]`);


//------------------------------------------------------------------


//Bubble Sort Optimized (finaliza os ciclos se o array já estiver sorted, evitando iterações desnecessárias)
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true; //seta a variavel para true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap1(arr, j, j + 1);
                noSwaps = false; // se houver alteração, seta variável para false
            }
        }
        if (noSwaps) break; // se não houver alteração neste ciclo, finaliza swap
    }
}

let array2 = [8, 1, 2, 3, 4, 5, 6, 7];
console.log(`Unsorted: [${array2}]`);
bubbleSort(array2);
console.log(`  Sorted: [${array2}]`);

/********************************************************************
bubbleSortNotOpt tem O(n^2)
bubbleSort tem O(n^2), mas se os itens estiverem quase sorted, O(n).
********************************************************************/