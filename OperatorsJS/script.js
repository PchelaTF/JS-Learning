"use strict";

let incr = 10,
    decr = 10;

incr++; // инкремент, т.е. увеличение на еденицу
decr--; // декримент, т.е. уменьшение на уденицу
// another form of writing (префиксная)
++incr;
--decr;

console.log(incr);
console.log(++incr); // another form of writing
console.log(decr);
console.log(--decr); // another form of writing

// = - присваивание
// == - сравнивание по значению
// === - сравнение по типу данных (строгое сравнение)

console.log(2 * 4 == '8'); // сравнение по значению
console.log(2 * 4 === '8'); // сравнение по типу данных

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
// && оператор И

const isChecked2 = false,
    isClose2 = false;

console.log(isChecked2 || !isClose2);
// || оператор или
// ! оператор отрицания, превратит (правду в лож или наоборот)

console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8); // "!=" значит не равен
console.log(2 + 2 * 2 !== '6');