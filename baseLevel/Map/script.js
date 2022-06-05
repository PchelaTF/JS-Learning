"use strict";

const user = {
    4: 'Hi',
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/02/1993',
    showMyPablicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// // console.log(user);
// console.log(typeof(Object.keys(user)[0]));

// перевод Обьекта в формат Карты 
const userMap = new Map(Object.entries(user));
console.log(userMap);

// перевод из Карты в Обьект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const budget = [5000, 15000, 25000];

// const map = new Map();
// map это массив с массивами
const map = new Map([
    [{paper: 400}, 8000]
]);

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

console.log(map);
console.log(map.get(shops[0])); 
console.log(map.has(shops[0])); // проверка на наличие 

// map.delete(key);
// map.clear();
// map.size();

// ? МЕТОД keys
// возвращает итерируемый обьект по ключам 
// console.log(map.keys());

// const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
//     // console.log(shop);
// } 

// console.log(goods);

// ? МЕТОД values
// возвращает итерируемый обьект по значениям 

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) { // получили один большой массив с двумя подмассивами
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) { 
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });