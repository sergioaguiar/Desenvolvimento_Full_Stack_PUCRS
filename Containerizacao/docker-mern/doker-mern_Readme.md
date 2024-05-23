## Ambiente Docker com MERN Stack

Este exercício envolve a criação de um ambiente Docker com múltiplos serviços, incluindo um frontend em React, um backend em Node.js/Express, e um banco de dados MongoDB.

## 1. Crie um diretório para o projeto

Abra o Prompt de Comando (cmd) ou PowerShell e execute os comandos abaixo para criar um diretório para o projeto e navegar até ele:

	```bash
	mkdir docker-mern
	cd docker-mern
	```
	
## 2. Estrutura de Diretórios

Dentro do diretório do projeto, crie os seguintes subdiretórios e arquivos:
		
	```bash
	mkdir -p client server db
	```
	
A criação de subdiretórios client, server e db ajuda a separar os componentes do projeto. O diretório client conterá o código do frontend React, o diretório server conterá o código do backend Node.js, e o diretório db pode ser usado para configurações relacionadas ao banco de dados.

## 3. Configuração do Frontend (React)

1. Crie um arquivo chamado `package.json` no diretório client com o seguinte conteúdo. Este arquivo define o projeto React e suas dependências.	
	
	
	```bash
	{
	  "name": "client",
	  "version": "1.0.0",
	  "main": "index.js",
	  "scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	  },
	  "dependencies": {
		"react": "^17.0.1",
		"react-dom": "^17.0.1",
		"react-scripts": "4.0.0"
	  }
	}
	```
	
O arquivo `package.json` especifica as dependências do projeto React (como react, react-dom, e react-scripts), scripts de execução (como start, build e test), e outras informações sobre o projeto. Este arquivo permite que o Node Package Manager (npm) instale todas as bibliotecas necessárias para o projeto.

2. Crie um arquivo chamado `Dockerfile` no diretório client com o seguinte conteúdo. Este arquivo define como construir a imagem Docker para o aplicativo React.
	
	
	
	```bash
	FROM node:14

	WORKDIR /app

	COPY package*.json ./
	RUN npm install

	COPY . .

	EXPOSE 3000

	CMD ["npm", "start"]

	```
	
	`FROM node`:14: Especifica a imagem base do Node.js, necessária para executar aplicativos React.
	`WORKDIR /app`: Define o diretório de trabalho dentro do container onde os comandos seguintes serão executados.
	`COPY package*.json ./`: Copia os arquivos package.json e package-lock.json para o diretório de trabalho no container.
	`RUN npm install`: Instala as dependências definidas no package.json.
	`COPY . .`: Copia todo o código-fonte para o diretório de trabalho no container.
	`EXPOSE 3000`: Expõe a porta 3000, que é onde o aplicativo React será executado.
	`CMD ["npm", "start"]`: Define o comando a ser executado quando o container iniciar, que neste caso é npm start para iniciar o aplicativo React.

## 4. Configuração do Backend (Node.js/Express)

1. Crie um arquivo chamado package.json no diretório server com o seguinte conteúdo. Este arquivo define o projeto Node.js e suas dependências.
		
	```bash
	{
	  "name": "server",
	  "version": "1.0.0",
	  "main": "index.js",
	  "scripts": {
		"start": "node index.js"
	  },
	  "dependencies": {
		"express": "^4.17.1",
		"mongoose": "^5.10.9"
	  }
	}
	```

O arquivo `package.json` especifica as dependências do projeto Node.js (como express e mongoose), scripts de execução (como start), e outras informações sobre o projeto. Este arquivo permite que o Node Package Manager (npm) instale todas as bibliotecas necessárias para o projeto.

