"use strict";

// Конструктор RegExp создаёт объект регулярного выражения для сопоставления текста с шаблоном.

// new ReqExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Write your name');

// const reg = /n/ig;

// ? flags
//  i - игнорирование регистра при сопоставлении
//  g - глобальное сопоставление
//  m - сопоставление по нескольким строкам; символы начала и конца (^ и $) начинают работать по нескольким строкам (то есть, происходит сопоставление с началом или концом каждой строки (строки разделяются символами \n или \r), а не только с началом или концом всей вводимой строки)
//  y - «липкий» поиск; сопоставление в целевой строке начинается с индекса, на который указывает свойство lastIndex этого регулярного выражения (и не пытается сопоставиться с любого более позднего индекса).

// console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log(pass.replace(/\./g, "*")); // * будет заменять только точки.

// console.log('12-34-56'.replace(/-/g, ":"));

// const ans = prompt('Write your number');

// const reg = /\d/g;

// console.log(ans.match(reg)); // Вернёт true or false

// ? Классы
// \d - Сопоставляется с символом цифры в базовом латинском алфавите. Эквивалентен набору символов [0-9].
// \w - Сопоставляется с любым символом из базового латинского алфавита, не являющимся символом, из которых состоят слова. Эквивалентен набору символов [^A-Za-z0-9_].
// \s - Сопоставляется с одиночным пробельным символом, который включает в себя пробел, табуляцию, подачу страницы, перевод строки и другие пробельные символы Юникода.

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// ? обратные классы 
// \D - не числа 
// \W - не буквы
// \S - не пробеллы 

console.log(str.match(/\D/ig));