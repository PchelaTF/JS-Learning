"use strict";

// while ... for
// do ... while
// for

let num = 50;

// while ... for
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do ... while
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for
// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 10; i++){
    if (i === 6){
        // break;
        continue;
    }
    console.log(i);
}