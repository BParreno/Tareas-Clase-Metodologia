"use strict";

//Forma mas comun
function sum (a,b) {
    return a+b;
}
//Expresion de funcion
let sumExp =function (a,b){
    return a+b;
}
//Funcion flecha
let sumFlecha =(a,b) => a+b;
//Llamar a la funcion o invocarla
let result = sumExp (2,6);//8
alert(result);

