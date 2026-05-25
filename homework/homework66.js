'use strict';

const order = [3, 5, 2, 6, 4, 1];

for (let i = 0; i < order.length; i++) {
    const element = document.getElementById(`string-${order[i]}`);
    console.log(element.innerHTML);

}