"use strict";

// Вся информация которая приходит от пользователя будет в виде строк. Не зависимо от того как мы ее получили!

alert('Hello');

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Are you 18 years old?", "18");
console.log(typeof (answer)); // Вся информация которая приходит от пользователя будет в виде строк. Не зависимо от того как мы ее получили!

const answerNumber = +prompt("Are you 18 years old?", "");
console.log(answerNumber + 5); // +prompt переводит тип string в number

const answers = [];

answers[0] = prompt("What`s is your name?", "");
answers[1] = prompt("What`s is your last name?", "");
answers[2] = prompt("How aol are you?", "");

document.write(answers);
console.log(typeof (answers));