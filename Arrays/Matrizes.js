/********************************************************************************
                            ARRAYS de 2 ou mais dimensões
*********************************************************************************
Em Javascript não existe uma estrutura de matriz nativa. Mas podemos criar uma 
utilizando um array bidimensional, que nada mais é que um array que possui como 
elementos outros arrays.

Como exemplo de array bidimensional, podemos citar o algoritmo do jogo Rocks. Este
algoritmo monta uma matriz nXm na qual o valor do elemento aij = nm determina se 
o jogador atual ganha ou perde o jogo ao final da partida (se o outro jogador
fizer os moviemtnos corretos). Normalmente a função retorna o valor de aij = nm. 
Contudo, modificamos a função abaixo para que retorne a matriz bidimensional.
*/

function rocks(n, m) {
    // Insere o primeiro campo em uma Matriz 1X1
    const R = [["L"]];

    // Insere valores na primeira coluna em novos arrays formando uma Matriz nX1
    for (let i = 1; i <= n; i++) {
        if (R[i - 1][0] === "W") R[i] = ["L"];
        else R[i] = ["W"];
    }
    // Insere valores nas demais celulas da primeira linha da Matriz nXm (com apenas primeiras coluna e linha preenchidas)
    for (let j = 1; j <= m; j++) {
        if (R[0][j - 1] === "W") R[0][j] = "L";
        else R[0][j] = "W";
    }
    // Insere valores nas demais celulas da Matriz nXm
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (R[i - 1][j - 1] === "W" && R[i][j - 1] === "W" && R[i - 1][j] === "W") {
                R[i][j] = "L";
            } else {
                R[i][j] = "W";
            }
        }
    }
    return R; // para retornar toda Matriz nXm
    //return R[n][m]; // valor da ultima célula (aij) da Matriz nXm
}

let positionRefactored = rocks(9, 9);
console.log(positionRefactored);

// 0: (10) ['L', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L', 'W']
// 1: (10) ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
// 2: (10) ['L', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L', 'W']
// 3: (10) ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
// 4: (10) ['L', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L', 'W']
// 5: (10) ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
// 6: (10) ['L', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L', 'W']
// 7: (10) ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
// 8: (10) ['L', 'W', 'L', 'W', 'L', 'W', 'L', 'W', 'L', 'W']
// 9: (10) ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']


/*
Também podemos construir matrizes tridimensionais, nas quais os elementos do array 1
são outros arrays cujos elementos são arrays também. Seguindo essa lógica, podemos
construir matrizes de n dimensões.
*/

// Exemplo de matriz tridimensional
let coordenadas = [];                   // Inicializa primeira dimensão da matriz.
for (let x = 0; x < 3; x++) {
    coordenadas[x] = [];                  // Inicializa segunda dimensão da matriz a cada iteração do primeiro loop
    for (let y = 0; y < 3; y++) {
        coordenadas[x][y] = [];           // Inicializa terceira dimensão da matriz a cada iteração do segundo loop
        for (let z = 0; z < 3; z++) {
            coordenadas[x][y][z] = x + y + z;
        }
    }
}
console.log(coordenadas[1][2][0]); // 3
console.log(coordenadas[1][2]);    // [3, 4, 5]