# Ambiente Docker com MongoDB

Este exercício envolve a criação de um ambiente Docker com múltiplos serviços, incluindo um serviço web (Node.js) e um banco de dados (MongoDB).

## 1. Crie um diretório para o projeto

Abra o Prompt de Comando (cmd) ou PowerShell e execute os comandos abaixo para criar um diretório para o projeto e navegar até ele:

	```bash
	mkdir docker-avancado
	cd docker-avancado
	```
	
## 2. Estrutura de Diretórios

Dentro do diretório do projeto, crie os seguintes subdiretórios e arquivos:

	```bash
	mkdir -p web db
	```
A criação de subdiretórios web e db ajuda a separar os componentes do projeto, onde web conterá o código do aplicativo Node.js e db pode ser usado para configurações relacionadas ao banco de dados.

## 3. Crie o arquivo package.json no diretório web

Crie um arquivo chamado `package.json` com o seguinte conteúdo. Este arquivo define o projeto Node.js e suas dependências.

	```bash
	{
	  "name": "docker-mongodb",
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

O arquivo `package.json` é essencial para qualquer projeto Node.js. Ele especifica as dependências do projeto (neste caso, o Express.js e o Mongoose), scripts de execução (como npm start) e outras informações sobre o projeto. Este arquivo permite que o Node Package Manager (npm) instale todas as bibliotecas necessárias para o projeto.

## 4. Crie o arquivo index.js no diretório web

Crie um arquivo chamado `index.js` com o seguinte conteúdo. Este arquivo contém o código do aplicativo Node.js que se conecta ao MongoDB.

	```bash
	const express = require('express');
	const mongoose = require('mongoose');
	const app = express();
	const port = 3000;

	mongoose.connect('mongodb://db:27017/docker-avancado', {
	  useNewUrlParser: true,
	  useUnifiedTopology: true
	});

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('Connected to MongoDB');
	});

	app.get('/', (req, res) => {
	  res.send('Hello, Docker Compose!');
	});

	app.listen(port, () => {
	  console.log(`App running at http://localhost:${port}`);
	});
	```

O arquivo `index.js` é o ponto de entrada do aplicativo Node.js. Ele configura um servidor web simples usando o Express.js que responde com "Hello, Docker Compose!" quando acessado. Além disso, ele se conecta ao banco de dados MongoDB usando o Mongoose, uma biblioteca de modelagem de dados para MongoDB e Node.js. Este servidor escuta na porta 3000 para conexões HTTP.
	
## 5. Crie um Dockerfile no diretório web

Crie um arquivo chamado `Dockerfile` com o seguinte conteúdo. Este arquivo define como construir a imagem Docker para o aplicativo Node.js.

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

	`FROM node:14`: Especifica a imagem base do Node.js, que inclui o ambiente necessário para executar aplicativos Node.js.
	`WORKDIR /app`: Define o diretório de trabalho dentro do container onde os comandos seguintes serão executados.
	`COPY package*.json ./`: Copia os arquivos `package.json` e `package-lock.json` para o diretório de trabalho no container.
	`RUN npm install`: Instala as dependências definidas no `package.json`.
	`COPY . .`: Copia todo o código-fonte para o diretório de trabalho no container.
	`EXPOSE 3000`: Expõe a porta 3000, que é onde o aplicativo Node.js será executado.
	`CMD ["npm", "start"]`: Define o comando a ser executado quando o container iniciar, que neste caso é npm start para iniciar o aplicativo Node.js.
	
## 6. Crie um arquivo docker-compose.yml no diretório raiz

Crie um arquivo chamado `docker-compose.yml` com o seguinte conteúdo. Este arquivo define e executa múltiplos serviços Docker.

	```bash
	version: '3.8'

	services:
	  web:
		build: ./web
		ports:
		  - "3000:3000"
		depends_on:
		  - db

	  db:
		image: mongo:4.2
		volumes:
		  - db-data:/data/db

	volumes:
	  db-data:
	```  
	
	Define a versão do Compose.
	Cria dois serviços: web e db.
	web:
		Constrói a partir do diretório web.
		Mapeia a porta 3000 do host para a porta 3000 do container.
		Depende do serviço db para iniciar.
	db:
		Usa a imagem MongoDB 4.2.
		Monta um volume para persistir os dados.
		
## 7. Construa e inicie os serviços com Docker Compose

No Prompt de Comando ou PowerShell, execute o comando abaixo para construir e iniciar os serviços definidos no `docker-compose.yml`.

	```bash
	docker-compose up --build
	```
	
Este comando lê o arquivo `docker-compose.yml`, constrói as imagens Docker conforme necessário e inicia os serviços definidos. O `--build` garante que as imagens são reconstruídas se houver alterações no código ou na configuração.
	
## Verificação

1. Abra um navegador web e acesse http://localhost:3000.
2. A mensagem "Hello, Docker Compose!" deve aparecer.
3. Verifique no log do terminal se a mensagem "Connected to MongoDB" foi exibida.

Esses passos verificam se o ambiente Docker foi criado corretamente e está funcionando conforme esperado. A mensagem "Hello, Docker Compose!" confirma que o servidor Node.js está ativo e respondendo às requisições HTTP, enquanto a mensagem "Connected to MongoDB" confirma que o aplicativo conseguiu se conectar ao banco de dados MongoDB.

## Conclusão

Foi criado e executado um ambiente Docker com múltiplos serviços usando Docker Compose. Este exemplo demonstra como containerizar uma aplicação mais complexa, envolvendo um aplicativo Node.js e um banco de dados MongoDB, e como gerenciar múltiplos containers de maneira eficiente.