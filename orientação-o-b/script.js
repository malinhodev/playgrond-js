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

const pessoa = {
    maos: 2,
}

//console.log(Object.getPrototypeOf(pessoa));
//console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

//console.log(pessoa.hasOwnProperty('maos'));
//******************************* */

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));



