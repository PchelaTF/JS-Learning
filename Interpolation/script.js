"use strict";

const category = 'toys';

console.log('https://someurl.com/' + category); //конкотинация строк
console.log('https://someurl.com/' + category + '/' + '4'); // усложнение
console.log(`https://someurl.com/${category}/5`); // интерполяция (обратные ковычки ``)

const user = "Ivan";

alert(`Hello, ${user}!`);