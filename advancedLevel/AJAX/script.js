"use strict";

// const { async } = require("jshint/src/prod-params");

// старые технологии

const inputUAH = document.querySelector('#uah');
const inputUSD = document.querySelector('#usd');

// inputUAH.addEventListener('change') // возникает когда наш обьект уходит из фокуса
inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // создаем новый обьект с помощью конструктора. При создании запросов они будут вести себя по разнгому

    // request.open(method, url, async, login, password); // собирает настройки которые помогут сделать запрос
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send();

    // самые частые события readystatechange и load

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUSD.value = 'Что-то пошло не так';
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Что-то пошло не так';
        }
    });

    // свойства
    // status
    // statusText
    // Response
    // readyState
});