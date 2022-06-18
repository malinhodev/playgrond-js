/*********

function imprimirNoConsole(){
    console.log("olá mundo!");
}

imprimirNoConsole();

function imprimirNumero(um) {
    console.log("o numero é " +um );
}

imprimirNumero(2);
imprimirNumero(26);
imprimirNumero(2/2);
imprimirNumero('marlon');
imprimirNumero('marlon'+ ' e ' +'bianca');
imprimirNumero(Math.pow(5,5));

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

 *************/
/***** 
function multiplicar(x,y,z) {
   return x * y * z;
}
console.log(multiplicar(2,3,5));
********/

//função pode dirigir  
/**** 

function podeDirigir(idade,cnh) {
    if(idade >= 18 && cnh == true ) {
        console.log('pode dirigir!');
        
    } else if(idade >= 18 && cnh == false){
        console.log('não pode dirigir, porém hapito para emitir CNH!');
    } else{
        console.log('não pode dirigir!');
    }
}

console.log(podeDirigir(19,1));
console.log(podeDirigir(23,false));
console.log(podeDirigir(17,0));
console.log(podeDirigir(32,1));

****/ 
/***********declarando no escopo 
let n = 320;
    n = 500
function exibir(){
    let n = 250;
        n = 100
    console.log(n);
}

exibir();
console.log(n);
**********/
/********* *
let x = 20;

if(x > 5) {
    let x = 12;
    x++;
    console.log(x);
}

console.log(x);
**********/

/*************** 
let k = 10;

function multiplicar(x,y) {
    let k = x * y;

    if( k > 10) {
        let k = 0;
        k++;
        console.log(k);
    }
    console.log(k);
}

console.log(k);

multiplicar(4,3);

**************/
/***************arrow function 
let consoleTeste = () => {
    console.log('olá mundo!');
}

consoleTeste();

let myName = (name) => {
    console.log(name);
}

myName('Marlon'); 

const multiplicar = (a,b) => {
    return a * b;
}

console.log(multiplicar(2,2))

const multiplicar2 = a =>  a * 2;

console.log(multiplicar2(3)); */

/********** 
function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("esta função precisa dos dois parametros!");
    } else {
        return a + b;
    }
}
console.log(soma(2,5));
console.log(soma(5));

function saudacao(nome, idade) {
    if(idade === undefined){
        console.log("olá "+ nome +"!");
    } else {
        console.log("olá "+ nome +" você tem "+ idade + " anos.");
    }
}

console.log(saudacao('marlon'));
console.log(saudacao("bianca", 7));

*/
/***********argumento default******** 

function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));*/
/***********função closure******** 

function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));

//exemplo 2
function contador(i) {
    let cont = i;
    let somarContador = () => {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();*/

/******função recursion***** */



/***********== CALL ==************ */
// Call é um prototype (método/nativo) da função
let a = {
    nome: 'matheus',
    dizerNome() {
        console.log("O nome é: " +this.nome)
    },
}

let b = {
    nome: 'joão',
}

a.dizerNome();

a.dizerNome.call(b);

