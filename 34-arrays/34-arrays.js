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


//Ejercicio #8
//El array se llama "World2" unicamente para que no haya conflicto con el Ejercicio #7
let world2=['s', 'o', 'n', 'a', 'c', 'n', 'e', 'u', 'c']

for (let i = 0; i < world2.length; i++) {
    let order = (world2 [8] + '' + 
        world2 [7] + '' + 
        world2 [6] + '' + 
        world2 [5] + '' + 
        world2 [4] + '' + 
        world2 [3] + '' + 
        world2 [2] + '' + 
        world2 [1] + '' + 
        world2 [0])
    alert (order);
    break;
    };


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


//Ejercicio #10
let binaryNumber = [0, 1, 0, 1];

for (let i = 0; i < binaryNumber.length; i++) {
    let num1 = (binaryNumber[0] * 8);
    let num2 = (binaryNumber[1] * 4);
    let num3 = (binaryNumber[2] * 2);
    let num4 = (binaryNumber[3] * 1);
    let decimalNumber = num1 + num2 + num3 + num4;
    alert(decimalNumber);
    break;
}
