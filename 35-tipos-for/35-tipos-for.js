'use strict';

let nums = [4, 6, 3, 7, 1];

for (let i = 0; i < nums.length; i++) {
    alert(i + ": " + nums[i]);
}

for (let num of nums) {
    alert(num);
}
