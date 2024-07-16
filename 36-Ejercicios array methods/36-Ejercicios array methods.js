"use strict";

// Ejercicio #1
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

function searchName(namesList, wantedName) {
    if (namesList.includes(wantedName)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra"); 
    }
}

let wantedName = "Leonard";
searchName(students, wantedName);


// Ejercicio #2
let array = 'La programación web es fundamental para el progreso';

function wordQuantity(array) {
    let element = array.split(' ');
    return element.length;
}

let quantity = wordQuantity(array);
alert(`The phrase "${array}" has ${quantity} words.`);


// Ejercicio #3

function threeLetterWords(array) {
    let words = array.split(" ");
    
    let wordsOfThree = words.filter(function(word) {
        return word.length > 3;
    });
    
    return wordsOfThree;
}

let result = threeLetterWords(array);
alert(result);
