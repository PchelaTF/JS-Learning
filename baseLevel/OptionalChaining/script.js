'use strict';

// ?. проверяет слева от себя существует ли обьект, значение и тд...
//  ?. работает только на чтение. На запись получим ошибку.

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent);

console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say() {
        console.log('Hello');
    }
}
userData.say();
userData.hey?.();
// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// Один символ позволяет избавиться от кучи проверок и сократить код
console.log(userData.skills?.js);