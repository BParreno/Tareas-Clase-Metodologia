"use strict";

function validateField(isVisible, show, hide){
if(isVisible){
    show();
}else{
    hide();
}
}

let showField= function(){
    alert("Capo visible")
};

let hideField =() => alert ("Campo oculto");

validateField(false, showField, hideField)