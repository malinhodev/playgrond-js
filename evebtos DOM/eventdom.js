/****Como acionar um evento
 * devemos atrelar o evento a um elemento, ex: um botão
 * depois inserir um listener( addEventListener() ) e o tipo de evento com argumento
 * aí o elemento responderá por este evento, obviamente, 
 * os outros da página não.
 */
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
function msg(){
    console.log('clicado!');
}
btn1.addEventListener("click", msg);
btn2.addEventListener("click",function(){
    btn1.removeEventListener("click",msg);
})
/****Removendo eventos
 * utilizamos o método removeEventListener(); 
 * onde passamos o evento e a função que o evento está escutando.
 OBS: A FUNÇÃO TEM QUE SER ESTERNA ONDE SERÁ REMOVIDO, NÃO PODE SER ANÔNIMA!
 
 ****** Objeto do evento
 *quando criamos eventos, temos a opção de utilizar um argumento
 *opcional, que é chamado de objeto do evento
 *ele contém propriedades que podem ser utilizardas a nosso favor
 *o objeto é criado pelo JS automaticamente 
 */
btn3.addEventListener("click", (e)=>{
    console.log(e);
})

//propagação
//stopPropagation(); da stop na propagação, se uma tag
//estiver dentro de outra com evento.

/*****Ações default
 * preventDefaul(); para parar os eventos pré definidos
 * ======================================================
 * ***Evento por tecla
 * keyup - quando soltamos a tecla
 * keydow - quando apertamos a tecla
 * o mais utilizado é o keyup
 */
window.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("soltou o enter");
    }
});
/** evento do mouse "mousemove"
**evento do scroll do mouse "scroll"
*/
window.addEventListener("scroll", function(e){
    if(window.pageYOffset > 1000){
        console.log("ativou");
    }
});
/** eventofoco
 * quando da foco no input
 * "blur" - quando sai do input
 * "foco" - quando entra no input
 * 
 * *page load
 * "load" - quando ta carreegando a pagina
 * "beforeunload" - quando vai fechar a página
 */