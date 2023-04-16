/*******************************************************************
                            QUICK SORT
*******************************************************************/

/*
QUICK SORT
    Chama função auxiliar passando o array pivot(arr, start, end);
    Quando recebe o pivô, chama recursivamente a função auxiliar no subarray
        à esquerda e à direita do pivô.
        (o caso base da função recursiva ocorre quando a função auxiliar é 
            chamada em um subarray de menos de 2 elementos).

A função auxiliar pivot(arr, start, end) simplifica a implementação de 
Quick Sort. Dado um array, essa função auxiliar designa um elemento pivô. 
Ela rearranja os elementos no array de forma que todos valores menores 
que o pivô fiquem a sua esquerda e os maiores a sua direita. Isto é 
feito no mesmo array passado a função, ou seja, nenhum novo array é criado.

A velocidade de Quick Sort depende em parte de como a função auxiliar 
seleciona o pivô. Idealmente, o pivô deve ser selecionado de forma que 
represente o valor médio da lista a ser organziada. A função a seguir, 
sempre seleciona o primeiro elemento da lista.
*/

// Função auxiliar
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // Estamos selecionando sempre o primeiro elemento como pivô
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Troca o pivô da primeira posição para a sua posição correta em um array ordenado
    swap(arr, start, swapIdx);
    return swapIdx;
}

// QUICK SORT
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

let arr2 = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];
console.log(`Before: [${arr2}]`); // [100,-3,2,4,6,9,1,2,5,3,23]
quickSort(arr2);
console.log(` After: [${arr2}]`); // [-3,1,2,2,3,4,5,6,9,23,100]