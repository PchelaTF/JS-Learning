"use strict";

// 1)
// let x = 5; alert(x++); return 5; // если записать ++х, то вернет 6

// 2)
// Чему равно такое выражение: [] + false - null + true
// console.log(typeof ([] + false)); // пустой массив приравнивается к строке, поэтому получается строка
// console.log([] + false - null); // получается NaN
// console.log([] + false - null + true); // получается NaN

// 3)
// Что выведет этот код: let y = 1; let x = y = 2; alert(x);
// let y = 1;
// let x = y = 2;
// alert(x);
// выведет 2. "let x = y = 2" - последовательное присваиваие

// 4)
// Чему равна сумма [] + 1 + 2?
// console.log([] + 1 + 2);  // выведет строку, "12"

// 5)
// Что выведет этот код: alert( "1"[0] )?
// alert( "1"[0] ); // выведет 1, строку

// 6)
// Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined); // null
// И запигается на лжи. Вернет пернове false

// 7)
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( 1 && 2 ) === (1 && 2)); // False. !! - превращают значение в булиновое

// 8)
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
//                   3 будет результатом этого кода
// alert( null || 2 && 3 || 4 );
// // оперптор И выполняется раньше чем ИЛИ

// 9)
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3], b = [1, 2, 3];
// console.log(a == b);
// false. Разные хранилища информации

// 10)
// Что выведет этот код: alert( +"Infinity"); ?
// alert( +"Infinity"); // Infinity и из=за унарного плюса будет числом

// 11)
// Верно ли сравнение: "Ёжик" > "яблоко" ?
// console.log("Ёжик" > "яблоко"); // Сравнение будет посимвольно. Получим False

// 12)
// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// console.log(0 || "" || 2 || undefined || true || falsе); // вернет 2
// Или запигается на правде