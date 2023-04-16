/*******************************************************************
                            SELECTION SORT
********************************************************************
Similar ao Bubble Sort, mas ao invez de organizar primeiro valores 
maiores, ordena a coleção iniciando pelos valores menores.
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
            //console.log(`i: ${i} | j: ${j} | min: ${min}`);
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]; //swap
    }
}

let array1 = [32, 20, 17, 11, 9, 23, 24, 2, 25, 38];
console.log(`Unsorted: [${array1}]`); // [32,20,17,11,9,23,24,2,25,38]
selectionSort(array1);
console.log(`  Sorted: [${array1}]`); // [2,9,11,17,20,23,24,25,32,38]

// Cria um array de tamanho 10 com números aleatórios de 0 a 40
//Array.from({length: 10}, () => Math.floor(Math.random() * 40));

/********************************************************************
                        selectionSort tem O(n^2)
********************************************************************/