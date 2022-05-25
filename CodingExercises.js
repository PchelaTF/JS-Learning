// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
//
//     // Не трогаем
//     return result;
// }

// РЕШЕНИЕ

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//
// for (let i = 0; i <= data.length; i++){
//     if (typeof (data[i]) === 'number'){
//         data[i] = data[i] * 2;
//     } else if (typeof (data[i]) === 'string') {
//             data[i] += " - done";
//         }
// }
//
// console.log(data);

// РЕШЕНИЕ

// Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     // Пишем решение вот тут
//
//
//     // Не трогаем
//     return result;
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
//
// for (let i = 1; i <= data.length; i++){
//     result[i - 1] = data[data.length - i];
// }
//
// // result[0] = data[4];
// // result[1] = data[3];
//
// console.log(result);

// (**) Задача на формирование фигуры
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
//
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++){
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++){
//         result += '*';
//     }
//     result += '\n';
// }
//
// console.log(result);

// Место для первой задачи
// function sayHello(name) {
//     return 'Привет, +  name!'; <== не верно
//     return `Привет, + ${name}!`; <== Верно
// }
// sayHello('Антон');

// Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1]; // так короче и правильнее!!!
/* let arr = [];
const a = number - 1;
const b = number;
const c = number + 1;
arr[0] = a;
arr[1] = b;
arr[2] = c;
return arr; */ // Так тоже верно, но не правильно.
// }
// returnNeighboringNumbers(5);

// Место для третьей задачи
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0){
//         return num;
//     }
//
//     let str = '';
//
//     for (let i = 1; i <= times; i++){
//         if (i === times){
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// getMathResult(3, 10);

// Место для первой задачи
// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length <= 0 || !Number.isInteger(length)){
//         return "При вычислении произошла ошибка";
//     }
//
//     let volume = length * length * length;
//
//     let area = 6 * (length * length);
//     return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
//
// calculateVolumeAndArea(5);

// Место для второй задачи
// function getCoupeNumber(seatNumber) {
// //     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)){
// //         return "Ошибка. Проверьте правильность введенного номера места";
// //     }
// //     if (seatNumber === 0 || seatNumber > 36){
// //         return "Таких мест в вагоне не существует";
// //     }
// //     for (let i = 4; i <= 36; i = i + 4){
// //         if (seatNumber <= i){
// //             console.log(Math.ceil(i / 4));
// //             return Math.ceil(i / 4);
// //         }
// //     }
// // }
// // getCoupeNumber(1);

// Место для первой задачи
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)){
//         return  "Ошибка, проверьте данные";
//     }
//
//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;
//
//     let hoursStr = '';
//
//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     // console.log(hours);
//     // console.log(minutes);
//     // console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
//
// getTimeFromMinutes(150);


// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }
//
// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

// Задача на числа Фибанначи
// function fib(num) {
//     if (typeof (num) !== "number" || !Number.isInteger(num) || num <= 0){
//         return '';
//     }
//     let result = '';
//     let a = 0;
//     let b = 1;
//     for (let i = 0; i < num; i++){
//         if (i + 1 === num) {
//             result += `${a}`;
//         } else {
//             result += `${a} `;
//         }
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     // console.log(result);
//     return result;
// }
//
// fib(4);

// Работа с Обьектами
/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLang: function (plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function (lang){
            str += `${lang.toUpperCase()} `;
        });

        console.log(str);
        return str;
    }
};

personalPlanPeter.showAgeAndLang(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    console.log(`${exp}`);
    return  `${exp}`;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs){
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    console.log(str);
    return str;
}
showProgrammingLangs(personalPlanPeter);
*/

// Работа с массивами
/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    if (arr.length <= 0){
        str += 'Семья пуста';
    } else {
        str += 'Семья состоит из: ';
    }
    arr.forEach(member => {
        str += `${member} `;
    });
    console.log(str);
    return str;
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

standardizeStrings(favoriteCities);
*/

// Задача на разворот строки
/*const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== "string"){
        return 'Ошибка';
    } else {
        const arr = str.split('');
        console.log(arr)
        const reversed = arr.reverse();
        console.log(reversed);
        const string = reversed.join('');
        console.log(string);
        return string;
    }
}

reverse(someString); */

// задача про банкоматы
/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0){
        str = 'Нет доступных валют';
        console.log(str);
        return str;
    } else {
        str = 'Доступные валюты:\n';
        arr.forEach(function (curr, i){
            if (curr !== missingCurr){
                str += `${curr}\n`;
            }
        });x
    }

    // или
    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i] === missingCurr){
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
    console.log(str);
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'); */

// Продвинутая задача на работу с обьектами и массивами
/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shops => {
        square += shops.width * shops.length;
    });

    volume += square * data.height;

    if (data.budget - (volume * data.moneyPer1m3) >= 0){
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData); */


// Продвинутая задача на работу с обьектами и массивами

/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {arr.sort();
    let team1 = [];
    let team2 = [];
    let team3 = [];
    let teamRest = [];
    // let str = arr.join(' '); можно и без этого
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            team1.push(arr[i]);
        } else if (i < 6) {
            team2.push(arr[i]);
        } else if (i < 9) {
            team3.push(arr[i]);
        } else {
            teamRest.push(arr[i]);
        }
    }
    console.log([team1, team2, team3, `Оставшиеся студенты: ${teamRest.length === 0 ? '-' : teamRest.join(', ')}`]);
    return [team1, team2, team3, `Оставшиеся студенты: ${teamRest.length === 0 ? '-' : teamRest.join(', ')}`];
}

sortStudentsByGroups(students); */

// Задача на поиск ошибок в коде

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// Как было
// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';
//
//     return anwser;
// }
//
// console.log(isOpen(openNow))

// Как стало
function isOpen(prop) {
    let answer = '';
    (prop === false) ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

// Было
// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }
//
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// Стало
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// Было
// function transferWaitors(data) {
//     const copy = Object.assign({}, data);
//
//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }
//
// transferWaitors(restorantData);

// Стало
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    console.log(copy);
    return copy;
}

transferWaitors(restorantData);

console.log(restorantData);