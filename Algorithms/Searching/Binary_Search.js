/*
A função binarySearch(arr, elem) rebebe um array ordenado e um valor e retorna 
a posição do array em que o valor foi encontrado. Se não for encontrado,
retorna -1. Tem comportamento similar a arr.indexOf(val).

Esse algoritmo é mais rápido que linearSearch. Porém, para a função funcionar, 
o array ddeve estar ordenado.

Velocidade: O(log n).

Referências: 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 6);  // 2
binarySearch([1, 2, 3, 4, 5], 2);               // 1
binarySearch([1, 2, 3, 4, 5], 3);               // 2
binarySearch([1, 2, 3, 4, 5], 5);               // 4
binarySearch([1, 2, 3, 4, 5], 6);               // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10);    // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95);    // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100);  // -1