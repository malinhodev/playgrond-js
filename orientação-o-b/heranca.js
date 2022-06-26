/* ====== Prototype Chain ====== */
//É a maneira default da linguagem de fazer herança
//Podemos instanciar objetos no prototype de uotros, criando herança

function Veiculo() {
    this.carenagem = 'aço';
    this.ligar = function() {
        console.log("o veiculo ligou");
    }
}

function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50;
}

function Carro() {
    this.pneus = 4;
}
//colocando no prototype 
Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let trembala = new Trem('trem bala');

console.log(trembala.tipo);

trembala.ligar();

let ferrari = new Carro();
ferrari.ligar();
//checando chain (herança/prototype)
console.log(trembala instanceof Trem);
console.log(ferrari instanceof Carro);

console.log(trembala instanceof Veiculo);
console.log(ferrari instanceof Veiculo);

console.log(trembala instanceof Object);
console.log(ferrari instanceof Object);
