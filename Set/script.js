"use strict";

const { val } = require("jshint/src/options");

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

console.log(set);

const arrStudents = ['Alex', 'Ann', 'Oleg', 'Alex'];

const setStudents = new Set(arrStudents);

setStudents.add('Ivan');
setStudents.add('Oleg');

console.log(setStudents);

// Базовые функции Set

// set.delete(value);
// set.has(value);
// set.clear();
// set.size();

// перебор 

// 1)
for (let value of set) console.log(value);

// 2)
set.forEach((value, valueAgaing, set) => {
    console.log(value, valueAgaing);
});

// методы как и у Map
console.log(set.values());
console.log(set.keys()); // для отбратной совместимости с Map
console.log(set.entries()); // для отбратной совместимости с Map

// функция помощник
function unique(arr) {
    // return new Set(arr);
    return Array.from(new Set(arr));
}

// получим обычный массив со всеми его методами работы, только без дублирующизся значений
console.log(unique(arr));