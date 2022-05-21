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

