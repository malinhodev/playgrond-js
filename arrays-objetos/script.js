/************************
let obj = {
    nome: 'marlon',
    idade: 29,
    cnh: true,
    profissao: 'garçom',
    ademario: function(){
        console.log('o homem que tem a sua casa...')
    }

};

console.log(obj.cnh);
console.log(obj.nome.length);
console.log(obj.idade);
obj.ademario();

//deletando uma chave do objeto
delete obj.cnh;
//adicionando nova chave
obj.casado = true;

console.log(obj);***/

/********copiando propiedades**********************/
let carro = {
    portas: 4,
    portamalas: '200lt',
    motor: '2.0',
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
    vidroautomatico: true,
    motor: '4.0'
}


let completo = Object.assign(carro,adicionais);


console.log(completo);