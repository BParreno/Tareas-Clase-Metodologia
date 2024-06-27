'use strict'

let students = [];
students.push('Junior', 'Carlos', 'Sergio', 'Darwin', 'Ian');
students.unshift('Mateo');
students.pop();
students.shift();
students.splice(2, 0, 'Mateo');
let itemFind = students.find(item => item = 'Sergio');
let ages = [20, 25, 30, 16, 18];
let agesFilter = ages.filter(item => item < 20);
let agesChanged = ages.map(item => item/2);
let agesReversed = ages.reverse();
let subjects= "Piensa, Metodologia, Matematicas, BaseDeDatos, Interfaces, TICS";
let subjectsArr= subjects.split(",");


alert (students);
alert (itemFind);
alert (agesFilter);
alert (agesReversed);
alert (subjects);