
/* ====== Prototype Chain ====== */
//É a maneira default da linguagem de fazer herança
//Podemos instanciar objetos no prototype de uotros, criando herança

function Veiculo() {
    this.carenagem = 'aço';
}
//colocando no prototype
Veiculo.prototype.ligar = function() {
    console.log("o veiculo ligou");
}

function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50;
}

function Carro() {
    this.pneus = 4;
}

function Onibus() {
    this.passageiros = 77;
}
//colocando no prototype 
Trem.prototype = new Veiculo();
//Copiando prototype
Carro.prototype = Veiculo.prototype;
//construtor temmporário por função
//copyPrototype(Onibus, Veiculo);

//Onibus.ligar();

let trembala = new Trem('trem bala');

console.log(trembala.tipo);

trembala.ligar();

let ferrari = new Carro();
ferrari.ligar();
//checando chain (herança/prototype)
/**
console.log(trembala instanceof Trem);
console.log(ferrari instanceof Carro);

console.log(trembala instanceof Veiculo);
console.log(ferrari instanceof Veiculo);

console.log(trembala instanceof Object);
console.log(ferrari instanceof Object); */

/* Construtor temporario */
// Caso precise alterar o prototype de uma classe pai,
// recorremos a essa solução para alterar o prototype.

let F = function() {}
F.prototype = Veiculo.prototype;

let uno = new F();
F.prototype.ligar = function() {
    console.log('o carro ligou');
}
uno.ligar();


/* Isolando uma herança em uma função | ainda não funcionou
//Para reutilizar a herança, podemos utilizar uma função
function copyPrototype(filho, pai) {
    let F = function() {};
    F.prototype = pai.prototype;
    filho.prototype = new F();
} */

