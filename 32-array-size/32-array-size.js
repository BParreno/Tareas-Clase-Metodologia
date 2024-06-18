'use strict'



let Array = ["a", "b", "c", "d"];

function alertNumberOfElements(arr) {
    let count = 0;
    for (let element in arr) {
        count++;
    }
    alert("The number of elements in the array is: " + count);
}

alertNumberOfElements(Array);
