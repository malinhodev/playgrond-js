//As expressões regulares no JS são um tipo de objeto
//podemos instanciar de duas formas
//New RegExp(); OU /.../;
const reg1 = new RegExp('bola');
const reg2 = /carro/;//modo mais usado
//Depois da definição do padrão por meio da regeex
//utilizamos o método teste() para verificar se o padrão é retornado
//com isso vamos receber de resposta true or false.
let text = 'carro novo!';

console.log(reg1.test("tem bola?"));
console.log(reg1.test("não tem"));
console.log(reg2.test("tem carro?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));
console.log(/quadrado/.test("não tem quadrado?"));