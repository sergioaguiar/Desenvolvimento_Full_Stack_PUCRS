
/********************************************************************************
                 Métodos de Inserção e Remoção de elementos 
*********************************************************************************
Existem métodos pré-definidos de inserção e remoção de elementos em um array que
facilitam sua manipulação.
*/
let numbers = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inserindo no final do array
numbers.push(10);           // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11, 12);       // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Inserindo no início do array
numbers.unshift(-2);        // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
numbers.unshift(-4, -3);    // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Removendo da última posição
let lastNumber = numbers.pop(); //retorna o elemento removido 
console.log(lastNumber, numbers); // 12, [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Removendo da primeira posição
let firstNumber = numbers.shift(); //retorna o elemento removido 
console.log(firstNumber, numbers); // -4, [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 

// Inderindo e removendo de uma posição específica: splice(indice, quantidadeDeElementos, ...elementosParaInsercao)
numbers.splice(3, 2); // Remove 2 elementos a partir do indice 3
console.log(numbers); // [-3, -2, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

numbers.splice(3, 0, 0, 1); // A partir do indice 3, remove 0 elementos e insere os elementos 0 e 1
console.log(numbers); // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

numbers.splice(3, 2, "a", "b"); // A partir do indice 3, remove 2 elementos e insere os elementos a e b
console.log(numbers);           // [-3, -2, -1, 'a', 'b', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



/********************************************************************************
                                Métodos de Iteração
*********************************************************************************
Além dos métodos de inserção e remoção de elementos, os arrays contam com diversos
outros que podem facilitar sua manipulação.
*/

// concat(element1, element2, ...) -> Retorna cópia da união de arrays.
const zero = 0;
const positive = [1, 2, 3];
const negative = [-3, -2, -1];
let allNumbers = negative.concat(zero, positive);
console.log(allNumbers); // [-3, -2, -1, 0, 1, 2, 3]

//-------------------------------------------------------------------------------

/* every(function) -> Itera por cada elemento do array e verifica condição
    até que função retorne falso. Se todos passarem, retorna verdadeiro.*/
let evenNumbers = [-2, 2, 4, 6];
let randomNumbers = [-2, 1, 4, 6];

let isEven = num => num % 2 === 0;

evenNumbers.every(isEven);       // Retorna true pois todos elementos retornaram true na função isEven.
randomNumbers.every(isEven);     // Retorna false pois pelo menos um elemento retornou false na função isEven.

//-------------------------------------------------------------------------------

/* some(function) ->  Itera por cada elemento do array e verifica condição
     até que função retorne verdadeiro. Se todos falharem, retorna falso. */

let oddNumbers = [-1, 1, 3, 5];

evenNumbers.some(isEven);       // Retorna true pois todos elementos retornaram true na função isEven.
randomNumbers.some(isEven);     // Retorna true pois pelo menos um elemento retornou false na função isEven.
oddNumbers.some(isEven);        // Retorna false pois todos elementos retornaram false na função isEven.

//-------------------------------------------------------------------------------

// forEach(function) -> itera aplicando function a cada elemento do array
randomNumbers.forEach(number => console.log(number % 2 === 0)); // true, false, true, true

//-------------------------------------------------------------------------------

// filter(function) -> itera aplicando function a cada elemento do array e retorna novo array com os elementos que retornaram true
let someNumbers = [-3, -2, -1, 0, 1, 2, 3];
someNumbers.filter(isEven); //[-2, 0, 2]

//-------------------------------------------------------------------------------

// map(function) -> itera aplicando function a cada elemento do array e retorna novo array com os resultados da função em cada elemento
let double = numbers.map(num => num * 2); // [-6, -4, -2, 0, 2, 4, 6]

//-------------------------------------------------------------------------------

// reduce(callBackFn, initialValue*) -> Retorna resutado de função em acumulador (* se não indicado, usa o primeiro valor do array como inicial)        
let initialValue = 10;
let positiveNumbers = [0,1,2,3];
let sum = positiveNumbers.reduce(((accumulator, currentValue) => accumulator + currentValue), initialValue); // retorna soma dos elementos do array
console.log(sum); // 16

//-------------------------------------------------------------------------------

/*
Estes são apenas alguns métodos disponíveis para a manipulação de arrays. Diversos outros 
podem ser encontrados na documentação do JavaScript.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>
*/