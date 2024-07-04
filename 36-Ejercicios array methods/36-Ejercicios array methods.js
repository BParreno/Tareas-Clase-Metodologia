"use strict";

let array = 'La programación web es fundamental para el progreso';

function wordQuantity(array) {
    let element = array.split(' ');
    return element.length;
}

let quantity = wordQuantity(array);
alert(`The phrase "${array}" has ${quantity} words.`);
