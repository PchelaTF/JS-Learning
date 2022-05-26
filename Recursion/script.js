"use strict";

// Рекурсия - это когда функция вызывает саму себя

// функция возведения в степень
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function powRecursion(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powRecursion(x, n - 1) 
    }
}

pow(2, 1) // 2
pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) // 16

// база рекурсии это 1 
// шаг рекурсии. Запуск функциии но уже с другим значением 
// глубина рекурсии - общее кол-во вложенных вызовов вместе с самым первым

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        ame: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }
        ],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {  // Добаляем тест и видим что с рекурсией работает, а с итерацией нет
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
}

// Задача вычисление среднего прогресса со всех курсов

// решение 
// циклы

// Object.values() - Метод  Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке 
// что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов. 

// Array.isArray()
// Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) { // узнаем обьект массив или нет. Если массив, то ...
            students += course.length; // берем каждого студенкта и записыввем в students

            for (let i = 0; i < course.length; i++) { // вытаскиваем каждый прогресс и сумируем 
                total += course[i].progress
            }
        } else { // если обьект не массив, то ...
            for (let subCourse of Object.values(course)) {
                students += subCourse.length; // берем каждого студенкта и записыввем в students

                for (let i = 0; i < subCourse.length; i++) { // вытаскиваем каждый прогресс и сумируем 
                    total += subCourse[i].progress
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

// рекурсия

function getTotalProgressByRecursion(data) { // Запускаем функцию рекурсии в нее попадают данные
    if (Array.isArray(data)) { // если это сразу массив, то запускаем часть кода со строки 109 if до 117 else 
        // при помощи условия проверяем что это массив 

        let total = 0; //  обьявляем переменную total

        for (let i = 0; i < data.length; i++) { 
            total += data[i].progress
        } // складываем (все proggres) прогресс каждого из студентов при помощи цикла в переменную total 

        return [total, data.length]; // т.к. нам нужено еще не только сумма их прогресса, но и их кол-во (студентов)
        // то возвразаем 2 значения массивом

    } else { // если обьект кода не массив то переходим в блок кода else
        let total = [0, 0]; // создаем массив с нулями в который будем записывать значения и что бы вернуть в работу

        for (let subData of Object.values(data)) { // перебераем обьект, получая лишь values (значения). 
            // обращаемся к каждому значению свойств в качестве subData
            const subDataArr = getTotalProgressByRecursion(subData); // еще раз запускаем функцию только уже с вложенными данными

            // будет возвращать массив данных
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}   

// в итоге мы получаем массив с двумя даннысми который содержит общее кол-во прогресса и общим кол-вом студентов

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);