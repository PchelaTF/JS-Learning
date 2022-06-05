"use strict";

// classList 

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // показывает кол-во классов
// console.log(btns[0].classList.item(0)); // выведет конкретный класс
// console.log(btns[1].classList.add('red')); // Добавит класс
// console.log(btns[0].classList.remove('blue')); // Удалит ненужный класс
// console.log(btns[0].classList.toggle('blue')); // Если класс есть, то удалит его, если класса нет, то добавит его 

// if (btns[1].classList.contains('red')) console.log('red');

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});


// Делегирование событий (Event Delegation)

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == 'BUTTON') { // все с именем тега 
    //     console.log("Hello");
    // }

    // if (event.target && event.target.classList.contains('blue')) { // Если еммет конкретный класс
    //     console.log("Hello");
    // }

    if (event.target && event.target.matches('button.red')) { // любимая фишка гугла. Выделяем через совпадение тег - класс
        console.log("Hello");
    }
});

// btns.forEach(btn => {                              // не будет работать с динамическими событиями
//     btn.addEventListener('click', (event) => {
//         console.log("Hello");
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);