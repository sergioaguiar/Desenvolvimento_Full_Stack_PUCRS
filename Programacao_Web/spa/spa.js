// Formatação de moeda para BRL
const FORMATO_BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// Função para exibir a lista de carros
async function exibirListaDeProdutos() {
  // Limpa o conteúdo do body
  const lista = document.querySelector('.lista');
  lista.innerHTML = '';

  // Cria e adiciona um título à lista
  const titulo = document.createElement('h1');
  titulo.innerHTML = 'Carros Disponíveis';
  lista.appendChild(titulo);

  // Faz a requisição ao arquivo JSON com a lista de carros
  const resposta = await fetch('../produtos/produtos.json');
  const carros = await resposta.json();

  // Itera sobre a lista de carros e cria elementos para cada um
  for (const carro of carros) {
    // Cria um link para cada item na lista
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'item';
    item.addEventListener('click', e => {
      e.preventDefault();
      // Exibe os detalhes do carro
      exibirDetalhesDoCarro(carro.id);
    });

    // Cria e adiciona a imagem do carro
    const img = document.createElement('img');
    img.src = `../produtos/${carro.imagem}`;
    img.alt = 'Imagem do carro';
    item.appendChild(img);

    // Cria e adiciona o nome do carro
    const nome = document.createElement('div');
    nome.className = 'nome';
    nome.innerText = carro.nome;
    item.appendChild(nome);

    // Cria e adiciona o preço do carro
    const preco = document.createElement('div');
    preco.className = 'preco';
    preco.innerText = FORMATO_BRL.format(carro.preco);
    item.appendChild(preco);

    // Adiciona o item à lista
    lista.appendChild(item);
  }
  
  // Adiciona o link para a página inicial como um botão no final da lista
  adicionarLinkParaPaginaInicial();
}

// Função para criar e adicionar o link para a página inicial como um item da lista no final da lista
function adicionarLinkParaPaginaInicial() {
  const lista = document.querySelector('.lista');

  // Cria uma lista não ordenada para conter o item da lista
  const ul = document.createElement('ul');

  // Cria um item de lista
  const listItem = document.createElement('li');

  // Cria um link dentro do item da lista
  const link = document.createElement('a');
  link.href = '../index.html'; // Define o destino do link
  link.textContent = 'Ir para a página inicial'; // Define o texto do link

  // Adiciona o link dentro do item da lista
  listItem.appendChild(link);

  // Adiciona o item da lista na lista não ordenada
  ul.appendChild(listItem);

  // Adiciona a lista não ordenada no final da lista de produtos
  lista.appendChild(ul);
}

// Chamada da função para exibir a lista de produtos ao carregar o arquivo JavaScript
exibirListaDeProdutos();
