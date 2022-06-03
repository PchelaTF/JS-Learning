'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

const widthOffset = box.offsetWidth;
const heightOffset = box.offsetHeight;

console.log(widthOffset, heightOffset);

const widthScroll = box.scrollWidth;
const heightScroll = box.scrollHeight;

console.log(widthScroll, heightScroll);

// при клике расскрываем элемент 

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // у бокса устанавливаем высоту с учетом всей прокрутки
    console.log(box.scrollTop); // кол-во прокрученного
});


// получение координат у эл-в 
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top); // получим только значение top

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// window.scrollBy
// window.scrollTo