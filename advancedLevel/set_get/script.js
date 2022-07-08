"use strict";

const persone = {
    name: 'Alex',
    age: 30,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
}

console.log(persone.userAge);

console.log(persone.userAge = 25);