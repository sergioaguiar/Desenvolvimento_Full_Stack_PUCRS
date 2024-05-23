//Definindo variáveis globais
var calcular = document.querySelector("#calcular");
var body = document.querySelector("body");
var IMC = document.querySelector("#IMC");
var condicao = document.querySelector("#condicao");
var header = document.querySelector("header");
var footer = document.querySelector("footer");
var img = document.querySelector("#resultado img");


//Altera a cor do Header, Footer e Body
function estilo(headerColor, bodyColor, footerColor) {
  header.style.backgroundColor = headerColor;
  body.style.backgroundColor = bodyColor;
  footer.style.backgroundColor = footerColor;
}


//Evidencia a linha na tabela equivalente ao IMC obtido
function pintaLinha(conditionNumber, color) {

  //Reseta o background das celulas da tabela
  var linhas = document.getElementById("myTable").rows;
  for (var i = 1; i < linhas.length; i++) {
    linhas[i].style.background = "#ffffff"
  }

  //Pinta a linha do IMC calculado
  var linha = document.getElementById("myTable").rows[conditionNumber];
  linha.style.background = color;
}

//Apresenta o IMC e Condição e altera a imagem do campo resultado
function resultados(imc, condition, icone, alternative) {
  IMC.innerHTML = "  " + imc.toFixed(1).replace(".", ",");
  condicao.innerHTML = "  " + condition
  img.setAttribute("src", icone);
  img.setAttribute("width", "106.87");
  img.setAttribute("alt", alternative);
}

//Calcula IMC quando o botão "Calcular" é clicado
calcular.addEventListener("click", function () {
  var peso = document.getElementById("peso").value.replace(",", ".");
  var altura = document.getElementById("altura").value.replace(",", ".");
  var resultado = peso / (altura * altura);

  //Aplica estilo e apresenta resultados de acordo com o IMC
  if (resultado <= 18.5) {
    estilo("#D4A0FE", "#FBF6FF", "#6A24A2");
    pintaLinha(1, "#ECD4FF");
    resultados(resultado, "Baixo peso", "Imagens/diet2.svg", "dieta");
  } else if (resultado <= 25) {
    estilo("#7ABAF2", "#F2F8FE", "#4682B4");
    pintaLinha(2, "#CDE4FC");
    resultados(resultado, "Peso ideal", "Imagens/muscle.svg", "saudável");
  } else if (resultado <= 30) {
    estilo("#8ED43F", "#F9FFF3", "#629823");
    pintaLinha(3, "#E3FEC8");
    resultados(resultado, "Sobrepeso", "Imagens/diet1.svg", "dieta");
  } else if (resultado <= 35) {
    estilo("#F2EE7A", "#FFFEE2", "#A8A420");
    pintaLinha(4, "#F8F6C9");
    resultados(resultado, "Obesidade Grau 1", "Imagens/heart-rate.svg", "coração");
  } else if (resultado <= 40) {
    estilo("#F2B27A", "#F9EBDE", "#CB6C18");
    pintaLinha(5, "#F8D4B3");
    resultados(resultado, "Obesidade Grau 2", "Imagens/heartbeat.svg", "coração");
  } else if (resultado > 40) {
    estilo("#F27A7E", "#F9E3E3", "#AA3236");
    pintaLinha(6, "#FCA8A8");
    resultados(resultado, "Obesidade Grau 3", "Imagens/obesity.svg", "obeso");
  }
});
