'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// console.dir(box);

// Работать будем с инлайн стилями

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red'; // Будет ошибка из-за того, что обращение к псевдомассиву, нужно обращаться к элементу
circles[1].style.backgroundColor = 'red';

// Задание сразу нескольких свойств, cssText
box.style.cssText = 'background-color: blue; width: 500px';

// Можно задавать через интерполяцию
// box.style.cssText = `background-color: blue; width: ${num}px`;

//Изменения для нескольких обьектов

// старый метод
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// новый метод
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

// Методы работы с эл-ми страницы
const div = document.createElement('div'); // эта команда сохраняет эл-нт внутри js файла

// const text = document.createTextNode('Тут был я'); // Создание текста без тега

div.classList.add('black'); // добавляем класс

// добавляем блок в тело страницы
document.body.append(div); // в частности в body в конец

wrapper.append(div); // wrapper в конец. Вставляется только один раз. Он не копируется.

wrapper.prepend(div); // вставляет в начало

hearts[0].before(div); // перед элементом

hearts[0].after(div); // после

// удаление элемента со странице
circles[0].remove();

// Замена элементов
hearts[0].replaceWith(circles[1]);

// Устаревшие конструкции
wrapper.appendChild(div); // Добавление

wrapper.insertBefore(div, hearts[2]);

wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]);

// Редактирование созданного div`a
div.innerHTML = "<h1>Hello, world!</h1>";

// div.textContent = "Hello"; // Для работы только с текстом

// вставка
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');