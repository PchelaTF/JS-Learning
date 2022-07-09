"use strict";

// Генераторы являются функциями с возможностью выхода и последующего входа.
// Их контекст исполнения (значения переменных) сохраняется при последующих входах.

// function* generators() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generators();

// console.log(str.next());

// console.log(str.next().value);

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next());
// console.log(counter.next());

for (let k of count(7)) { 
    console.log(k);
}