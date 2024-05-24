# Instalação do Docker no Windows

## Introdução à Containerização

A containerização é uma tecnologia que permite empacotar uma aplicação e todas as suas dependências em um contêiner. Este contêiner pode ser executado de forma consistente em qualquer ambiente que suporte a tecnologia de contêineres, como o Docker. A principal vantagem da containerização é garantir que o software funcione da mesma maneira em diferentes ambientes, eliminando problemas de configuração e dependências.

## Passos para Instalar o Docker no Windows

### 1. Baixar e Instalar o Docker Desktop

1. O instalador pode ser encontrado na página de [downloads do Docker](https://www.docker.com/products/docker-desktop).
2. Siga as instruções do instalador e reinicie o computador se solicitado.

### 2. Iniciar o Docker Desktop e Verificar a Instalação

1. Após reiniciar, inicie o Docker Desktop através do menu Iniciar ou da área de trabalho.
2. Abra o Prompt de Comando (cmd) ou o PowerShell.
3. Execute o comando abaixo para verificar a versão do Docker instalada:

    ```bash
    docker --version
    ```

    Deve ver uma saída semelhante a `Docker version 26.1.1, build 4cf5afa`.

### 3. Verificar o Docker Compose

O Docker Compose é uma ferramenta incluída no Docker Desktop, que permite definir e executar aplicativos multi-contêiner. Verifique a versão instalada com o comando:

1. No Prompt de Comando (cmd) ou PowerShell, execute:

    ```bash
    docker-compose --version
    ```

    Você deve ver algo como `Docker Compose version v2.27.0-desktop.2`.

### 4. Testar a Instalação com um Contêiner Simples

1. Execute o comando abaixo para iniciar um contêiner simples do Docker que executa a imagem `hello-world`:

    ```bash
    docker run hello-world
    ```

    Este comando baixa a imagem `hello-world` do Docker Hub (se não estiver disponível localmente) e executa um contêiner que exibe uma mensagem de teste.

2. Se tudo estiver configurado corretamente, você verá uma mensagem de sucesso indicando que o Docker foi instalado e está funcionando.

---
