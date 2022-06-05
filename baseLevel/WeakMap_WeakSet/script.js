"use strict";

let user = {name: 'Eugene'};

// const arr = [user];

// let map = new Map();

// map.set(user, 'data');

user = null;

console.log(user);
// console.log(arr[0]); 
// console.log(map.keys());

// WeakMap 
// 1) в ней ключами могут быть только оббекты
// 2) если нет ссылки на этот обьект и он существует только в WeakMap, то он будет удален из слабой карты

// let map = new WeakMap();

// map.set(user, 'data');

// user = null;

// console.log(map.has(user));

// Пример 

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


// WeakSet 
// можем добавлять только обьекыт
// add, has, delete доступные методы

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'V'}
]

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));