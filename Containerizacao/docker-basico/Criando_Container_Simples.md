# Criando Container Docker Simples

Exercício para a criação de um container Docker para um aplicativo Node.js simples.

## 1. Crie um diretório para o projeto:

Abra o Prompt de Comando (cmd) ou PowerShell e execute os comandos abaixo para criar um diretório para o projeto e navegar até ele.:

	```bash
	mkdir docker-basico
	cd docker-basico
	```

## 2. Crie um arquivo package.json:

Crie um arquivo chamado package.json com o seguinte conteúdo. Este arquivo define o projeto Node.js e suas dependências.

    ```bash
    {
		"name": "docker-basico",
		"version": "1.0.0",
		"main": "index.js",
		"scripts": {
			"start": "node index.js"
		},
		"dependencies": {
			"express": "^4.17.1"
		}
	}
    ```

O arquivo package.json é essencial para qualquer projeto Node.js. Ele especifica as dependências do projeto (neste caso, o Express.js), scripts de execução (como npm start) e outras informações sobre o projeto. Este arquivo permite que o Node Package Manager (npm) instale todas as bibliotecas necessárias para o projeto.

## 3. Crie um arquivo index.js:

Crie um arquivo chamado index.js com o seguinte conteúdo. Este arquivo contém o código do aplicativo Node.js que será executado no container.:

    ```bash
    const express = require('express');
	const app = express();
	const port = 3000;

	app.get('/', (req, res) => {
		res.send('Hello, Docker!');
	});

	app.listen(port, () => {
		console.log(`App running at http://localhost:${port}`);
	});

    ```
	
O arquivo index.js é o ponto de entrada do aplicativo Node.js. Ele configura um servidor web simples usando o Express.js que responde com "Hello, Docker!" quando acessado. Este servidor escuta na porta 3000 para conexões HTTP.

## 4. Crie um Dockerfile:

Crie um arquivo chamado Dockerfile (sem extensão) com o seguinte conteúdo. Este arquivo define como construir a imagem Docker para o aplicativo Node.js.

    ```bash
    # Use uma imagem base oficial do Node.js
	FROM node:14

	# Crie e defina o diretório de trabalho
	WORKDIR /app

	# Copie o package.json e package-lock.json para o diretório de trabalho
	COPY package*.json ./

	# Instale as dependências do projeto
	RUN npm install

	# Copie todo o código-fonte para o diretório de trabalho
	COPY . .

	# Exponha a porta na qual a aplicação irá rodar
	EXPOSE 3000

	# Comando para rodar a aplicação
	CMD ["npm", "start"]

    ```
	
Dockerfile é um script que contém uma série de instruções sobre como construir a imagem Docker para o projeto. Ele especifica a imagem base (node:14), define o diretório de trabalho (/app), copia os arquivos necessários, instala as dependências, copia o restante do código-fonte, expõe a porta 3000 e define o comando para iniciar a aplicação (npm start).
	 
	`FROM node:14`: Especifica a imagem base do Node.js, que inclui o ambiente necessário para executar aplicativos Node.js.
	`WORKDIR /app`: Define o diretório de trabalho dentro do container onde os comandos seguintes serão executados.
	`COPY package*.json ./`: Copia os arquivos package.json e package-lock.json para o diretório de trabalho no container.
	`RUN npm install`: Instala as dependências definidas no package.json.
	`COPY . .`: Copia todo o código-fonte para o diretório de trabalho no container.
	`EXPOSE 3000`: Expõe a porta 3000, que é onde o aplicativo Node.js será executado.
	`CMD ["npm", "start"]`: Define o comando a ser executado quando o container iniciar, que neste caso é npm start para iniciar o aplicativo Node.js.
	 

## 5. Construa a imagem Docker:

No Prompt de Comando ou PowerShell, execute o seguinte comando para construir a imagem Docker com base no Dockerfile criado.

	 ```bash
	 docker build -t meu-app-basico
	 ```
	 
Este comando lê as instruções no Dockerfile e cria uma imagem Docker chamada meu-app-basico. A imagem é uma representação empacotada do aplicativo, incluindo o código-fonte, dependências e ambiente de execução.

## 6. Execute o container:

Execute o comando abaixo para iniciar um container com a imagem Docker criada e mapear a porta 3000 do container para a porta 3000 do host.

	 ```bash
	 docker run -p 3000:3000 meu-app-basico
	 ```
	 
Este comando cria e inicia um novo container a partir da imagem meu-app-basico e mapeia a porta 3000 do container para a porta 3000 do seu computador local, permitindo que você acesse o aplicativo através do navegador web em http://localhost:3000.
	 
## Verificação

1. Abra um navegador web e acesse http://localhost:3000.
2. Se o container Docker foi criado e está funcionando corretamente. A mensagem "Hello, Docker!" confirma que o servidor Node.js dentro do container está respondendo às requisições HTTP.
