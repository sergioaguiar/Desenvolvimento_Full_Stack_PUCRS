/*******************************************************************
                            ARRAY.SORT()
********************************************************************

Sorting: reordenando itens em uma coleção para que assumam algum
        tipo de ordem. 

        function sort(arr) {
            //sorting code here
            return arr; //sorted
        }

        sort([23,45,6,12,13]); //[6,12,13,23,45]

O método .sort() de arrays organiza os dados em ordem alfabética e 
modifica o array original.

Se forem números, converte eles em ordem alfabética antes de organizar. 
Então pode gerar resultados insesperados como:

    [15,6,4,10].sort(); --> [10,15,4,6]

Mas .sort() aceita como parâmetro uma função que utilizará para comparar 
2 elementos. Se o retorno da função for positivo, o elemento a e colocado 
antes de b. Se for negativo, b entra antes de a. E se for zero, os dois 
elementos tem o mesmo valor.

Ex.: 
*/

function numberCompare(num1, num2) {
    return num1 - num2;
}

console.log([15, 6, 4, 10].sort(numberCompare)); //[4, 6, 10, 15]

// Para obter a ordem inversa, basta inverter o retorno na função:

function numberCompare2(num1, num2) {
    return num2 - num1;
}

console.log([15, 6, 4, 10].sort(numberCompare2)); //[15, 10, 6, 4]

// Para ordenar pelo tamanho de uma string:

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

console.log(["Desenvolvimento Full Stack", "PUCRS", "Data Structure", "Back End"].sort(compareByLen)); // ['PUCRS', 'Back End', 'Data Structure', 'Desenvolvimento Full Stack']

// Para ordenar pelo tamanho de uma string do maior para o menor:

function compareByLen2(str1, str2) {
    return str2.length - str1.length;
}

console.log(["Desenvolvimento Full Stack", "PUCRS", "Data Structure", "Back End"].sort(compareByLen2)); // ['Desenvolvimento Full Stack', 'Data Structure', 'Back End', 'PUCRS']