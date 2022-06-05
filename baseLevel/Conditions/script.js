"use strict";

if (4 == 9){
    console.log('OK!');
} else {
    console.log('ERROR');
}
// всегда возвращет булевое значение (true or false)

const num = 50;

// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too mach');
// } else {
//     console.log('Ok');
// }
//
// (num === 50) ? console.log('Ok') : console.log('Error');
// // тернарный оператор ?

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 51:
        console.log("Ok");
        break;
    default:
        console.log("Maybe another time");
        break;
}

const num2 = '50';

switch (num2) {
    case '49':
        console.log('Error');
        break;
    case '100':
        console.log('Error');
        break;
    case '50':
        console.log("Ok");
        break;
    default:
        console.log("Maybe another time");
        break;
}