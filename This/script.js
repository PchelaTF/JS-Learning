"use strict";

// This - контекст вызова функции 
// Это то, что окружает функцию и в каких условиях она выхывается

// В JavaScript this — это текущий контекст исполнения функции. Поскольку функцию можно вызвать четырьмя способами:

// 1) вызов функции: alert('Hello World!'),
// 2) вызов метода: console.log('Hello World!'),
// 3) вызов конструктора: new RegExp('\\d'),
// 4) непрямой вызов: alert.call(undefined, 'Hello World!'),
// и каждый из них определяет свой контекст, поведение this слегка не соответствует ожиданиям начинающих разработчиков. Кроме того, strict mode также влияет на контекст исполнения.

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);

// 1) Обычная функция this == window, но если стоит strict mode == undefined

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this); // в данном случае this относится к первому способу
        }
        shout();
    }
};

obj.sum();

// 2) Контекст у методов обьекта - сам обьект (this == обект)

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let eugene = new User('Eugene', 34);

// 3) this в конструкторах и классах это новый экземпляр обьекта

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}
// Ручное присвоение контекста
sayName.call(user, 'Smith');
sayName.apply(user, ['Potter']);

// создает новую функцию и под нее подвязывает контекст
function count(num) {
    return this * num;
}

const double = count.bind(2); // Double теперь это функция у которой есть жестко привязанный контекст. Это 2йка которая передается в this 

console.log(double(3));
console.log(double(13));

// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this); // получим саму кнопку (сам элемент). Т.е. сам элемент на котором произошло событие.
    this.style.backgroundColor = 'red';
});

// у стрелочной функции нет контекста вызова. Она обращается к родителю.
const objThis = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); // будет ссылатся на сам обьект
            console.log(this.num); // num обьекта objThis
        }

        say();
    }
}

objThis.sayNumber();


// как записать стрелочную функцию в коротком варианте
// const doubleTwo = (a) => {
//     // return a * 2; 
// }

const doubleTwo = (a) => a * 2; // можно еще написать без круглых скобок если будет один аргумент 