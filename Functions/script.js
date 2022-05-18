"use strict";

// Имя функции должно быть глаголом с припиской того над чем выполняется действие

let num = 10;

function showFirstMessage(/*АРГУМЕНТ*/ text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage('Hello world!');

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
console.log(calc(7, 11));


function ret() {
    num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);

// вызывается как переменная

const logger = function () {
    console.log("Hello");
};

logger();

// стрелочная функция

// const calc = (a, b) => a + b;

// const calc = (a, b) => {
//   console.log('1');
//   return a + b;
// }

// еще раз про аргументы. Функция convert

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);