"use strict";

let a=prompt("Ingrese un numero");

let multiplyTable =function (a){
 let tabla="";
 for (let i=1, i<10 i++){
    tabla+="${a}*${i} = ${a*i}\n";
 }
    return tabla;
}
let result =multiplyTable(a);
alert(result);




 