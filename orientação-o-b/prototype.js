/****
 * O que são prototypes?
 *javascript é uma linguagem considerada baseada em prototypes
  todos os objetos de JS herdam propriedades e métodos do seu prototype
  como vimos nos casos dos built in object
  a ideia central é que: todo objeto tenha um pai ( ou seja, um prototype)

  As funções além de suas props também vem com a prop prototype criada

  Recebemos um objeto vazio, que pode ter propriedades e metodos adicionados
 
//ex:
function abc() {
    console.log('teste');
}

abc();
console.log(abc.prototype);
console.log(typeof abc.prototype); */

function Carro (marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

//adicionando varios itens a um prototypee
Carro.prototype = {
    portas: 4,
    virar(direcao){
        console.log(`${this.marca} virou a: ` + direcao);
    }
}
//inserindo propriedades no prototype
Carro.prototype.aro = 20;
Carro.prototype.rodas = 4;
Carro.prototype.ligar = function() {
    console.log('o carro ligou!');
}//OBS: ESSE TEM QUE VIR SEMPRE ANTES!
let bmw = new Carro('bmw', 100000);

console.log(bmw);//imprime somente o que esta no escopo do obj.
console.log(bmw.rodas);//porém podemos acessar as propriedades que estão no prototype
bmw.ligar();//são acessadas por herança.
console.log(bmw.portas);
bmw.virar('esquerda');
console.log(bmw.aro);

let ferrari = new Carro('ferrari', 200000);

Carro.prototype.tetoSolar = true;
Carro.prototype.abrirTetoSolar = function() {
    console.log("teto solar aberto");
}

console.log(bmw.tetoSolar);
ferrari.abrirTetoSolar();
ferrari.virar('direita');//podemos utilizar novos prototypes em novos objetos criados

/***props do obj x props do prototype */
//A ordem de acesso é: primeiro o objeto depois o prototype
//As propriedades podem coexistir

/***Prototype igual a objeto */

Carro.prototype.cor = 'branco';

let fusca = new Carro('vw', 10000);
console.log(fusca.cor);

fusca.cor = 'rosa';
console.log(fusca.cor);

//verificando props de um prototype

console.log(fusca.hasOwnProperty('marca'));//true pois existe essa propriedade no objeto.
console.log(fusca.constructor.prototype.hasOwnProperty('marca'));//false pois não foi criado essa prop no prototype. 