/*************** 
"use strict"

opa = 'teste';*/

/* debug:console.log */
//usar somente em modo de produção
//após isso deletar todos os console.log!

/* debug:debugger */
//funcionalidade que para o código quando atinge a linha de bugger.

/* tratamento de input por função */

function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log('Por favor, passe só numeros para o programa');
    }else{
        return number;
    }
}

checarNumero(5);
checarNumero('oi');

/* exeption */
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
saudacao(5);



try{
    //
    throw new Error("Deu um erro no código.");
} catch(e) {
    console.log(e.name + ": " + e.message);
}
