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

/**** CARACTERES ESPECIAIS ***

\d - aceita quaquer dígito (numeros) de caractere | mesma coisa que [0-9]
\w - aceita um caractere alfanumerico (numeros e letras)
\s - aceita qualquer caractere de espaço em branco ate quebra de linha
\D - não aceita caracteres que são dígitos(numeros)
\W - não aceita caractere alfanumérico
\S - não aceita caractere que seja espaço em branco
.  - aceita qualquer caractere, menos quebra linha

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
console.log(tresLetras.test("123"));//true
===========================================*/

/*** Operador not ^ */
//Podemos escrever um set(combinação) que aceitam
//tudo, menos alguns caracteres


