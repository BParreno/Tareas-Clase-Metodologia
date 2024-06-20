'use strict';

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
