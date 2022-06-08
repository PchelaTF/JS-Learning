"use strict";

// * filter
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const names = ['Ivan', 'Ann', 'Alona', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

const shortNames = names.filter((name) => name.length < 5);

console.log(shortNames);


// * map
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const answers = ['IvAn', 'AnnA', 'HelLo'];

const result = answers.map(item => item.toLocaleLowerCase());

// ? лучше создавать новую переменную, т.е. делать как выше, а не так как ниже)

// let answers = ['IvAn', 'AnnA', 'HelLo'];

// answers = answers.map(item => item.toLocaleLowerCase());

// console.log(result);


// * every/some
// возвращает булиное значение 
// every - возвращает только если все значения соответствуют условию
// some - согласно условию

const some = [4, 'qwer', 'asdf'];

console.log(some.some(item => typeof (item) === 'number'));

console.log(some.every(item => typeof (item) === 'number'));


// * reduce
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

const arr = [4, 5, 1, 3, 2, 6];
// 0       4
// 4       5
// 9       1
// 10      3
// ...
const res = arr.reduce((sum, current) => sum + current, 3); // 3 это начальное значение 

console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// делаем из обьекта массив массивов
const newArr = Object.entries(obj)
    // фильтруем массив согласно условию
    .filter(item => item[1] === 'persone')
    // возвращаем только имена 
    .map(item => item[0]);

console.log(newArr);

// * Object.entries()
// Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то  массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.