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

/************** HERANÇA-(INHERITANCE IN ENGLISH)************ */
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
pug.latir();

/************* instaceof ************* */
//Podemos verificar quem é o pai do obj. utilizando: instaceof
//resumindo é o typof dos objetos

console.log(new Cachorro instanceof Mamifero);//true pois cachorro é uma instacia de mamifero

