"use strict";

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Передаёт ссылку на обьект

copy.a = 10;

console.log(copy);
console.log(obj);

// Создание копий обьектов и пp
// создаем функцию для копирования
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

// создаем обьект
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// копируем с помощью функции написанной выше этот обьект
const newNumbers = copy(numbers);

// изменяем значени в копии обьекта
newNumbers.a = 10;

// изменяеи значение для обьекта в нутри обьекта
newNumbers.c.x = 10; // Есть два понятия, это поверхностные и глубокие копии обьекта. Была согдана не глубокая копия обьекта.

// проверяем
console.log(newNumbers);
console.log(numbers);

// соеденение обьектов
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Создает путем добавления независимую копию

const clone = Object.assign({}, add); // Создает путем добавления независимую копию

clone.d = 20;

console.log(add);
console.log(clone);

// копии массивов
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'qwerty';

console.log(newArray);
console.log(oldArray);

// новые методы с использование стандартов ES6 и ES8

// оператор разворота
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['worldpress', 'livejornal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // ..."имя" спред оператор

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// продолжаем использование спред операторов
const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

console.log(newQ);