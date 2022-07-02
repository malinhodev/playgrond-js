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
/********** 
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

decrementaPar(10);*/


//RESPOSTAS OBJETOS E ARRAY (JSON)!!!!!!!!!!!!!

/************** 
//exerc: 27
let arr = ['jose', 50, true, 00, false];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

//exerc: 28
let arr = ['jose', 50, true, 00];
let arr2 = [2,3];

console.log(arr.length);
console.log(arr2.length);

//exerc: 29
let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}
delete onibus.rodas;  

console.log(onibus);

onibus.janelas = 20;

console.log(onibus.janelas);

//exerc: 30

let nomes = ["joao", "daniel", "marleson", "marlon"];
    if(nomes.includes("marlon")){
        console.log('sim eu existo!!!');
    } 

//exerc: 31
let frutas = ["banana", "maca", "uva", ];
let numeros = [00,25,96,789,2,7,9,1.050];
let bool = [true,false,false,true,true];

function verificaQuantidade(i) {
    if(i.length >= 5){
        console.log("muitos elementos!")
        console.log(i.length);
    } else {
        console.log("puocos elementos")
        console.log(i.length);
    }
}

verificaQuantidade(frutas);
verificaQuantidade(numeros);
verificaQuantidade(bool);

//exerc: 32
//professor
let nomes = ['marlon', 'maria', 'josé', 'maycon', 'joão'];
for(let i =0; i < nomes.length; i++) {
    console.log(nomes[i]);
}*/

/****
//eu
nomes.forEach(nome => {
    console.log("o nome é: " + nome);
}); 
// 33
let gato = {
    "raca": "sianes",
    "cor": "marrom",
    "olhos": "azuis"
}



console.log(gato.raca);
console.log(gato.cor);
console.log(gato.olhos);

// 34

let frase = "o homem que tem a sua casa ele fala a qualquer hora da noite";

let nomes = frase.split(" ");
for(let i =0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// 35 calculadora

const calculadora = {
    somar: function(a,b){
        return a + b;   
     },
     
     subtrair: function(a,b){
         return a - b;
     },
     
     dividir: function (a,b){
          return a / b;
     },
     
     multiplica: function(a,b){
          return  a * b;
     }
}



console.log(calculadora.somar(2,3));
console.log(calculadora.subtrair(10,3));
console.log(calculadora.dividir(10,2));
console.log(calculadora.multiplica(50,3));*/


/****************orientação a objetos************** 

//36
//MINHA RESPOSTA não foi satisfatoria
class Conta {
    constructor(saldo) {
        this.saldo = saldo;
        
    }

    get getSaldo(){
        return this.saldo;
    }

    set setSaldo(saldo){
        this.saldo = saldo,
        console.log('foi depositatdo: ' + saldo)
    }
}

let minhaConta = new Conta (0);

console.log(minhaConta);
minhaConta.setSaldo = 500;
console.log(minhaConta.getSaldo);

//PROFESSOR


class Conta {
    constructor(saldo) {
        this.saldo = saldo;
        
    }
    depositar(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }

}

let conta = new Conta (1000);
conta.depositar(1000);
console.log(conta.saldo);
conta.saque(500);
console.log(conta.saldo);*/

/***********************
// 37 criando carrinho compras
//professor
class Carrinho {
    constructor(itens, qtd, valorTotal) {
      this.itens = itens;
      this.qtd = qtd;
      this.valorTotal = valorTotal;
    }
  
    addItem(item) {
  
      let contador = 0;
  
      for(let itemCarrinho in this.itens) {
        if(this.itens[itemCarrinho].id == item.id) {
          this.itens[itemCarrinho].qtd += item.qtd;
          contador = 1;
        }
      }
  
      if(contador == 0) {
        this.itens.push(item);
      }
  
      this.qtd += item.qtd;
      this.valorTotal += item.preco * item.qtd;
  
    }
  
    removeItem(item) {
  
      for(let itemCarrinho in this.itens) {
        if(this.itens[itemCarrinho].id == item.id) {
          
          let obj = this.itens[itemCarrinho];
          let index = this.itens.findIndex(function(obj) { return obj.id == item.id});
  
          this.qtd -= this.itens[itemCarrinho].qtd;
          this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
  
          this.itens.splice(index, 1);
  
        }
      }
    }
  
  }
  
  let carrinho = new Carrinho([
    {
      id: 01,
      nome: "Camisa",
      qtd: 1,
      preco: 20
    },
    {
      id: 02,
      nome: "Calça",
      qtd: 2,
      preco: 50
    }
  ], 3, 120);
  
  console.log(carrinho);
  
  carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco: 20});
  
  console.log(carrinho);
  
  carrinho.addItem({id:03, nome:"Boné", qtd:1, preco: 15});
  
  console.log(carrinho);
  
  carrinho.removeItem({id: 01, nome: "Camisa", qtd: 1, preco: 20});
  
  console.log(carrinho); */

  /********************************************** 
  //38
  // professor

  class Entregar {
    constructor(nome,rua,bairro,cidade,estado){
        this.nome = nome;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novoNome(novoNome){
        this.nome = novoNome;
    }

    set novoRua(novoRua){
        this.rua = novoRua;
    }

    set novoBairro(novoBairro){
        this.bairro =novoBairro;
    }

    set novoCidade(novoCidade){
        this.cidade = novoCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }

  }

let endereço = new Entregar ('marlon','raimundo pinheiro bastos', 'olavo oliveira', 'fortaleza', 'CE');

console.log(endereço);

endereço.novoRua = 'raimundo rocha de  menezes';

console.log(endereço);*/

