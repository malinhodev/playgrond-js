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
