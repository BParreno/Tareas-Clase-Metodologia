'use strict';
let n= prompt ("Ingrese el nombre");
let species= prompt ("Ingrese la especie");
species = (
    Articuno = {
        tipo1: "Hielo",
        tipo2: "Volador",
    } ||
    Zapdos = {
        tipo1: "Electrico",
        tipo2: "Volador",
    } ||
    Moltres = {
        tipo1: "Fuego",
        tipo2: "Volador",
    });
let level= Number (prompt ("Ingrese el nivel"));

let pokemon = {
    n,
    species,
    level,
};

alert (pokemon)