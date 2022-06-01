"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/02/1993',
    showMyPablicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

for (const key in user) console.log(user[key]);

const arr = ['b', 'a', 'c'];

for (const key in arr) console.log(arr[key]);

const str = 'String';

for (const key in str) console.log(str[key]);

// for .. in Нерекомендуется применять на массивах и строках

// Лучше применять for .. of
/*
Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных),
вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта. */
/*
Получаем 2 преймущества:
1) Строгое соответствие порядка в переборе.Как записано, так и будет выполнятся.
2) Исключение всех лишних свойст которые были унаследованны
*/
const arr2 = ['b', 'a', 'c'];

for (const key of arr2) console.log(key); // Сразу получает значение

const userNew = {
    name: 'John',
    surname: 'Potter',
    birthday: '20/02/1993',
    showMyPablicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key of userNew) console.log(key);


const arr3 = ['b', 'a', 'c'];

console.dir(arr3);

// 

const arrProto = ['p', 'r', 'o'];

Array.prototype.someMethod = function () {};

for (const key of arrProto) console.log(key);

console.dir(arrProto);

// Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

// Делаем обьект итерируемым (перебераемым)

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello() {
        console.log('Hello');
    }
}

// Создаём метод который будет отвечать за перебор. 
// Когда цикл for .. of будет запускатся на обьекте salaries, то он вызывает метод salaries[Symbol.iterator] ОДИН раз
// и этот метод должен вернуть Итератор (обьект с методом Next)

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
            
        }
    }
}

// for (let res of salaries) {
//     console.log(res);
// }

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());