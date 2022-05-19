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

/********copiando propiedades********************
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


console.log(completo);**/

/********object keys*********************

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3,

}
//retorna um array
console.log(Object.keys(obj));*/

/********mutação********************

let pessoa = {
    nome: 'matheus',
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: 'matheus',
}

console.log(pessoa == pessoa2);//true
console.log(pessoa3 == pessoa2);//false
console.log(pessoa3 == pessoa);//false

//muda o valor nos 2 (pessoa,pessoa2)
pessoa.nome = 'maria';

console.log(pessoa2);
console.log(pessoa);**/

/********!!!!!!!!loop em arrays!!!!!!!*******

let nomes = ['marlon', 'maria', 'josé', 'maycon', 1, false];

for(let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i]);
}
***************/

/********PUSH, POP*****************
//PUSH = adiciona no fim do array
//POP = remove no fim do array

let nomes = ['marlon', 'maria', 'josé', 'maycon'];

let elementoRemovido = nomes.pop();

console.log(elementoRemovido);
console.log(nomes);

nomes.push('pedro');

console.log(nomes);***/

/********SHIFT, UNSHIFT*****************
//SHIFT = remove no inicio do array
//UNSHIFT = adiciona no inicio do array

let carros = ['bmw', 'audi', 'vw', 'fiat'];

let removePrimeroCarro = carros.shift();

console.log(removePrimeroCarro);
console.log(carros);

adicionaCarro = carros.unshift('toyota');
console.log(carros);***/


/********indexOf, lastIndexOf************
//indexOf() = encontra o indice de um determinado elemento
//lastIndexOf() = encontra o último indice de um elemento

let nums = [5,6,2,4,9,6,3,2];
 
console.log(nums.indexOf(2));//esta no induce 2
console.log(nums.lastIndexOf(2));//esta no indice 7

********/



/********!!!slice!!!***************
//retorna um array apartir de outro array, oarray reornado é determinado 
//pelos parâmetros que são os indices de inicio e fim do novo array.
let nums = [5,6,2,5,9,6,3,2];

console.log(nums.slice(3,4));//vai pegar o indice 3 = 5
console.log(nums.slice(2,6));//vai pegar os indices 2,3,4,5 = 2,5,9,6
console.log(nums.slice(4));//se não colocar o segundo indice ele vai pegar até o final
console.log(nums.slice(-2));//vai pegar os 2 ultimos do array = 3,2
console.log(nums.slice(5,-1));//vai pegar do indice 5 ate o final -1 = 6,3
    *****/
/********!!!forEach!!!********************/
let nomes = ['marlon', 'maria', 'josé', 'maycon'];

nomes.forEach(nome => {
    console.log("o nome é: " + nome);
});



/********includes********************/
//verifica se um array tem um dterminado elemento.

let carros = ['bmw', 'audi', 'vw', 'fiat'];

console.log(carros.includes('fiat'));//retorna true




/********PUSH, POP********************/


