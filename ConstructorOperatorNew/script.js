"use strict";

// Конструкторы, создание объектов через "new"
// Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.

// Это можно сделать при помощи функции-конструктора и оператора "new".

// Функция-конструктор
// Функции-конструкторы являются обычными функциями. Но есть два соглашения:

// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна вызываться при помощи оператора "new".

const num = new Number(3);

console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
}

const eugene = new User('Eugene', 34);
const alex = new User('Alex', 20);

alex.exit();

console.log(eugene);
console.log(alex);