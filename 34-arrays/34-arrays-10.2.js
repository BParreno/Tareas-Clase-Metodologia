'use strict';

//Ejercicio #10
let binaryNumber = [0, 0, 0, 0, 0, 1, 0, 1];

for (let i = 0; i < binaryNumber.length; i++) {
    let num1 = (binaryNumber[0] * 128);
    let num2 = (binaryNumber[1] * 64);
    let num3 = (binaryNumber[2] * 32);
    let num4 = (binaryNumber[3] * 16);
    let num5 = (binaryNumber[4] * 8);
    let num6 = (binaryNumber[5] * 4);
    let num7 = (binaryNumber[6] * 2);
    let num8 = (binaryNumber[7] * 1);
    let decimalNumber = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;
    alert(decimalNumber);
    break;
}
