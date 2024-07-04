'use strict'

let array = [
    "item1",
    "item2",
    "item3",
]

function allItems(array) {
    let link;
    for (let i = 0; i < array.length; i++) {
        link = array[0] + ", " + array[1] + ", " + array[2];
    }
    return link;
}

let link = allItems(array);
alert (link);