/*** sintaxe do ES6
 * 
 * As classes na verdade são funções, ou seja, muda a forma de 
 * nós escrevermos ma o JS  utiliza  técnicas que utilizamos antes
 * tornando esse método um syntatic sugar.
 * */

class Humano {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`o ${this.nome} falou`);
    }
    set mudarNome(novoNome){
        this.nome = "Sr. " + novoNome;
   }
    get receberNome(){
        return "o nome da pessoa é: " + this.nome;
   }
}

console.log(typeof Humano);//é uma function

let marlon  = new Humano('Marlon', 29);
console.log(marlon);

//classes anônimas

let Pessoa = class{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return "o nome da pessoa é: " + this.nome;
    }

}

let matheus = new Pessoa('matheus', 29);
console.log(matheus.nomeDaPessoa());

//Prototype methods => são métodos que já existem na class,
//por exemplo os getters e setters.

marlon.mudarNome = "maycon";
console.log(marlon.nome);
console.log(marlon.receberNome);

/* Métodos estáticos  */
//Métodos que só funcionam caso você utilize o nome da classe
//ou seja, você não cria objeto para usar eles
//utilizado muito com helper

class Calc {
    static soma(a,b){
        return a + b;
    }
}
console.log(Calc.soma(3,4));

/* Subclasses (extends|super)*/
//Uma forma de criar herança com as classes, utilizando a 
//palavra extends e super, uma clase herda as propriedades de outra.

class Engenheiro extends Humano{
    constructor(nome,idade, espec){
        super(nome,idade);
        this.profissao = 'engenheiro';
        this.especialização = espec;
    }
}
let joao = new Engenheiro('joão', 25, 'civil');
console.log(joao)
joao.falar();

