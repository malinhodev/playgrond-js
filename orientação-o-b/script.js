//exemplo 01
/********************* 
const cachorro = {
    raca: "sem raca!",
    ruivar: function() {
        console.log("ahuuuuuuuuuuuu");
    },
    rosnar: function() {
        console.log("rsgrsggg");
    },
    latir: function(){
        console.log("au,au,au");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        console.log("A raça é: " + this.raca);
    }
}

cachorro.latir();
cachorro.rosnar();
cachorro.ruivar();
console.log(cachorro.raca);
cachorro.setRaca("pastor alemão");
console.log(cachorro.raca);
cachorro.getRaca();*/

//prototypes
/******************************* 
const pessoa = {
    maos: 2,
}

//console.log(Object.getPrototypeOf(pessoa));
//console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

//console.log(pessoa.hasOwnProperty('maos'));
//******************************* 

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));*/

//classes / constutor
/************************** 
class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au Au");
    }
}

//Cachorro.prototype.patas = 4;//pode ser assim (alteravel).
let patas = Symbol();
Cachorro.prototype[patas] = 4;//podemos utilizar o symbol para nunca alterar

let labrador = new Cachorro("labrador", "amarelo");

console.log(labrador);

//console.log(labrador.patas);
//console.log(Cachorro.prototype[patas]);//assim ascessamos o symbol
console.log(labrador[patas]);//ou assim


labrador.latir();*/

/************************** */
//->SYMBOL : PROPRIEDADE DE OBJETOS
//SERVE PARA DECLARAR PROPRIEDADES UNICAS, QUE NÃO PODEM 
//SER ALTERADAS E NEM CRIADAS 2 VEZES

/*************GETTERS * SETTERS************* 
//Get: serve para resgatar o valor de uma propriedade
//Set: serve para alterar o valor de uma propriedade

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au Au");
    }

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro('pastor alemão', 'sem cor');

//console.log(pastor);

pastor.setCor = 'marrom e preto';

console.log(pastor.getCor);*/

/************** HERANÇA-(INHERITANCE IN ENGLISH)************ 
//Uma classe pode herdar propriedades de outra classe por herança
//para isso utilizamos: extends
//para setar as propriedades da classe pai utilizamos: super

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let galinha = new Mamifero(2);
console.log(galinha.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca){
        super(patas,patas);
        this.raca = raca;
    }
    latir(){
        console.log("Au au");
    }
}

let pug = new Cachorro(4,"pug");
console.log(pug.patas);
pug.latir();*/

/************* instaceof ************* 
//Podemos verificar quem é o pai do obj. utilizando: instaceof
//resumindo é o typof dos objetos

console.log(new Cachorro instanceof Mamifero);//true pois cachorro é uma instacia de mamifero
*/

/*======== Propriedades do Objeto=========*/
//As propriedades são as caracteriticas dos objetos
// EX: cor, portas, nome, marca e etc...
//Podemos iniciar um objeto com várias propriedades
//E acessa-las para resgatar os seus valores

let carro = {
    tipo: "suv",
    rodas: 4,
    opicionais: ["teto solar", "blindagem", "ar condicionado"],
    portas: 4,
    cor: 'verde',
    revisado: true,
    "tem modo eco": false,//declaração com mais de uma palavra.
    //metodos/funções
    frear: function() {
        console.log("tiuuuuuuuuuuuu");
    },
    acelerar: function(){
        console.log("vruumm vruuummm");
    },
    //metodos ES6 não precisa => :function
    getCor(){
        console.log("A cor do carro será: " + this.cor);
    },
    setCor(novaCor){
        this.cor = novaCor;
    },
    //objeto dentro de objeto
    vemDeFabrica: {
        painelMultimidia: true,
        airBags: true,
        cintoDeSegurança: true,
        interior: ['couro', 'borracha', 'tecido'],
        corInterior: 'cinza',
    }

}

console.log(carro.portas);
console.log(carro['portas']);

//podemos criar condições

if(carro.portas > 2){
    console.log("este carro tem mais de duas portas!!!")
}


       //Tipos de de dados e propriedades
//as propriedades aceitam qualquer tipo de dados do javascript
//booleanos, numbers, strings e arrays

console.log(carro.revisado);
console.log(carro.opicionais);

for(let i = 0; i < carro.opicionais.length; i++) {
    console.log(carro.opicionais[i]);
}

if(carro.revisado == true){
    console.log("fazer revisão após 10.000km rodados.");
}
   
console.log(carro["tem modo eco"]);//Evocando Propriedades com mais de uma palavra

//Acessando propriedades por variáveis
let a = 'cor';//cor é uma proriedade do obj. carro.
console.log(carro[a]);//ira imprimir o valor da propriedade cor do obj carro.

 //carro.cor = "vermelho";
 //console.log(carro[a]);
carro.frear();//evocando=chamando  metodo=função

carro.setCor("vermelho");//evocando=chamando metodo e setando cor
carro.getCor();

console.log(carro.vemDeFabrica.airBags); //evocando=chamando objeto dentro de objeto
console.log(carro.vemDeFabrica.interior[0]);//indice do array do obj dentro do obj
console.log(carro.vemDeFabrica.corInterior);
    //criando nova propriedade para objeto carro
carro.calotas = true;

carro.virar = function(direção) {
    console.log("virando para a: " + direção);
};//OBS: não da para usar (es6 function) fora do escopo do obj

carro.virar('esquerda');
//carro.virar('direita');
//console.log(carro.calotas);

delete carro.rodas;//deletando propriedade rodas
//deletar propriedades do obj não é uma boa prática!