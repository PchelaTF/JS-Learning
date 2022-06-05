"use strict";

// создаем новую дату
// const now = new Date('2022-06-02');

// const now = new Date(2022, 6, 2, 20);

const now = new Date();

console.log(now);

// методы получения компонентов даты 

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());

console.log(now.getTime());

// методы установки даты

console.log(now.setFullYear());
console.log(now.setMonth());
console.log(now.setDate());
console.log(now.setDay());
console.log(now.setHours());
console.log(now.setUTCHours());

// new Date.parse('2022-06-02');

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`)