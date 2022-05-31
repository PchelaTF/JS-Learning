"use strict";

/*Символы позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться 
и перезаписать их из других частей программы.*/

// let id = Symbol('id');
/*
const obj = {
    'name': 'Test',
    [Symbol('id')]: 1, // Symbol не отображается. Он скрытыйю Приватный  
    // [id]: 1,
    getId() {
        return this[id];
    }
}

// let id = Symbol('id');
// // let id2 = Symbol('id');

// // console.log(id === id2);

// obj[id] = 1;

// console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));  // грубо говоря ссылка на Symbol в виде массива
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);  // получаем первый эллемент 
// console.log(obj[id]);

// for (let value in obj) console.log(value);
*/

// Пример

const myAvesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123
}

// сторонний код библиотеки

myAvesomeDB.id = '121212';

console.log(myAvesomeDB['id']);
console.log(myAvesomeDB);

// Глоьальный реестр символов

const myAvesomeDB2 = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 456
}

// сторонний код библиотеки

myAvesomeDB2.id = '121212';

console.log(myAvesomeDB2[Symbol.for('id')]);
console.log(myAvesomeDB2);