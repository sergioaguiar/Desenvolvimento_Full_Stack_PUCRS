
/*
Programação Procedural

Sequencial. Preceberam que era necessário repetir códigos as vezes, dependendo de circunstâncias.
Surgiu então a ideia de encapsular o código repetitivo em funções. As funções começaram a chamar
outras funções e se interdepender, virando algo complexo. 

Muitas vezes uma função precisava receber 20 parâmetros para repassar para outras funções, formando 
o código conhecido como "espaguete". A manutenção deste código era muito difícil.
*/

/*
Programação Orientada a Objeto 

É um estilo/paradigma de programação. Cada objeto tem suas variáveis (atributos ou propriedades) 
e suas funções (métodos). Não existem mais funções e variáveis comuns (na programação OO pura).

Objetos pode ter nenhuma variável ou nenhum método.

UML - Unified Modeling Language: muito utilizada para modelar programas, antes da implementação.
Em UML, um objeto terá um nome, atributos e métodos.

Objeto: é uma coleção de dados e funcionalidades com alguma relação entre si. 
    Dados: são váriáveis, atributos ou propriedades.
    Funcionalidades: são métodos, funções ou comportamentos.

Em JS, para criar um objeto basta utilizar o código abaixo. Obs.: Em JS, tudo é objeto.

Atributos e métodos devem possuir nomes únicos e armazenam um valor ou uma referência.
*/

var pessoa = {
    nome: "Alessandro",
    idade: 48,
    saudar: function () {
        console.log("Olá");
    }
}

var pessoa1 = {
    nome: "Maria",
    idade: 8,
    saudar: function () {
        console.log("Olá!!!!");
    }
}

/*
Formas de acessar atributos em objetos no JS:
    objeto.propriedade;
    objeto["propriedade"]; // Desta forma, estou acessando com um vetor.

Como atribuir?
    objeto.propriedade = algo;
    objeto["propriedade"] = algo;

Um método representa uma ou mais funcionalidades presentes em um objeto. Possuem nome único.
Representam uma lógica pertinente ao objeto.

Formas de acessar métodos em objetos no JS:
    objeto.metodo(parametros);  // Executa o método.
    objeto.metodo;               // Retorna o método em si, sem executá-lo.
*/

/*
JS possui dois tipos de dados:
    Tipos de valor, ou primitivos (Number, String, Boolean, Symbol, undefined, null)
    Tipos de referência (object, function, array, map, set, ...)

*/

/*
Conceitos Principais da Orientação a Objeto
    
    Encapsulamento
        Permite que atributos e métodos sejam agrupados de certa forma em uma interface bme definida
        para manipular dados de um objeto de forma eficiente. Isolamneto entre partes de um programa.
        Saber o que um objeto faz e não como ele faz. Proteção de atributos. A interface entre o
        objeto e o mundo externo deve ser bem estabelecida para que seu atributos sejam alterados de
        forma segura, apenas por seus métodos.
        -> Reduz complexidade e Protege dados.

    Abstração
        POO é amplamente baseada na abstração digital da vida real. Objetos são representações/abstrações
        do que queremos implemnetar do que observamos no mundo ao nosso redor. Buscamos o essencial e 
        deixamos de lado o que não importa, focando no que realmente precisamos representar em nossos objetos.
        -> Reduz complexidade e Aumenta reuso.

    Herança 
        Permite compartilhamento de atributos e métodos entre objetos. Reaproveita código e agrupa o que é 
        comum a diferentes objetos. Busca identificar e agrupar comportamentos generalizados ou especializados.
        Ajuda a eliminar redundâncias. Generaliza ou especializa comportamentos, dependendo dos objetos que 
        os utilizarão. Em JS, todo objeto criado é filho de Object. Herança em JS ocorre através de protótipos.
        -> Elimina redundâncias no código

    Polimorfismo
        Através da herança é possível alterar um comportamento herdado de um objeto-pai. Permite uma forte
        separação de interesses. Limpeza de código, removendo lógica excedente. Em JS, todos são filhos de object.
        Assim, todos herdam de object.
        -> Eliminar lógica desnecessára no código.
        
        Polimorfismo pode ser:

            - Sobrescrita -> métodos com o mesmo nome e assinatura em diferentes objetos relacionados 
                    por herança. O método na classe filha sobrescreve aquele herdado da classe pai.
            
            - Sobrecarga -> métodos com mesmo nome, mas diferentes assinaturas, em diferentes objetos
                    relacionados por herança. Neste caso, o objeto filho herda o método do pai e tem
                    outro método de mesmo nome (mas assinatura diferente) próprio. Dependendo do caso, 
                    usará um método ou outro.

                    Javascript NÃO suporta sobrecarga.
            
*/

/*
Objetos podem ser criados de cinco formas:

    1. Literais -> usando a própria linguagem de criaçã ode objeto do JS, atribuindo este objeto a 
                    uma variável. 

    2. Fábricas -> funções que criam e retornam objetos.

    3. Construtores -> também são funções que criam objetos, porém com sintaxe diferente das fábricas.
                    A função constroi um novo objeto. 
                    
                    Obs.: Para acessar um construtor que fez um objeto, basta usar o comando objeto.constructor; 
                        Para acessar o nome do constructor: objeto.constructor.name;
                        Todo objeto em JS tem um constructor.


    4. Protótipos -> usando o método Object.create(). JS é prototype oriented. Todos objetos tem um protótipo.
                    Para acessar um protótipo de um objeto "Pessoa": Object.getPrototypeOf(Pessoa);

    5. Classes -> modelos para criar objetos. É uma simplificação e uma adaptação do JS para o que 
                uma função construtora faz.

*/
// 1. Literais
var objeto = {};


