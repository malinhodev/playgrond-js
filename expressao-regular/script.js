//As expressões regulares no JS são um tipo de objeto
//podemos instanciar de duas formas
//New RegExp(); OU /.../;
const reg1 = new RegExp('bola');
const reg2 = /carro/;//modo mais usado
//Depois da definição do padrão por meio da regeex
//utilizamos o método teste() para verificar se o padrão é retornado
//com isso vamos receber de resposta true or false.
let text = 'carro novo!';
/** 
console.log(reg1.test("tem bola?"));
console.log(reg1.test("não tem"));
console.log(reg2.test("tem carro?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));
console.log(/quadrado/.test("não tem quadrado?")); */

/*** Conjuntos 
//Podemos definir um conjunto de caracteres para encontrar
//por regex basta por entre [] colchetes
//com um traço podemos definir o intervalo também.

const reg3 = /[12]/;//procura tanto o 1 como o 2

console.log(reg3.test('temos numero 6'));
console.log(reg3.test('temos numero 12'));
console.log(reg3.test('temos numero 021'));

const reg4 = /[0-9]/;//procura por um numero de 0 a 9.
console.log(reg4.test('454545454544548789 6'));
console.log(reg3.test('temos numeros?'));*/

/******==== CARACTERES ESPECIAIS ======***********

\b - indica o fim (que após o antessessor não tem mais nada)
\d - aceita quaquer dígito(numeros) de caractere | mesma coisa que [0-9]
\w - aceita um caractere alfanumerico(numeros e letras)
\s - aceita qualquer caractere de espaço em branco ate quebra de linha
\D - não aceita caracteres que são dígitos(numeros)
\W - não aceita caractere alfanumérico
\S - não aceita caractere que seja espaço em branco
.  - aceita qualquer caractere, menos quebra linha

=======================++++++====================*/

/** 
let ano = /\d\d\d\d/;//apartir de 4 caracteres numericos
console.log(ano.test("05"));//false
console.log(ano.test("2022"));//true
console.log(ano.test("opa"));//false
console.log(ano.test("teste"));//false

let tresLetras = /\w\w\w/;//apartir de três caractreres alfanumericos
console.log(tresLetras.test("dia"));//true
console.log(tresLetras.test("ano"));//true
console.log(tresLetras.test("oi"));
console.log(tresLetras.test("teste"));//true pois tem de 3 a mais caracteres
console.log(tresLetras.test("123"));//true */


/*** Operador not ^ */
//Podemos escrever um set(combinação) que aceitam
//tudo, menos alguns caracteres


/*** Operador Plus + */
//Quando o + está após algum elemento da expressão,
//este elemento pode se repetir mais de uma vez indefenidamente.

/*** Operador Question ? */
//faz com que o dígito anterior seja opcional.

/*** Ocorrência Precisa {} */
//inserir o numero de vezes(ocorrência) entre chaves

const cep = /\d{5}-\d{3}/;//expressão para verificar cep
const tel = /\(\d{2}\)\d{4,5}-\d{4}/;//expressão para verificar numero contato.

/*** Método .exec */
//nos retorana um obj com algumas informações
//sobre a regex, se nada for encontrado retorna null.

const digitos = /\d+/;
console.log(digitos.exec("tem 100 aqui"));
console.log(digitos.exec("aqui não tem"));

/**** Método match  */
//funciona de forma similar ao exec.
//não é muito utilizado
//é um método do prototype string

const frase = "o número 100 tá aqui".match(/\d+/);
console.log(frase);

/***** Choice pattern 
//podemos colocar uma instrução na regex que 
//funciona como um ||(ou-or) das condicionais
//retorna true ou false
let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));//true
console.log(frutas.test("25 batatas"));//false
console.log(frutas.test("8 laranjas"));//true */

/** validando dominio 
let validarDominio = /[?www.]\w+\.com|com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.horadecodar.com.br"));
console.log(validarDominio.test("agenciacode68.com.br"));*/

/*** validando e-mail 
let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@gmail.com"));
console.log(validarEmail.test("teste@gmail"));
console.log(validarEmail.test("teste@gmail.com.br"));
console.log(validarEmail.test("gmail.com")); */

/*** validando data de nascimento 
let nascimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
let nascimento2 = /[0-31]{2}[/][0-12]{2}[/][1940-2022]{4}/;//otimizado


console.log(nascimento.test("25/02/2015"));
console.log(nascimento.test("25/02/15"));
console.log(nascimento.test("5/2/2015"));
console.log(nascimento.test('23/11/1992'));

//=======validando usuario
//de 6 a 16 caracteres ^(?=.{6,16}$)
//caracteres permetidos [a-z0-9-_]
const validaUsuario = /^(?=.{6,16}$)[a-z0-9-_]/;

console.log(validaUsuario.test("580973_bianca"));
console.log(validaUsuario.test("580973_biancaaaaaaaa"));
console.log(validaUsuario.test("580973"));*/