/* 39 

class Carro {
    constructor(marca,modelo,cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.tanque = 20;
        this.pneus = 4;
    }

    dirigir(destino){
        console.log('foi para ' +destino);
        this.tanque -= 1;
    }

    abastecer = function(){
        this.tanque += 10;
    }
}

let celta = new Carro('chevrolet','celta','vermelho');
console.log(celta);

celta.dirigir('mercantil');
console.log(celta.tanque);

celta.abastecer();
console.log(celta.tanque);
celta.dirigir('mercantil');
celta.dirigir('casa');
celta.dirigir('mercantil');
celta.dirigir('casa');
celta.dirigir('trabalho');
celta.dirigir('academia');
celta.dirigir('casa');
celta.dirigir('trabalho');
celta.dirigir('mercantil');

console.log(celta.tanque);
celta.dirigir('casa');
celta.dirigir('casa');
console.log(celta.tanque);*/

/* exerc: 40 */

class Conta {
    constructor(contaCC,contaCP){
        
        this.contaCC = 0;
        this.contaCP = 0;
        this.jurosCP = 0.5;
    }

    saldoCC(){
        console.log("seu saldo é: " + this.contaCC +"R$.");
    }

    saldoCP(){
        this.saldo = this.contaCP * this.jurosCP / 100;
        this.valorTotal = this.saldo + this.contaCP;
        console.log("Poupança: "+ this.valorTotal +"R$.");
    }

    sacarCC(valor){
        this.valor = valor;
        this.saque = valor;
        if(this.contaCC >= valor){
            this.contaCC -= this.saque;
            console.log("você sacou: "+ this.saque + " R$ novo saldo conta corrente: "+ this.contaCC+" R$.");
        }else{
            console.log("saldo insuficiente!");
        }
        this.valor = 0;
    }

    sacarCP(valor){
        this.valor = valor;
        this.saque = valor;
        if(this.contaCP >= valor){
            this.contaCP -= this.saque;
            console.log("você sacou: "+ this.saque + " R$ novo saldo conta Poupança: "+ this.contaCP+" R$.");
        }else{
            console.log("saldo da poupança insuficiente!");
        }
        this.valor = 0;
    }

    transferirParaCP(v){
           this.v = v;
           let val = v;
        if(this.contaCC >= val){
             this.contaCC -= val;
             this.contaCP += val;
            console.log('transferencia concluida');
            console.log('saldo conta poupança: '+this.contaCP);
        }else{
            console.log('saldo insuficiente!');
        }
        this.v = 0;
    }

    transferirParaCC(v){
        this.v = v;
        let val = v;
     if(this.contaCP >= val){
          this.contaCP -= val;
          this.contaCC += val;
         console.log('transferencia concluida');
         console.log('saldo da conta : '+this.contaCP);
     }else{
         console.log('saldo conta poupança insuficiente!');
     }
     this.v = 0;
 }
 
    depositarCC(v){
        this.contaCC += v;
    }

    depositarCP(v){
        this.contaCP += v;
    }
}

class ContaEspecial extends Conta{
    constructor(contaCC,contaCP){
        super(contaCC,contaCP)
        this.jurosCP = 1;
    }
    
}

let minhaConta = new Conta;
let contaespecial = new ContaEspecial;



/***/console.log(minhaConta);



/***/console.log(contaespecial);