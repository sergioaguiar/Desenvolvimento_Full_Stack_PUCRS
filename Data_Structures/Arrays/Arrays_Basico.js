/********************************************************************************
                                ARRAYS
*********************************************************************************
 
Arrays são as formas mais simples de estrutura de dados, por isso, estão
presentes em todas linguagens de programação. Via de regra, são sequencias
de valores de um mesmo tipo. EM JavaScript, é possível guardar tipos diferentes 
de dados em um mesmo array. Porém, as melhores práticas recomendam utilizar 
apenas um tipo de dado.

Documentação: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>
*/
/*Adaptado do livro Learning JS Data Structures and Algorithms (Loiane Groner)*/

/********************************************************************************
                            Inicializando um Array 
*********************************************************************************
Um array pode ser inicializado de diversars formas e como constante ou variável,
como nos exemplos a seguir. Se inicializado como constante, o array não pode ser 
modificado. Contudo seu conteudo pode mudar. 

Isso ocorre porque ao inicializar qualquer objeto em JS, a variável passa a apontar 
para uma região da memória. Se for uma constante, o local na memória não pode ser 
alterado, por isso não podemos apontar aquela constante para um outro array. Contudo,
o conteúdo daquele local da memória pode ser alterado.
*/

// Iniciando Arrays vazios e inserindo valores posteriormente
let daysOfWeek = new Array();
daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

let daysOfWeek2 = [];
daysOfWeek2 = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

// Iniciando Arrays já com valores
let daysOfWeek3 = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
let daysOfWeek4 = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

// Iniciando um Array vazio com tamanho específico
let daysOfWeek5 = new Array(7);
console.log(daysOfWeek5); //[undefined, undefined, undefined, undefined, undefined, undefined, undefined]

//Iniciando array como constante
const daysOfWeek6 = new Array();
daysOfWeek6 = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]; // caught TypeError: Assignment to constant variable.
daysOfWeek6[0] = "Domingo";
daysOfWeek6[1] = "Segunda";
daysOfWeek6[2] = "Terça";
daysOfWeek6[3] = "Quarta";
daysOfWeek6[4] = "Quinta";
daysOfWeek6[5] = "Sexta";
daysOfWeek6[6] = "Sabado";
console.log(daysOfWeek6); //['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']


// Inicializando array com variáveis
const day1 = "Domingo";
const day2 = "Segunda";
const day3 = "Terça";
const day4 = "Quarta";
const day5 = "Quinta";
const day6 = "Sexta";
const day7 = "Sabado";

let daysOfWeek7 = [day1, day2, day3, day4, day5, day6, day7];
console.log(daysOfWeek7); //['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']


/********************************************************************************
                        Acessando elementos de um Array 
*********************************************************************************
Para acessar elementos de um array, indicamos seu índice entre colchetes após o
nome do array, como nos exemplos abaixo.

Também podemos usar loops for que acessam o array pelos indices ou pela sequencia 
de elementos. Utilizamos a propriedade .length do array para auxiliar na construção
do loop for. Como a contagem de indices do array começa no zero, seu tamanho (.length)
será sempre 1 posição maior que o indice de seu último elemento.
*/

console.log(daysOfWeek[1]); // Segunda

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);                     // Domingo Segunda Terça Quarta Quinta Sexta Sabado (cada dia em uma linha)
}

for (let i = daysOfWeek.length - 1; i >= 0; i--) {
    console.log(daysOfWeek[i]);                     // Sabado Sexta Quinta Quarta Terça Segunda Domingo (cada dia em uma linha)
}

daysOfWeek.forEach(day => console.log(day));        // Domingo Segunda Terça Quarta Quinta Sexta Sabado (cada dia em uma linha)

for (day of daysOfWeek) {
    console.log(day);                               // Domingo Segunda Terça Quarta Quinta Sexta Sabado (cada dia em uma linha)
}

for (index in daysOfWeek) {
    console.log(`${index}:${daysOfWeek[index]}`);  // 0:Domingo 1:Segunda 2:Terça 3:Quarta 4:Quinta 5:Sexta 6:Sabado (cada dia em uma linha)
}

/********************************************************************************
                        Inserindo elementos em um Array 
*********************************************************************************
Podemos inserir elementos de um array acessando diretamente um de seus índices.
Ao acessar um índice fora de array.length, seu tamanho é automaticamente ajustado
para acomodar o novo valor.
*/

// Inserindo na última posição
let letters = ["a", "b", "c"];
console.log(letters.length); // 3

letters[3] = "d";
console.log(letters); // ['a', 'b', 'c', 'd']

letters[letters.length] = "e";
console.log(letters); //  ['a', 'b', 'c', 'd', 'e']

letters[7] = "h";
console.log(letters); //['a', 'b', 'c', 'd', 'e', undefined, undefinded, 'h']

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i; // Insere i na última posição do array a cada iteração
}
console.log(numbers); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// Se selecionarmos índices já existentes no array, o valor do índice será sobrescrito

letters[4] = "Sobrescreveu e";
letters[5] = "f";
letters[6] = "g";
console.log(letters); // ['a', 'b', 'c', 'd', 'Sobrescreveu e', 'f', 'g', 'h']

// Inserindo na primeira posição do array (sem sobrescrever)
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1]; // Unshift: Desloca cada elemento do array para indice + 1
}
console.log(numbers); // [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[0] = - 1;
console.log(numbers); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


