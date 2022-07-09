"use strict";

// Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch

try {
    console.log('Ok');
    console.log(a);
    console.log('result');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log('Still normal');