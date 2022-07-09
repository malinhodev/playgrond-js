/**** DOM - Document Object Model ******
 * NÓS(galhos feito na arvore de uma tag para outra)
 * 
 * ***A Arvore Dom
 * o documento HTML seria a arvore completa
 * a raiz da arvore é o Document (só existe uma raiz)
 * cada elemento da arvore chamda de node(nó)
 * conteúdos como texto são chamados de leaf nodes(as folhas)
*/
console.log(document.body);
//movendo-se através do DOM
//podemos acessar todos os elementos apartir de document.body
//a partir dele vamos entrando nos childnodes
//e depois acessando as propriedades que nos interessam.

console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].innerText);

/***** Encontrando elementos
 * podemos encontrar elementos de uma forma mais fácil do que se
 * movendo pelo DOM
 * como no HTML temos tags,classes e ids, o javascript nos possibilita
 * utilizar estas características para encontrar o que desejamos
 * hà alguns métodos para isto: getElementsByTagName(); getElementById();
 * getElementsByTagClassName(); e também o querySelector();
 */
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementById('id'));
console.log(document.getElementsByClassName('class'));
//método mais usado
console.log(document.querySelector('.lista h3'));

/**** Alterando o HTML
 * podemos mudar quase tudo através da DOM
 * adicionar, remover e clonar elementos
 * podemos utilizar métodos como: insertBefore(); appendChild(); e 
 * replaceChild();
 * 
 * ===== insert before
 * insere um nó antes do nó de referencia do método
 * precisamos de um elemento para ser adicionado
 * o elemento que tera o outro elemento adicionado antes dele
 * e o elemento pai destes dois
 */
let texto = document.createTextNode("texto do p novo");
let novoElemento = document.createElement("p");
novoElemento.appendChild(texto);
let elementoAlvo = document.querySelector(".class h1");
let elementoPai = document.querySelector(".class");

elementoPai.insertBefore(novoElemento, elementoAlvo);

/***appendChild();
 * adiciona um nó após todos o elementos do elemento pai especificado.
 * adiciona dentro do elemento pai! na  ulmtima posição
 */

/***** replaceChild();
 * repõe um antigo elemento no DOM, com um novo
 */
let footerH2 = document.querySelector("footer h2");
let paiFooter = document.querySelector("footer");

paiFooter.replaceChild(novoElemento, footerH2);

/***** creatTextNode();
 * criando nó de texto e inserindo no elemento
 */
let pSemTexto = document.getElementById("sem-texto");
let texto2 = document.createTextNode("texto do p sem texto.");

pSemTexto.appendChild(texto2);

/**** creatElement();
 * cria qualquer tag HTML.
 * criando e depois inserindo
 */
let lista = document.createElement('ul');
for(i=0;i<5;i++){
    let item2 = document.createElement('li');
    let texto3 = document.createTextNode('texto lista' + i);
    item2.appendChild(texto3);
    lista.appendChild(item2);
}
let container = document.getElementById('id');
container.appendChild(lista);

/**** Modificando e lendo atributos
 * podemos resgatar o valor de um atributo ou trocar com JS
 * por exemplo, o href de uma tag a ou o src de um elemento img
 * getAttribute(); pegar o valor
 * setAttribute(); atualiza o valor 
 */
let a = document.querySelector("footer a");
let link = 'https://www.google.com';
a.setAttribute('href', link);

/**** verificando altura e largura do elemneto
 * offsetWidth - considera as bordas
 * offsetHeight - considera as bordas
 * 
 * clientWidth - desconsidera bordas
 * clientHeight - desconsidera bordas
 */
let verificaElemento = document.querySelector('.class h1');
console.log(verificaElemento.offsetWidth);
console.log(verificaElemento.offsetHeight);
/**** Posição dos elementos na tela
 * getBoundingClientRect();
 */
console.log(verificaElemento.getBoundingClientRect());

/****Estilizando com JS
 * acessando a propriedade style podemos fazer as modificações
 * o estilo é manipulado direto na tag, ou seja, subdtitui o do CSS
 * (na maioria das vezes)
 */
pSemTexto.style.color = 'red';
/*** Selecionar vários elementos com query
 * podemos utlizar o método querySelectAll();
 * em vez de um, podemos pegar todos os elementos semelhantes 
 * com o seletor do CSS
 */
let all = document.querySelectorAll('.itens-azuis');
all[0].style.color = 'blue';