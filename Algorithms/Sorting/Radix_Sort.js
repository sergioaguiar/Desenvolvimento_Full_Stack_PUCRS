/*******************************************************************
                            RADIX SORT
*******************************************************************/

/*
Radiz Sort é um algoritmo de organização que funciona em lista de 
números. Ele não faz comparações entre os elementos, mas explora o 
fato de que a informação para o tamanho de dado número está codificada 
em seus dígitos. Quanto mais dígitos, maior o número e quanto maior o 
dígito em dada posução (unidade, dezena, centena, etc), maior o número.

RADIX SORT
    Recebe uma lista de números;
    Verifica quantos dígitos o maior número possui;
    Itera de k=0 até este maior número de digitos;
    Para cada iteração do loop:
        Cria um compartimento para cada dígito (0-9);
        Coloca cada número no compartimento correspondente baseado em seu digito 
            (unidade, dezena, centena, etc);
    Substitui o array existente pelos valores nos compartimentos de 0 até 9;
    Retorna array organizado.
*/

/*RADIX SORT HELPERS - Funções auxiliares de radixSort(nums)*/

// Retorna o digito de num na posição desejada (unidade, dezena, centena, etc)
function getDigit(num, place, base = 10) {
    return Math.floor(Math.abs(num) / Math.pow(base, place)) % base;
}
//console.log(getDigit(12345, 0)); // 5
//console.log(getDigit(12345, 1)); // 4
//console.log(getDigit(12345, 2)); // 3
//console.log(getDigit(12345, 3)); // 2
//console.log(getDigit(12345, 4)); // 1
//console.log(getDigit(12345, 5)); // 0


// Retorna o número de digitos em num
function digitCount(num, base = 10) {
    if (num === 0) return 1;
    return Math.floor(Math.log(Math.abs(num)) / Math.log(base)) + 1;
}
//console.log(digitCount(1)); // 1
//console.log(digitCount(25)); // 2
//console.log(digitCount(314)); // 3

// Dado um array de números, retorna o numero de digitos do maior elemento na coleção
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}
//console.log(mostDigits([1234, 56, 7])); // 4
//console.log(mostDigits([1, 1, 11111, 1])); // 5
//console.log(mostDigits([12, 34, 56, 78])); // 2


/*RADIX SORT*/
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // Cria um array com 10 arrays vazios
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        // ... é o spread operator que pega cara elemento de um array de arrays
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

array = [939, 53737, 913334689899, 817607, 69, 877, 38, 83393, 7, 213, 39, 383, 798766, 281, 942, 751, 809, 802, 607, 11]
console.log(radixSort(array));
// [7, 11, 38, 39, 69, 213, 281, 383, 607, 751, 802, 809, 877, 939, 942, 53737, 83393, 798766, 817607, 913334689899]

/*******************************************************************
                            radixSort - O(nk)
*******************************************************************/