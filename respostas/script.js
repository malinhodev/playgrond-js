/***

function saudacao() {
    console.log('hello word!');
}

saudacao();

function idade (i){
    console.log(`você tem ${i} anos de idade`)
}

idade(23);

function soma ( a, b) {
    return  a + b;
}

console.log(soma(2,3));

function aleatorio(min,max) {
    return Math.random() * (max - min) + min;

}

console.log(aleatorio(2,3));
console.log(aleatorio(40,50));
console.log(aleatorio(20,22));

function aleatorio2(num) {
    return Math.floor(Math.random() * num )+ 1;

}

console.log(aleatorio2(3));
console.log(aleatorio2(40));
console.log(aleatorio2(20));

function autoEscola (idade) {
    if(idade >= 18){
        console.log('vem se matricular na auto escola');
    } else {
        console.log('Nâo pode se matricular na auto escola!');
    }
}

autoEscola(16);
autoEscola(18);
autoEscola(35);

// minha forma kkk
function type (par) {
    return typeof(par);
}

function declarar() {
    console.log('Essa variavel é '+ type('marlon'));
}
declarar();

function declarar2() {
    console.log('Essa variavel é '+ type(2));
}
declarar2();

function declarar3() {
    console.log('Essa variavel é '+ type(true));
}
declarar3();

//melhor forma ex. professor
function verificaTipoDeDado(dado) {

    if(typeof dado === 'string') {
      console.log("Este dado é uma string");
    } else if(typeof dado === 'number') {
      console.log("Este dado é um number");
    } else if(typeof dado === 'boolean') {
      console.log("Este dado é um boolean");
    }
  
  }
  
  verificaTipoDeDado(true);
  verificaTipoDeDado(23);
  verificaTipoDeDado("teste");

function retornaPositivo (i) {
    console.log(Math.abs(i));
}
retornaPositivo(-3);
retornaPositivo(53);
retornaPositivo(-12.5);*/


//minha resposta
/** 
function limteCaracteres (par){
    if(par.length > 10){
        console.log("texto muito longo");
    }else{
        console.log("texto dentro do limite");
    }
    //professor
    console.log(par.length);
}

limteCaracteres("123456789");
limteCaracteres("ola mundo!");
limteCaracteres("outro texto para testar");*/

//minha resposta
/*
function potencia (a,b) {
    return Math.pow(a,b);
    //sintax alternativa
    //return a ** b;
}

console.log(potencia(3,2));
console.log(potencia(4,2));*/

function decrementaPar(i) {
    for( i <= 100; i--;) {
        if(i % 2 == 0){
            console.log(`o numero ${i} é par`);
        }else{
            console.log(i);
            //console.log(`o numero ${i} é ímpar`);
        }
        
}

}

decrementaPar(10);
