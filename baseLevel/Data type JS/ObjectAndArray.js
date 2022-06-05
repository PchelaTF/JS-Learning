// [] - array
// {} - object

const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c'
};

console.log(arr[1]);
console.log(arrObj[1]); //надежнее использовать квадратные скобки
console.log(arrObj.a);

// const obj = {a: 1, b: 2};
const obj = {
    'Anna': 500,
    'Alice': 800
};

const arr2 = ['a', 'b', 'c'];

arr2[10] = '3456'; // Такой способ работы с массивами не рекомендуется!!!

console.log(arr2);
console.log(arr2[10]);

const arrObj2 = {
    a: 'a',
    '1': 'b',
    2: 'c'
};
const b = 'b';

// arrObj2.b = '1234';
arrObj2['b'] = '1234';

console.log(arrObj2['b']);
console.log(arrObj2.b);


const arrObg3 = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def:{

        }
    }
};