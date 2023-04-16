/*
A função linearSearch(arr, val) rebebe um array e um valor e retorna 
a posição do array em que o valor foi encontrado. Se não for encontrado,
retorna -1. Tem comportamento similar a arr.indexOf(val).

Velocidade: O(n)
*/

// Return the index of val in arr
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))           // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))  // 5
console.log(linearSearch([100], 100))                         // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6))                     // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200))                         // -1