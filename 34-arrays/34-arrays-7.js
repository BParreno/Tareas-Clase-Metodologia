'use strict';

//Ejercicio #7
let world=['o', 'ñ', 'e', 'l', 'i', 'u', 'q', 'a', 'y', 'a', 'u', 'g']

for (let i = 0; i < world.length; i++) {
    let order = (world [11] + '' + 
        world [10] + '' + 
        world [9] + '' + 
        world [8] + '' + 
        world [7] + '' + 
        world [6] + '' + 
        world [5] + '' + 
        world [4] + '' + 
        world [3] + '' + 
        world [2] + '' + 
        world [1] + '' + 
        world [0])
    alert (order); 
    break;
    };