// 2. Fábricas
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,                   // Se o atributo receber o mesmo nome do parâmetro, o
        anoDeNascimento,        // valor é atribuido automaticamente (não precisa colocar
        profissao,              // na forma nome: nome).
        calculaIdade() {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};

const person = criarPessoa("Fulano", 1990, "Estudante");
console.log(person);


// 3. Construtores 
function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

const pessoa1 = new Pessoa(["Fulano", "de Tal"], 1990, "Estudante");
console.log(pessoa1);


// 4. Protótipos
const pessoa2 = Object.create(pessoa1);

/* Acrescentando um método novo em Pessoa com prototype, garante que todos objetos 
criados com ela, passados e futuros, tenham acesso ao método. */
Pessoa.prototype.saudar = function () {
    console.log("Olá");
};

    // 5. Classes
    class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
}
    ola() {
    console.log(`Olá, eu sou ${this.nome}.`)
    }
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

// extends é a palavra chame para Estudante herdar Pessoa e super passa os parâmetros para Pessoa
class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante"); // aqui passamos para pessoa a profissão sempre com valor "Estudante"
        this.matricula = matricula;
    }
    // SOBRESCRITA: Exemplo de polimorfismo. Sobrescreve o método da classe pai, mas chama o método de pai (super.ola())
    ola() {
        super.ola();
        console.log(` colegas.`)
    }
}

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, "Professor"); // aqui passamos para pessoa a profissão sempre com valor "Professor"
        this.titulacao = titulacao;
    }
}

/*
REFERÊNCIA

    Lembrando que atribuição de objetos não copia um objeto para a outra variável.  Mas fazcom que ambas as 
    variáveis (original e a nova) apontem para o mesmo objeto. Logo, qualquer mudança na nova variável refletira
    na antiga e vice-versa. Ambas variáveis apontam para o mesmo lugar na memória.

*/
// Exemplo
function criarPessoa() {
    return {
        nome: "Fulano de Tal",
        anoDeNascimento: 1990,
        profissao: "Estudante"
    }
}

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;
pessoa2.anoDeNascimento = 1989;
console.log(pessoa1); //{nome: 'Fulano de Tal', anoDeNascimento: 1989, profissao: 'Estudante'}
console.log(pessoa2); //{nome: 'Fulano de Tal', anoDeNascimento: 1989, profissao: 'Estudante'}
const pessoa3 = criarPessoa();
console.log(pessoa3) //{nome: 'Fulano de Tal', anoDeNascimento: 1990, profissao: 'Estudante'}

/*
    No exemplo acima, pessoa1 e pessoa2 apontam para um mesmo objeto (mesmo local na memória),
    enquanto pessoa3 é um novo objeto.
*/

/* 
MEMBROS E SUAS PRIORIDADES

Atributos e métodos podem ser de objetos ou estáticos.
    - De Objeto: cada objeto possui o seu.
    - Estáticos: São compartilhados.

*/

//Exemplo de estático
class validadorCPF {
    static TAMANHO_CPF = 11;    // atributo estático
    static validar(cpf) {       // método estático
        if (cpf.toString().length == this.TAMANHO_CPF) return true;
        return false;
    }
}

// Método funciona mesmo sem objeto instanciado por ser estático (static).
console.log(validadorCPF.validar(12345678901)); //true
// Assim como métodos, atributos podem ser estáticos também, se forem de interesse para acesso público (ex.: número PI).
console.log(validadorCPF.TAMANHO_CPF);  //11


/*
VISIBILIDADE

Atributos e métodos privados podem ser criados de algumas formas. O uso de let, por exemplo,
torna a variável de escopo local, logo, não pode ser acessados de fora. Em classes, o uso de 
# torna o atributo privado.
*/

//Exemplo com função construtora
function Estagiario(numeroContratoParam) {
    let numeroContrato = numeroContratoParam;
    this.contrato = function () {
        return (numeroContrato);
    }
}

const estagiario1 = new Estagiario(10);
console.log(estagiario1.numeroContrato); //undefined (numeroCOntrato não pode ser acessado diretamente).
console.log(estagiario1.contrato());     // 10 (metodo para acessar numeroContrato).


// Exemplo com classe
class EstudantePrivado extends Pessoa {
    #matricula // # torna matricula privada
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante"); // aqui passamos para pessoa a profissão sempre com valor "Estudante"
        this.#matricula = matricula;
    }
    // SOBRESCRITA: Exemplo de polimorfismo. Sobrescreve o método da classe pai, mas chama o método de pai (super.ola())
    ola() {
        super.ola();
        console.log(` colegas.`)
    }
}

const aluno10 = new EstudantePrivado("João", 1999, 123456);
console.log(aluno10.matricula);
console.log(aluno10.#matricula);


class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula;
    }
    ola() {
        super.ola();
        console.log(" colega!");
    };
};
const aluno = new Estudante(["Fulano", "de Tal"], 1990, "Estudante", 120901);
console.log(aluno);


/*
ASSOCIAÇÃO

Associando objetos Estudante e Notas.
*/

class Nota {
    #grau
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    }
    setGrau(valor) {
        if (valor < 0 || valor > 10) throw new Error();
        this.#grau = valor;
    }
    getGrau() {
        return this.#grau;
    }
}

class Estudante extends Pessoa {
    #matricula;
    notas;
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula;
    }
    ola() {
        super.ola();
        console.log(" colega!");
    };
};
const aluno = new Estudante(["Fulano", "de Tal"], 1990, "Estudante", 120901);
aluno.notas = [new Nota("OO", 10), new Nota("Algoritmos", 8), new Nota("Cálculo", 7)];