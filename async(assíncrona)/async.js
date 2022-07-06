/* Programação assíincrona são ações que podem ser executadas ao 
 * tempo todo sem uma 'fila'.
 * **Calback functions
 * são funções executadas após um tempo de execução da cascata.

console.log("1");

setTimeout(function(){
    console.log("5");
},2000);

console.log("2");
console.log("3");
console.log("4"); */

/***Promises
 * são ações assícronas que podem produzir um valor
 * em algum momento no código.
 * 
 * é uma forma de dizer para a linguagem que um valor pode ser 
 * executado em um ponto futuro do código. 


let p = Promise.resolve(5);

console.log("outros códigos");

console.log(p);
//podemos manipular valores da promise em qualquer ponto do código
p.then((value) =>{ return value + 5})
 .then((value)=>{console.log(`o valor é ${value}`)});  */

 /*** Falha nas promises 
  * uma  promise pode falhar, podemos reter esse erro com
  * um metodo chamado cath.
  * 
  * com ele podemos exibir o erro no console,por exemplo, e fazer 
  * o debug no código.
 
let q = Promise.resolve(new Error("Não deu certo!"));

console.log("executando ações");

q.then(value=>console.log(value))
 .catch(reason=>console.log("Falhou: " + reason)); */

 /*** Reijeitando Promises
  * além do resolve, há o metodo reject
  * que é quando determinada lógica não satisfaz nosso programa
  * então podemos ir para outra com o reject, em vez do resolve
  * 
  * resolven e reject terminam a promise, ou seja, não
  * podemos chamar mais o then
 
function verificaNumero(num){
    return new Promise((resolve, reject)=>{
        if(num == 2){
            resolve(console.log(`O numero é: ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
     });
}

verificaNumero(2);
verificaNumero(3);  */

/*** Resolvendo varias promises
 * com o método all, podemos resolver várias promessas de uma vez só
 * ou seja, passamos elas por array e quando a última(a que demorar mais) 
 * for resolvida receberemos a resposta.

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(10);
    },5000);
});

const p2 = Promise.resolve(20);

const p3 = new Promise((resolve,reject)=>{
    resolve(30);
});
//metodo all do objeto promise
Promise.all([p1,p2,p3]).then((values)=> console.log(values));  */

/*** Funções Assíncronas|(Async functions)
 * podemos criar funções assíncronas com a palavra reservada async;
 * 
 * elas retornam uma promessa, que se retornar algo é resolvida, se 
 * der alguma exeption a promessa é rejeitada.

async function somar(a,b){
    return a + b;
}
somar(2,4).then(value => console.log(value));
console.log(somar(11,6)); */

/*** Await
 * nas async functions, podemos determinar uma instrução awit
 * que vai esperar uma promise ser resolvida, para apresentar os resultados

function somaComDelay(a,b){
    return new Promise(resolve=>{
        setTimeout(function(){
            resolve(a+b);
        },4000);
    })
}
async function resSoma(a,b,c){
    let x = somaComDelay(a,b);
    let y = c;
    return await x + y;
} 
resSoma(1,2,3).then(value=>console.log(value));
console.log(resSoma(2,5,9));
//resSoma(2,5,9).then(value=>console.log(value)); */

/**** Generators 
 * generators funcionam semelhantes as promises
 * onde ações podem ser pausadas e continuadas depois
 * caracterizadas pelo function* e yield,
 * o yield pode salvar o estado da variável
*/
function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criaId = criadorId();
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());