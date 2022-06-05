"use strict";

// задача на поиск кол-ва страниц в книге

function amountOfPages(summary){

    let result = ''; // создаем пустую строку
    let n = 0; // переменная куда мы запишем грубоговоря результат и после вернем её

    for (let i = 1; i <= summary; i++) { // создаем цикл и будем записывать в строку цифры
        result += i;
        if (result.length === summary) { // когда длинна строки будет равна сумме цифр, мы присвоем последнее значение переменной n,
            n = i; // это и будет кол-во страниц
        }
    }

    return n; // возвращаем кол-во страниц
}

console.log(amountOfPages(5)); // должна вернуть 5
console.log(amountOfPages(25)); // должна вернуть 17
console.log(amountOfPages(1095)); // должна вернуть 401
console.log(amountOfPages(185)); // должна вернуть 97