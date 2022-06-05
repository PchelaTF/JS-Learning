'use strict';

// querySelectorAll and querySelector - более новые и лучше всего использовать именно их

const boxesQuerry = document.querySelectorAll('.box'); // создаёт неживую коллекцию.
const boxesGet = document.getElementsByClassName('box'); // создаёт живую коллекцию.

// boxesQuerry[0].remove();
// boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; // єто не сработает. Напрямую HTMLCollection изменять нельзя 
}   

console.log(boxesQuerry);
console.log(boxesGet);
// console.log(document.body.children);

console.log(Array.from(boxesGet)); // Создаст массив из массиво подобного обьекта

// еще два новіх метода 

boxesQuerry.forEach(box => {
    if (box.matches('.this')) /*console.log('This one!')*/ console.log(box);
});

console.log(boxesQuerry[0].closest('.wrapper'));