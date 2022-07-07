'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');

// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    btnChange = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

btnChange.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
})


const persone = {
    name: 'Alex',
    age: 25,
}

// const serializedPersone = JSON.stringify(persone);

// localStorage.setItem('alex', serializedPersone);
localStorage.setItem('alex', persone);

// console.log(JSON.parse(localStorage.getItem('alex')));
console.log(localStorage.getItem('alex'));