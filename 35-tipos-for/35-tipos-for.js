'use strict';

let nums = [4, 6, 3, 7, 1];

for (let i = 0; i < nums.length; i++) {
    alert("Indice " + i + ": " + nums[i]);
}

for (let element of nums) {
    alert(element);
}

nums.forEach(alert);