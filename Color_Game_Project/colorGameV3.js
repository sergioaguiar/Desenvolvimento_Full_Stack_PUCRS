var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var master = document.getElementById("master");

// Inicializa o jogo configurando os botões e os quadrados
init();

function init() {
    //mode buttons event listeners
    setupResetButton();
    setupModeButtons();
    setupSquares();
    reset();
}

function setupResetButton() {
    resetButton.addEventListener("click", function () {
        reset();
    });
}

// Configura os botões de dificuldade e define o comportamento ao serem clicados
function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            modeButtons[3].classList.remove("selected");
            modeButtons[4].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else if (this.textContent === "Medium") {
                numSquares = 6;
            } else if (this.textContent === "Hard") {
                numSquares = 12;
            } else {
                numSquares = 36;
            }
            reset();
        });
    }
}

// Configura os quadrados do jogo e define o comportamento ao serem clicados
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //adiciona click listeners aos quadrados
        squares[i].addEventListener("click", function () {
            //guarda cor do cquadrado clicado
            var clickedColor = this.style.backgroundColor;

            //compara a cor escolhida com a sorteada
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// Reseta o jogo gerando novas cores, escolhendo uma nova cor correta e atualizando a interface
function reset() {
    //gera cores novas
    if (master.classList.contains('selected')) {
        colors = generateRandomMasterColors(numSquares);
    } else {
        colors = generateRandomColors(numSquares);
    }
    //escolhe cor randomica de um array
    pickedColor = pickColor();
    //muda a cor do display para ser igual a escolhida
    colorDisplay.textContent = pickedColor;
    //muda cor dos quadrados
    for (var i = 0; i < squares.length; i++) {
        if (numSquares === 12) {
            squares[i].classList.remove("square");
            squares[i].classList.add("hard");
            squares[i].classList.remove("pro");
        } else if (numSquares === 36) {
            squares[i].classList.remove("square");
            squares[i].classList.remove("hard");
            squares[i].classList.add("pro");
        } else {
            squares[i].classList.add("square");
            squares[i].classList.remove("hard");
            squares[i].classList.remove("pro");
        }

        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "rgb(70, 130, 180)";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

// Muda todas as cores dos quadrados para a cor correta
function changeColors(color) {
    //percorre todos quadrados
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Escolhe uma cor aleatória da array colors
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Gera uma array de cores aleatórias
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Gera uma cor RGB aleatória
function randomColor() {
    //escolhe um vermelho (r) de 0 - 255
    var r = Math.floor(Math.random() * 256)
    //escolhe um verde (g) de 0 - 255
    var g = Math.floor(Math.random() * 256)
    //escolhe um azul (b) de  0 - 255
    var b = Math.floor(Math.random() * 256)
    //retorna "rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Gera uma array de cores aleatórias, começando com uma cor "mestre" e gerando variações
function generateRandomMasterColors(num) {
    var arr = [];
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    arr.push(rgb);
    for (var i = 0; i < num; i++) {
        arr.push(randomMasterColor(r, g, b));
    }
    return arr;
}

// Gera uma variação da cor "mestre" ajustando os valores RGB
function randomMasterColor(r, g, b) {
    //escolhe um vermelho (r) de 0 - 255
    if (r < 86){
        r = Math.floor(Math.random() * 86);
    } else if (r > 171) {
        r = Math.floor(Math.random() * (256 - r) + r);
    } else {
        r = Math.abs(Math.floor(Math.random() * ((r + 86) - ( r - 86)) + r - 86));
    }
    //escolhe um verde (g) de 0 - 255
    if (g < 86){
        g = Math.floor(Math.random() * 86);
    } else if (g > 171) {
        g = Math.floor(Math.random() * (256 - g) + g);
    } else {
        g = Math.abs(Math.floor(Math.random() * ((g + 86) - ( g - 86)) + g - 86));
    }
    //escolhe um azul (b) de  0 - 255
    if (b < 86){
        b = Math.floor(Math.random() * 86);
    } else if (r > 171) {
        b = Math.floor(Math.random() * (256 - b) + b);
    } else {
        b = Math.abs(Math.floor(Math.random() * ((b + 86) - ( b - 86)) + b - 86));
    }
    //retorna "rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
