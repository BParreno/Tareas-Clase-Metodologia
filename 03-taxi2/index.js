'use strict';

let totalkms = prompt ("ingresar los km");

let precioPorKm;
precioPorKm = 0.25;

let arranque = 0.55;

let valor = (precioPorKm * totalkms) + arranque;

if (valor >= 1.50)
{
    alert(valor)
} 
else
{
    alert("1.50")
}

