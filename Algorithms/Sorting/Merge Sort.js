/*******************************************************************
                            MERGE SORT
********************************************************************

É uma combinação de três coisas - dividir (splice), fundir (merge) e 
ordenar (sort). Explora o fato de que matrizes de 0 ou 1 elemento 
já estão classificadas.

Funciona decompondo uma matriz em matrizes menores de 0 ou 1 elementos e, 
em seguida, fundindo estas matrizes menores em uma matriz maior ordenada.
*/

// Funde 2 arrays ordenados retornando um novo sortedArray. arr1 e arr2 devem estar ordenados da mesma forma
function mergeSortedArrays(arr1, arr2) {
    const result = [];

    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (j >= arr2.length || arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    return result;
}

// Sort array by mearge sort approach (solução do curso)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));
    return mergeSortedArrays(left, right);
}

//Cria array de randomico números
//let randomArray = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));

let nameArray = ["Taissa", "Sérgio", "Lívia", "Samuel", "Orlandino", 'Marília'];
let numbers = [63, 98, 84, 55, 40, 45, 15, 30, 87, 42];

console.log(mergeSort(nameArray));  // ['Lívia', 'Marília', 'Orlandino', 'Samuel', 'Sérgio', 'Taissa']
console.log(mergeSort(numbers));    // [15, 30, 40, 42, 45, 55, 63, 84, 87, 98]


/*******************************************************************
            mergeSortedArrays - O(n+m)
            mergeSotl() - time: O(nlog(n)) | space - O(n)
*******************************************************************/


