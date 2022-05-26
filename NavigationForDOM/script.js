"use strict";

// console.log(document.head);

// console.log(document.documentElement);

// Метод для обращения к конкретному элементу
// console.log(document.body.childNodes); // Позволяет получить все узлы которые находятся в нутри жтого родителя

// console.log(document.body.firstChild); 

// console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode); // получаем div.first

console.log(document.querySelector('#current').parentNode.parentNode); // получаем div.wrapper

//  data атрибуты. Начинаются с data-... 
console.log(document.querySelector('[data-current="3"]').nextSibling); // сосед от конкретного дата атрибута. В частности следующий

console.log(document.querySelector('[data-current="3"]').previousSibling);  // сосед от конкретного дата атрибута. В частности предыдущий 

// аналоги команд для Элементов 
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

console.log(document.querySelector('#current').parentElement); // Точно получаем div.first

console.log(document.body.firstElementChild);  // получаем div.wrapper

console.log(document.body.lastElementChild); // получаем script

// переберающая конструкция for ... of
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}