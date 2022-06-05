"use strict";

const arr = [1, 2, 3, 6, 8];

console.log(arr.length); // берет последний индекс и +1 к нему

arr.pop() // удаляет последний элемент массива
arr.push(10) // добавляет элемент в конец массива

console.log(arr);

// Перебор массивов

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

// гибкая настройка перебора массива
arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// из строки в массив
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// из массива в строку
const str2 = prompt("", "");
const products2 = str2.split(", ");
console.log(products2.join('; '));

// метод сортировки
const str3 = prompt("", "");
const products3 = str3.split(", ");
products3.sort();
console.log(products3.join('; '));

// сортировка массива с цифрами
function compareNum(a, b) {
    return a - b;
}
arr.sort(compareNum);
console.log(arr);

// Псевдомассивы
// Выгляди как массив, у них не будет методов. ПРосто структура которая хранит данные по порядку