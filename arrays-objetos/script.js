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
//retorna um array com o valor de cada chave
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
//METOSDOS DE ARRAY!!!!!!!

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
/********!!!forEach!!!*****************
let nomes = ['marlon', 'maria', 'josé', 'maycon'];

nomes.forEach(nome => {
    console.log("o nome é: " + nome);
});
***/


/********includes***************
//verifica se um array tem um determinado elemento.

let carros = ['bmw', 'audi', 'vw', 'fiat'];

console.log(carros.includes('fiat'));//retorna true


*****/

/***********reverse************
//inverte um array

arr = [1,2,3,4,5,6];

console.log(arr.reverse());*****/


//metodos string!!!

/**********TRIM************
//remove espaços
let nome = '    matheus';

let nomeCorrigido = nome.trim();

console.log(nomeCorrigido);//sem espaços
console.log(nome);**/

/**********padStart*************
//INSERIR CARACTERES ANTES DA STRING

let sku = "36";//tem que ser string

console.log(sku.padStart(6, "0"));//primeiro parametro é o tanto(limite) de caracteres
*/

/******************split******************** 
//divide uma string por um separador, e retorna um array

let frase = "testando o metodo split";

console.log(frase.split(" "));*/

/******************join******************
//junta elementos em um array em uma frase, por meio de um separardor
//contrario do split paga um array e transforma em uma string
let frase = 'testando o metodo join!'

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);
console.log(palavras.join(" "));**/

/*****************repeat*****************
//repete uma string

let palavra = " repetir";

console.log(palavra.repeat(20));****/

/*****************!!rest operator!!****************
//uma forma de uma função receber indefinidos parâmetros
//o operador rest vai virar um array
//o parametro e definido por: ...nome

let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num2);
console.log('pausa');
imprimirNumeros(num2,num3);
console.log('pausa');
imprimirNumeros(2,6,4,7,8,8,9,6,3,4,5,1);*/

/******************Destructuring em objetos*********************
//podemos defenir variáveis com propriedades do objeto com uma notação diferente, chamdada destructuring
//cria variáveis apartir de um objeto


let carro = {
    portas: 4,
    portamalas: '200lt',
    motor: '2.0',
}

const {portas: vportas, portamalas: vportamalas, motor: vmotor} = carro;//objetos em chaves

console.log(vmotor);
console.log(vportamalas);
console.log(vportas); */

/******************Destructuring em arrays********************* 
//podemos defenir variaveis com os valores do array utilizando o destructuring
//cria variáveis apartir de um array

let numeros = [2,4,5,8];

let [num1, num2, num3, num4] = numeros //array em conchetes

console.log(num1);
console.log(num2);
console.log(num4);*/


