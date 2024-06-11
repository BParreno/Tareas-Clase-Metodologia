'use strict'

let array = [
    1,
    2,
    3,
    4,
    5,
    6,
  ]
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2===0) {
            sum += array[i];
        }
    }
    return sum;
  }
  let sum = sumArray (array);
  alert (sum);  