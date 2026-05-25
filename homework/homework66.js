'use strict';

const order = [3, 5, 2, 6, 4, 1];

for (let i = 0; i < order.length; i++) {
    const element = document.getElementById(`string-${order[i]}`);
    console.log(element.innerHTML);
}

const elements = document.getElementsByClassName('element');

for (let i = 0; i < elements.length; i++) {
    if (i < 3) {
        elements[i].style.color = 'red';
    } else {
        elements[i].style.color = 'green';
    }
}

const container = document.getElementById('container');

for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.classList.add('element');
    div.innerHTML = `Element ${i}`;
    container.append(div);
}