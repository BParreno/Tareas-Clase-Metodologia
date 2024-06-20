'use strict';

//Ejercicio #9
let nums=[0, 0, 0, 0];
let x= 1;

for (let i = 0; i < nums.length; i++) {
    let num1 = nums[0] + x;
    let num2 = num1 *2;
    let num3 = num2 *2;
    let num4 = num3 *2;
    let allnums = num1 + '' + num2 + '' + num3 + '' + num4;
    alert (allnums); 
    break;
    };