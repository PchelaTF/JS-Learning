"use strict";

// 1)
// function func(params) {
//     window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');

// 2)
// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// 3)
// function outor() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello');
//     }
// }

// const sayHello = outor();

// 4)
function createElement() {
    const div = document.createElement('div');
    div.id = "test";
    return div;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();

// ? решение данной проблеммы 
function createElement() {
    const div = document.createElement('div');
    div.id = "test";
    document.body.append(testDiv);}

createElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();