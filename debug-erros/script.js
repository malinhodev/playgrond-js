/*************** 
"use strict"

opa = 'teste';*/

/* debug:console.log */
//usar somente em modo de produção
//após isso deletar todos os console.log!

/* debug:debugger */
//funcionalidade que para o código quando atinge a linha de bugger.

/* tratamento de input por função 

function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log('Por favor, passe só numeros para o programa');
    }else{
        return number;
    }
}

checarNumero(5);
checarNumero('oi');*/

/* exeption 
//podemos criar erros no programa, caso condição não seja atendida.
//pórem as exeptions abortam o programa, só geram erro.
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('o parametro nome precisa ser uma string');
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("marlon");
saudacao(5);*/

/* try e catch */
//O bloco try e catch, vai tentar executar um código, caso não consiga
//ele pode retornar o erro que esse código gerou, muito útil para debug.

try{
    //
    throw new Error("Deu um erro no código.");
} catch(e) {
    console.log(e.name + ": " + e.message);
}

//finally
//é executado independente do resultado do try/catch
//e pode existir com try e catch ou apenas try.

try{
    //
    
} catch(e) {
    console.log("Algo de errado: " + e);
}finally{
    console.log('Executou');
}

/* Assertions */
//verificações no programa, que são utilizadas para assegurar
//que tudo ocorra de forma esperada;

let arr = [1,2,3,4,5,];
let arr2 = [];

function iterarArray(par) {
    if(par.length == 0){
        throw new Error('o array precisa ter elementos');
    }else{
        for(let i = 0; i < par.length; i++){
            console.log(i);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);