'use strict';

let fruits = ["manzana", " pera", " uva", " mango", " banana"];

function filterByLetter(fruits) {
    let letter = prompt("Ingrese letra para filtrar (a, b, e, g, m, n, o, p, r, u, v,):");

    // Filtrar las frutas que contienen la letra proporcionada
    let filteredFruits = fruits.filter(fruit => fruit.includes(letter));

    return filteredFruits;
}

let result = filterByLetter(fruits);
alert(result);