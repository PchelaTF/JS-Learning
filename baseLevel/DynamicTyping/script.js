"use strict";

// Динамическая типизация - возвожность одного типа данных превращаться в другое.

// To String

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)
// Конкотинация
console.log(typeof (5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

// Задание стилей
const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof (Number('3')));

// 2)
// унарный плюс
console.log(typeof (+'5'));

// 3)
console.log(typeof (parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// Всё что мы получаем от пользователя, всегда будет тип данных String

// To Boolean

// 0, '', null, undefined, NaN; - olways false

// [], {}, ' ' ... - olways true

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof (Boolean('3')));

// 3)
console.log(typeof (!!"444")); // очень редкий прием
