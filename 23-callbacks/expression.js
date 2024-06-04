"use strict";

function operation(op, fnSum, fnRest){
let a = Number(prompt("Ingresar el valor de a"));
let b = Number(prompt("Ingresar el valor de b"));
if(op === "suma"){
    fnSum(a,b);
}else{
    fnRest(a,b);
}}
 
let Sum= function(a,b){
    alert(a+b)
};

let Rest=(a,b) => alert (a-b);

let op = prompt ("Ingrese operación");
operation(op, Sum, Rest)