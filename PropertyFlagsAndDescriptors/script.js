"use strict";

// https://learn.javascript.ru/property-descriptors

// writable 
// enumerable 
// configurable 

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surame: 'Smith',
    // birthday: '20/04/1993',
    [birthday]: '20/04/2021',
    showMyPablicData: function() {
        console.log(`${this.name} ${this.surame}`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(user, 'name')); // А при ручном создании все флаги

// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender')); // Создаст новое свойство где все флаги False.

// Object.defineProperty(user, 'birthday', {writable: false});

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'showMyPablicData', {enumerable: false});

for (let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperties(user, {
    name: {writable: false},
    surame: {writable: false}
});

// Object.is - определяет, являются ли два значения (обьекта) различимыми (т.е. одинаковыми)

// Object.keys(user);
console.log(Object.keys(user));

// Object.values();
console.log(Object.values(user));

// Object.entries();
console.log(Object.entries(user));

console.log(Object.getOwnPropertyDescriptor(user, birthday)); 