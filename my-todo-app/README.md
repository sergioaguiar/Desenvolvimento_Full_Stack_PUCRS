# Lista de Afazeres

Este projeto é uma aplicação simples de lista de afazeres desenvolvida usando React e Vite. Ela permite aos usuários adicionar tarefas, marcar tarefas como completas e remover tarefas.

## Pré-requisitos

Inicialmente o Node.js instalado na máquina local apartir de instalador disponível no [site oficial do Node.js](https://nodejs.org/).

## Configuração do Projeto

Siga as instruções abaixo para configurar o projeto em seu ambiente local.

### Criação do Projeto

Para criar o projeto, foram executados os os seguintes comandos no terminal:

```bash
npm create vite@latest minha-lista-de-afazeres -- --template react
cd minha-lista-de-afazeres
npm install
```


Este comando cria uma nova pasta chamada `minha-lista-de-afazeres` com um template React pré-configurado e instala as dependências necessárias.

### Estrutura de Diretórios

Dentro do diretório do projeto, foram cridos os seguintes componentes dentro de uma pasta chamada `components` sob o diretório `src`:

- `TodoForm.jsx` - Componente para adicionar novas tarefas.
- `TodoList.jsx` - Componente para exibir a lista de tarefas.
- `TodoItem.jsx` - Componente para cada item na lista de tarefas.

O arquivo `App.jsx` também foi modificado para integrar esses componentes.

### Adicionando Componentes

1. **TodoForm.jsx**: Este arquivo contém um formulário para adicionar novas tarefas.
2. **TodoList.jsx**: Este arquivo lida com a exibição das tarefas e delegar a cada `TodoItem`.
3. **TodoItem.jsx**: Este arquivo lida com a exibição individual de cada tarefa, permitindo marcá-las como completas ou removê-las.

### Adicionar Estilos

Foram adicionados estilos globais modificando o arquivo `src/index.css`. 

## Execução do Projeto

Para executar o projeto, deve-se o seguinte comando no diretório raiz do projeto:

```bash
npm run dev
```

Este comando inicia o servidor de desenvolvimento e abre o aplicativo no navegador padrão. 
