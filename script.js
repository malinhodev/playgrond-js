/** *exe. 04
console.log("marlon" == "marlon" && 13 <= 10);
console.log("marlon" == "marlon" || 13 <= 10);
console.log(!("marlon" == "marlon"));

*/
/**exe. 05 
console.log('marlon' * 2);
*/

/**variaveis 1 
let nome = "marlon", sobrenome = "ferreira";

console.log(nome);
console.log(`meu nome é ${nome}`);
console.log(`meu nome é `+ nome);


nome = 5

console.log(nome * nome);

console.log(nome,sobrenome);

console.log("meu sobrenome é "+ sobrenome);

*//*** Math (matemática) função nativa
let maior = Math.max(6,45,67,58,9);

console.log(maior);

let menor = Math.min(6,45,67,58,9);

console.log(menor);

let arredondar = Math.round(1.487825);

console.log(arredondar);

let arredondarPraCima = Math.ceil(2.387825);

console.log(arredondarPraCima);
    */
/*** 
const nome = 'marlon';

if(nome == 'marlon') {
    console.log(" ola marlon!");
} else {
    console.log(" Não te conheço!");
}
*/


//console.log(Math.pow(2,5));
/****
let condutor = 20;
let cnh = false;

if(condutor >= 18 && cnh == true ) {
    console.log('pode dirigir!');
    
} else if(condutor >= 18 && cnh == false){
    console.log('não pode dirigir, porém hapito para emitir CNH!');
} else{
    console.log('não pode dirigir!');
}
 */
/************WHILE********* 
let i = 0;

while(i <= 10) {
    console.log(i);
    i = i + 1;
  }
  */
 /************FOR******** 

 for (let i = 100; i >= 50; i-- ) {
     console.log(i);

 }

 */
/*********imprimindo par e ímpar no looping*****
for(i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`o numero ${i} é par`);
    }else{
        console.log(`o numero ${i} é ímpar`);
    }
}
 */

/*********numero primo**** */
let num = 41;
let divisoes = 0;

for (i = 1; i <= Number; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`o número ${num} é primo`);
} else {
    console.log(`o número ${num} não é primo`);
}
