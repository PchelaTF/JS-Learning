"use strict";

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {

    // ? Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:
    // ? resolve(value) — если работа завершилась успешно, с результатом value.
    // ? reject(error) — если произошла ошибка, error – объект ошибки.

    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'Tea',
            price: 2000
        };

        resolve(product);

    }, 2000);
});

// then необходим для обработки положительно исхода
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            // console.log(product);
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('finally');
});


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First');
});