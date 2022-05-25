"use strict";

// Более старые методы
const box = document.getElementById('box'); // Обязательно в кавычках!

console.log(box);

// Get all button
const btns = document.getElementsByTagName("button"); // В переменную получаем псевдомассив. Даже если эллемент будет один

const btn2 = document.getElementsByTagName('button')[1]; // Конкретная кнопка, в частности вторая

console.log(btns);
console.log(btn2); // Конкретная кнопка, в частности вторая
console.log(btns[2]); // Конкретная кнопка, в частности третья

// Get by ClassName
const circles = document.getElementsByClassName('circles');

console.log(circles);

// Более новые методы и более функциональные
const hearts = document.querySelectorAll('.heart'); // указываем конкретно к чему мы обращаемся class, id, ...
// так же псевдомассив, только с методом forEach
// console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // querySelector позволяет получить только один элемент со страницы, только первый
console.log(oneHeart);

