# Site da KWF/DF

Este projeto é uma aplicação de múltiplas páginas desenvolvida usando React e Vite. Ele foi criado para explorar o roteamento com o React Router e estilização com CSS.

## Pré-requisitos

Inicialmente o Node.js instalado na máquina local apartir de instalador disponível no [site oficial do Node.js](https://nodejs.org/).

## Configuração do Projeto

Para criar o projeto, os seguintes comandos foram executados no terminal:

```bash
npm create vite@latest meu-app-react -- --template react
cd meu-app-react
npm install
```

Estes comandos criam uma nova pasta chamada meu-app-react com um template React pré-configurado e instala as dependências necessárias.

## Instalação do React Router

Para adicionar o suporte ao roteamento, instale o React Router executando o seguinte comando no terminal:

```bash
npm install react-router-dom
```

## Estrutura de Diretórios

Dentro do diretório do projeto, encontram-se os seguintes componentes dentro de uma pasta chamada components sob o diretório src:

- `Header.jsx` - Componente para o cabeçalho do site.
- `Footer.jsx` - Componente para o rodapé do site.
- `About.jsx` - Componente para a página "Sobre Nós".
- `Services.jsx` - Componente para a página "Serviços".

O arquivo `App.jsx` também foi modificado para integrar esses componentes e configurar o roteamento.

## Adicionando Componentes
- `Header.jsx` -  Este arquivo contém a navegação principal do site.
- `Footer.jsx` -  Este arquivo contém informações do rodapé.
- `About.jsx` -  Este arquivo contém as informações da página "Sobre Nós".
- `Services.jsx` - Este arquivo contém as informações da página "Serviços".

## Configurando o Roteamento
O arquivo App.jsx foi modificado para configurar o roteamento entre as páginas "Sobre Nós" e "Serviços" utilizando o React Router.

## Adicionando Estilos
Foram adicionados estilos globais modificando o arquivo `src/styles/App.css`, que foi vinculado a `main.jsx`.

## Execução do Projeto
Para executar o projeto, deve-se usar o seguinte comando no diretório raiz do projeto:

```bash
npm run dev
```

Este comando inicia o servidor de desenvolvimento e abre o aplicativo no navegador padrão. 
