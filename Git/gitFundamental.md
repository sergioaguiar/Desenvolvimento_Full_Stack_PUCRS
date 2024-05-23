# Git Fundamental

## Criando repositórios

Para criar um repositório, utilizamnos o comando **git init**.

Desta maneira o git vai criar os arquivos necessários para inicializá-lo. Estes arquivos ficam localizados em uma pasta oculta .git no repositório.

Após o comando git init, o diretório será reconhecido pelo git como um projeto e responderá aos seus demais comandos.


## Vinculando o repositório a um repositório remoto

É uma ação que deve ser feita apenas uma vez por projeto. Para tanto, devemos fazer os seguitnes passos:
1. Criar o projeto no GitHub;
2. Inicializar o mesmo no git em nossa máquina (comandos são apresentados após a criação do projeto no GitHub);
- **git init**
- Adicionar um arquivo qualquer no repositório (ex.: teste.txt);
- **git add teste.txt** (adiciona arquivo ao projeto);
- **git commit -m "first commit"** (-m é flag de mensagem);
- **git branch -M main** (cria branch principal);
        
3. Sincronzar com o GitHub e enviar.
- **git remote add origin https://github.com/sergioaguiar/curso_git_1** (vincula o repositório ao repositório remoto);
- **git push -u origin main** (envia os arquivos para o repositório remoto).


## Verificando mudanças do projeto

**git status** é um comando bastante útil que aponta o status do repositório e dos arquivos nele presentes - se já foram adicionados, comitados, se subiram para o repositório remoto, etc. Ou seja, ele mapeia todas alterações do projeto.

Ele apresenta a diferença do que já está enviado ao repositório remoto e o repositório local.

## Adicionando arquivos ao projeto

Para adicionar arquivos novos ao projeto usamos o comando **git add**.

Podemos adicionar 1 arquivo por vez ou vários ao mesmo tempo. O git só passa a monitorar os arquivos, após o add. Assim, é interessante usar esse comando de tempos em tempos para não deixar nada de fora do controle de versões.

- Para adicionar um arquivo: **git add index.html** / **git add css/styles.css**
- Para adicionar todos arquivos: **git add .**


## Salvando alterações do projeto

Para salvar alterações do projeto usamos o comando **git commit**.

Podemos commitar arquivos específicos ou vários de uma vez co ma flag -a.
É uma boa prática enviar uma mensagem a cada commit com as alterações que foram feitas. Para adicionar a mensagem, usamos a flag -m.

- Para commitar um arquivo: **git commit a.txt -m "enviando arquivo de texto**
- Para commitar todos arquivos: **git commit -a -m "mensagem de commit" .**


## Enviando Código ao repositório remoto

Quando finalizamos uma funcionalidade nova, enviamos o código ao repositório remoto.

Esta ação é feita pelo comando **git push**.

Após esta ação, o código do servidor será atualizado baseando-se no código local enviado. O estado idela para enviar código é quando o **git status** não apresentar alterações. Asssim garantimos que tudo que está no repositório atual será enviado para o repositório remoto.


## Recebendo Código ao repositório remoto

É comum também ter que sincronizar o repositório local com as mudanças do remoto.

Esta ação é feita pelo comando **git pull**.

Após o comando serão buscadas atualizações. Se encontradas, elas serão unidas ao código atual existente na nossa máquina.


## Clonando repositórios

O ato de baixar um repositório de um servidor remoto é chamado de clonar repositório.

Esta ação é feita pelo comando **git clone**, passando a referência do repositório remoto que queremos clonar. 

Está ação normalmente é feita quando entramos em um novo projeto.

**git clone https://github.com/sergioaguiar/curso_git_1.git .** (O ponto no final do comando significa diretório atual. Sem o ponto, o comando irá criar uma pasta repositório dentro da pasta atual).

Obs.: Pelo que entendi, git clone seria uma junção do git init + git pull.


## Removendo arquivos do repositório

Os arquivos podem ser removidos da monitoração do git.

O comando para deletar é **git rm**. 

Após deletar um arquivo do git, ele não terá mais suas atualizações consideradas pelo git. Só voltará a ser acompanhado se for novamente adicionado com **git add**.

**IMPORTANTE**: o comando **git rm teste.txt**, além de excluir o arquivo do monitoramento do git, o exclui também da pasta. Esta exclusão precisa ser comitada e enviada para o repositório pelos comandos git commit e git push.


## Ignorando arquivos no projeto

Para que arquivos na pasta do repositório não sejam acompanhados pelo git, devemos inserir um arquivo chamado **.gitignore** na raiz do projeto. Neste arquivo, inserimos todos arquivos que não devem entrar no versionamento. Isto é útil pa\ra arquivos gerados automaticamente ou arquivos que contém informações sensíveis.

**IMPORTANTE**: ao contrario do que ocorre com comando **git rm teste.txt**, o .gitignore faz cm que o arquivo não seja monitorado pelo git, mas não o exclui também da pasta. 

Colocando o seguinte código abaixo dentro do arquivo .gitignore:
d.txt -> ignora o arquivo  
node_modules/* -> ignora todos arquivos dentro da pasta


## Histórico de alterações

Para acessar um histório de modificações feitas no projeto, usamos o comando **git log**. Como ele, recebemos informações dos commits realizados no projeto até então.


## Renomeando ou movendo arquivos

O comando **git mv** serve tanto para renomear quanto para mover arquivos. No comando devemos passar o nome e localização inicial e nome e localização final para o arquivo. 

**git mv about1.html about.html** - altera o nome do arquivo e mantem na mesma pasta.
**git mv bannerinicia.css css/bannerInicial.css** - renomeia e move para outra pasta.
**git mv rodape.css css/rodape.css** - altera a localização do arquivo.

*Obs.: após renomeações, movimentações (git mv) e deleções (git rm) é necessário fazer novo commit e push.*


## Desfazendo alterações

Um arquivo alterado pode ser retornado ao estado original. Para tanto, utilizamos o comando **git checkout**. Após a utilização deste comando, o arquivo sai do staging e, caso seja feita uma próxima alteração, entra em staging novamente.

Staging é o estado que o arquivo está após modificações esperando o próximo commit. Quando se utiliza o checkout, o arquivo volta ao estado do último commit.

**git checkout css/styles.css** retorna o arquivo ao estado do último commit.

