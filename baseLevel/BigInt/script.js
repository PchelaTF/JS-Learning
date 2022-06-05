"use strict";

// BigInt
// BigInt это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1, 
// наибольшего числа, которое JavaScript может надёжно представить с Number примитивом. 
// Это максимальное значение можно получить, обратившись к Number.MAX_SAFE_INTEGER.

// const bigint = 333333333333333333333333333333333333333n;

const sameBigint = BigInt(333333333333333333333333333333333333333);

// console.log(typeof(bigint));

// console.log(5n + 1);  // не получится большое число сложить с числом 

// console.log(Math.round(5n)); // не получится большое число конвертировать

console.log(1n + 3n);

console.log(5n / 2n); // вернет только челое число, без дробной части

console.log(2n > 5); // будет адыкватно сравнивать

console.log(2n == 2); // даст true

console.log(2n === 2); // даст false

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);