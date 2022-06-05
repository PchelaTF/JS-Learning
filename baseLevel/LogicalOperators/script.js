"use strict";

// && - оператор И
// || - оператор ИЛИ
// ! - оператор НЕ

const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));

const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));

const hamburger = 3;
const fries = 1;
const cola = 1;

console.log((hamburger === 3 && cola && fries));

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'qwerty');


if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

const hamburger = 0;
const fries = null;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('All is happy');
} else {
    console.log('We are going away');
}

console.log((hamburger || cola || fries));


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('All are happy');
} else {
    console.log('We are going away');
}

// EXERCISE

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets));

console.log(!0);

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
}

// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
//     А без значения там undefined, напоминаю 🙂

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
}

