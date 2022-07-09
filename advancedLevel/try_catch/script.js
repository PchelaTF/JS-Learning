"use strict";

// Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch

// try {
//     console.log('Ok');
//     console.log(a);
//     console.log('result');
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// console.log('Still normal');


const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'nav',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });

} catch (e) {
    // console.error(e.name);
    // console.log(e.message);
    // console.log(e.stack);

    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e;
}


// const err = new Error('qwerrt');
// const err2 = new SyntaxError('qwerrt');
// console.log(err.name, err.message, err.stack);