2. Crie um arquivo chamado `index.js` no diretório server com o seguinte conteúdo. Este arquivo contém o código do backend Node.js.	
	
	```bash
	const express = require('express');
	const mongoose = require('mongoose');
	const app = express();
	const port = 5000;

	mongoose.connect('mongodb://db:27017/docker-mern', {
	  useNewUrlParser: true,
	  useUnifiedTopology: true
	});

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('Connected to MongoDB');
	});

	app.get('/', (req, res) => {
	  res.send('Hello, Docker Compose with MERN!');
	});

	app.listen(port, () => {
	  console.log(`Server running at http://localhost:${port}`);
	});
	```
	
O arquivo `index.js` é o ponto de entrada do backend Node.js. Ele configura um servidor web simples usando o Express.js que responde com "Hello, Docker Compose with MERN!" quando acessado. Além disso, ele se conecta ao banco de dados MongoDB usando o Mongoose, uma biblioteca de modelagem de dados para MongoDB e Node.js. Este servidor escuta na porta 5000 para conexões HTTP.
	
3. Crie um arquivo chamado `Dockerfile` no diretório server com o seguinte conteúdo. Este arquivo define como construir a imagem Docker para o backend Node.js.

	```bash
	FROM node:14

	WORKDIR /app

	COPY package*.json ./
	RUN npm install

	COPY . .

	EXPOSE 5000

	CMD ["npm", "start"]
	```

	`FROM node:14`: Especifica a imagem base do Node.js, necessária para executar aplicativos Node.js.
	`WORKDIR /app`: Define o diretório de trabalho dentro do container onde os comandos seguintes serão executados.
	`COPY package*.json ./`: Copia os arquivos package.json e package-lock.json para o diretório de trabalho no container.
	`RUN npm install`: Instala as dependências definidas no package.json.
	`COPY . .`: Copia todo o código-fonte para o diretório de trabalho no container.
	`EXPOSE 5000`: Expõe a porta 5000, que é onde o backend Node.js será executado.
	`CMD ["npm", "start"]`: Define o comando a ser executado quando o container iniciar, que neste caso é npm start para iniciar o backend Node.js.

## 5. Configuração do MongoDB

Não é necessário um `Dockerfile` específico para o MongoDB, pois utilizaremos uma imagem oficial do MongoDB disponível no Docker Hub. No próximo passo, configuraremos o serviço db para usar essa imagem oficial do MongoDB.

## 6. Crie um arquivo docker-compose.yml no diretório raiz

Crie um arquivo chamado `docker-compose.yml` com o seguinte conteúdo. Este arquivo define e executa múltiplos serviços Docker.

	```bash
	version: '3.8'

	services:
	  client:
		build: ./client
		ports:
		  - "3000:3000"
		depends_on:
		  - server

	  server:
		build: ./server
		ports:
		  - "5000:5000"
		depends_on:
		  - db

	  db:
		image: mongo:4.2
		volumes:
		  - db-data:/data/db

	volumes:
	  db-data:
	```
	
	`version`: '3.8': Define a versão do Compose.
	`services`: Define os serviços que compõem o aplicativo.
		`client`:
			`build: ./client`: Constrói a partir do diretório `client`.
			`ports: - "3000:3000"`: Mapeia a porta 3000 do host para a porta 3000 do container.
			`depends_on: - server`: Define que o serviço `client` depende do serviço `server`.
		`server`:
			`build: ./server`: Constrói a partir do diretório `server`.
			`ports: - "5000:5000"`: Mapeia a porta 5000 do host para a porta 5000 do container.
			`depends_on: - db`: Define que o serviço server depende do serviço `db`.
		`db`:
			`image: mongo:4.2`: Usa a imagem MongoDB 4.2.
			`volumes: - db-data:/data/db`: Monta um volume para persistir os dados.
	
## 7. Construa e inicie os serviços com Docker Compose

No Prompt de Comando ou PowerShell, execute o comando abaixo para construir e iniciar os serviços definidos no `docker-compose.yml`.

	```bash
	docker-compose up --build
	```
	
## Verificação

1. Abra um navegador web e acesse http://localhost:3000 para o frontend React.
2.  http://localhost:5000 para o backend Node.js.
3. Verifique no log do terminal se a mensagem "Connected to MongoDB" foi exibida.


## Conclusão

Foi criado e executado um ambiente Docker com múltiplos serviços usando Docker Compose para a stack MERN. Este exemplo demonstra como containerizar uma aplicação completa, envolvendo um frontend React, um backend Node.js/Express, e um banco de dados MongoDB, e como gerenciar múltiplos containers de maneira eficiente.
