'use strict'

let array = [
  2,
  8,
  9,
]

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let sum = sumArray (array);
alert ("2+8+9= " + sum);