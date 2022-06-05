"use strict";

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Старый формат
// btn.onclick = function () {
//     alert('Click');
// };
//

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// btn.addEventListener('mouseenter', (event) => {
//     // console.log('Hover');
//     console.log(event.target);
//     event.target.remove();
// });

let i = 0;

const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    i++;
    if (i === 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// всплытие событий
// сначала срабатывает на вложенном обьекте, затем поднимается на уровень вверх
const typeElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', typeElement);
    // }
};

btn.addEventListener('click', typeElement);
overlay.addEventListener('click', typeElement);

// отмена сдандартного поведения браузера
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // <=== вот этот метод

    console.log(event.target);
});

// Что бы повесеть на несколько эл-в сразу обработчики событий
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// Опции и события
// {once: true} одно из самых полезных