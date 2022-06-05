"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello');
    }
};

const john = {
    health: 100
};

// устаревший формат
john.__proto__ = soldier;

console.log(john.armor);
john.sayHello();

// новый формат
Object.setPrototypeOf(john, soldier);

const soldier2 = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello_2');
    }
};

const john2 = Object.create(soldier2); // создаем новый обьект Джон который будет проттотипно наследоваться

john2.sayHello();
