"use strict";

// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function () {
//         console.log(`User name: ${this.name}, age ${userAge}`);
//     }

//     this.getAge = function () {
//         return userAge;
//     }

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Not availble value');
//         }
//     }
// }

// const eugene = new User('Eugene', 30);
// console.log(eugene.name);
// console.log(eugene.getAge());


// eugene.setAge(25);
// eugene.setAge(300);
// console.log(eugene.getAge());
// // eugene.name = 'Alex';

// eugene.say(); 


class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Potter';

    say = () => {
        console.log(`User name: ${this.name}${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Not availble value');
        }
    }
}

const eugene = new User('Eugene', 30);
// console.log(eugene.age);
// eugene.age = 99;

// console.log(eugene.age);
console.log(eugene.surname);

eugene.say(); 