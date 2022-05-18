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

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++){
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);