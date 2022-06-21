/*************** 
"use strict"

opa = 'teste';*/

try{
    //
    throw new Error("Deu um erro no código.");
} catch(e) {
    console.log(e.name + ": " + e.message);
}