"use strict";

// Simple type:
// - number (1, 2, 3, ...)
// - string ("Eugene", etc)
// - boolean (true, false)
// - null ()
// - undefined (value is not defined)
// - Symbol ()
// - BigInt
//
// Object:
// - array
// - function
// - object date
// - regular expressions
// - mistakes


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[3]);