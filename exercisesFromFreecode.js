// Задача на циклы

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Змініть код лише під цим рядком
//     if (strokes === 1) {
//         console.log(names[0]);
//         return names[0];
//     } else if (strokes <= par -2) {
//         console.log(names[1]);
//         return names[1];
//     } else if (strokes == par - 1) {
//         console.log(names[2]);
//         return names[2];
//     } else if (strokes == par) {
//         console.log(names[3]);
//         return names[3];
//     } else if (strokes == par + 1) {
//         console.log(names[4]);
//         return names[4];
//     } else if(strokes == par + 2) {
//         console.log(names[5]);
//         return names[5];
//     } else if (strokes >= par + 3) {
//         console.log(names[6]);
//         return names[6];
//     } else {
//         console.log("Орел");
//         return "Change Me";
//     }

//   // Змініть код лише над цим рядком
// }

// golfScore(4, 7);

// Задача на циклы switch

// function caseInSwitch(val) {
//     let answer = "";
//     // Змініть код лише під цим рядком
//     switch (val) {
//         case 1:
//             answer += "alpha";
//             break;
//         case 2:
//             answer += "beta";
//             break;
//         case 3:
//             answer += "gamma";
//             break;
//         case 4:
//             answer += "delta";
//             break;
//     } 
//     // Змініть код лише над цим рядком
//     return answer;
//   }
  
//   caseInSwitch(1);

// Додавання опції за замовчуванням до команди Switch

// function switchOfStuff(val) {
//     let answer = "";
//     // Змініть код лише під цим рядком
  
//     switch (val) {
//         case "a":
//             answer += "apple";
//             break;
//         case "b":
//             answer += "bird";
//             break;
//         case "c":
//             answer += "cat";
//             break;
//         default:
//             answer += "stuff";
//             break;
//     }
//     // Змініть код лише над цим рядком
//     return answer;
//   }
  
//   switchOfStuff(1);


//   Кілька ідентичних параметрів у інструкціях перемикання

// 1-3 - Low
// 4-6 - Mid
// 7-9 - High
// function sequentialSizes(val) {
//     let answer = "";
//     // Змініть код лише під цим рядком
//     switch (val) {
//         case 1:
//         case 2:
//         case 3: 
//             answer += "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer += "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer += "High";
//             break;
//     }
//     // Змініть код лише над цим рядком
//     return answer;
//   }
  
//   sequentialSizes(1);

// Заміна "if else" ланцюжка ключем

// function chainToSwitch(val) {
//     let answer = "";
//     // Змініть код лише під цим рядком
  
//     if (val === "bob") {
//       answer = "Marley";
//     } else if (val === 42) {
//       answer = "The Answer";
//     } else if (val === 1) {
//       answer = "There is no #1";
//     } else if (val === 99) {
//       answer = "Missed me by this much!";
//     } else if (val === 7) {
//       answer = "Ate Nine";
//     }
    
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer"
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }
  
//     // Змініть код лише над цим рядком
//     return answer;
//   }
  
//   chainToSwitch(7);

//  ЗАДАЧА Підрахунок карт

/*
let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0){
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    } else {
        return "Change Me";
    }

  // Змініть код лише над цим рядком
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

//  Використання об'єктів для пошуків

/*
// Налаштування
function phoneticLookup(val) {
    let result = "";
  
    // Змініть код лише під цим рядком
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  
    result = lookup[val];
  
    // Змініть код лише над цим рядком
    console.log(result);
    return result;
  }
  
  phoneticLookup("echo");
  */

// Збірка записів
/*
Вам наданий літерал об'єкту, який є частиною вашої збірки музичних альбомів. 
Кожен альбом має свій унікальний ідентифікаційний номер та декілька інших властивостей. 
Не всі альбоми мають повну інформацію.

Ви починаєте з функції updateRecords, яка приймає літерал об'єкту records, який містить колекцію 
музичного альбому, id, prop (такі як artist чи tracks), і value. 
Завершіть функцію, використовуючи правила нижче, щоб змінити об'єкт, переданий до функції.

Ваша функція повинна завжди повертати весь об'єкт збірки записів.
Якщо prop це не tracks і value не є пустим рядком, то оновіть або встановіть prop альбому до value.
Якщо prop є tracks але альбом немає властивості tracks, створіть пустий масив та додайте value до нього.
Якщо prop є tracks та value не є пустим рядком, додайте value до кінця наявного масиву tracks у альбомі.
Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
Note: Копія об'єкту recordCollection використовується для тестування.
*/
/*
// Налаштування
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Змініть код лише під цим рядком
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
      } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
      } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
      } else if (value === "") {
        delete records[id][prop];
      }

      // Еще вариант 
      if (value === '') {
        delete records[id][prop];
      } else if (prop === 'tracks') {
        records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
        records[id][prop].push(value);
      } else {
        records[id][prop] = value;
      }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/

//  задачи на циклы

/*
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);
*/

// Вкладення для циклів

/*
function multiplyAll(arr) {
  let product = 1;
  // Змініть код лише під цим рядком
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Змініть код лише над цим рядком
  console.log(product);
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/

// Заміна циклів за допомогою рекурсії
/*
function sum(arr, n) {
  // Змініть код лише під цим рядком
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Змініть код лише над цим рядком
}

// sum([1], 0);
// sum([2, 3, 4], 1);
console.log(sum([2, 3, 4, 5], 3));

function multiply(arr, n) {
  let product = 0;
  for (let i = 0; i < n; i++) {
    product += arr[i];
  }
  console.log(product);
  return product;
}

multiply([2, 3, 4, 5], 3);
*/

// ЗАВДАННЯ Пошук профілю
/*
У нас є безліч об'єктів, що представляють різних людей у наших списках контактів.

Функція lookUpProfile яка приймає name та властивість (prop) як аргументи були попередньо записані для вас.

Функція має перевірити, чи name є фактичним контактом firstName і даний параметр (prop) 
є властивістю цього контакту.

Якщо обидва є правдою, то поверніть "значення" цієї власності.

Якщо name не відповідає жодному контакту, поверніть рядок No such contact.

Якщо prop не відповідає жодним дійсним властивостям контакту, знайденим за відповідністю name 
потім поверніться на рядок No such property.
*/
/*
// Налаштування
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }

  // one more way

  for (let j = 0; j < contacts.length; j++) {
    if (contacts[j].firstName == name) {
      if (prop in contacts[j]) {
        return contacts[j][prop];
      } else {
        return 'No such property';
      }
    }
  }
  
  return 'No such contact';
  // Змініть код лише над цим рядком
}

console.log(lookUpProfile("Akira", "likes"));
lookUpProfile("Kristian", "lastName"); // повинен повернути рядок Vos
lookUpProfile("Sherlock", "likes"); // повинен повернутись як ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes"); // повинен повернути об'єкт
lookUpProfile("Bob", "number"); // повинен повернути рядок No such contact
lookUpProfile("Bob", "potato"); // повинен повернути рядок No such contact
lookUpProfile("Akira", "address"); // повинен повертати рядок No such property
*/

// Генерація випадкових цілих чисел в межах діапазону
/*
Замість генерації випадкового цілого числа між нулем і даним числом, як ми робили це раніше, 
ми можемо утворити випадкове ціле число, що потрапляє в діапазон двох конкретних чисел.

Для цього ми визначимо мінімальне число min і максимальне число max.

Ми будемо використовувати наступну формулу. Зробіть паузу, щоб прочитати і зрозуміти, що робить цей код:

Math.floor(Math.random() * (max - min + 1)) + min

Створіть функцію під назвою randomRange, яка займає діапазон myMin і myMax і повертає випадкове ціле 
число, яке більше або дорівнює myMinі менше або дорівнює myMax, включно.
*/

// answer
/*
function randomRange(myMin, myMax) {
  // Змініть код лише під цим рядком
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Змініть код лише над цим рядком
}

console.log(randomRange(3, 9));
*/

// Використання умовного (трикомпонентного) оператора
/*
Умовний оператор, який також називається трикомпонентним оператором, може використовуватися
як однорядковий "if-else" вираз.

Синтаксисом є a ? b : c, де a - це умова, b - це код, що запускається, коли умова повертає true і c - код,
що запускається, коли умова повертає false.

Ця функція використовує if/else твердження для того, щоб перевірити умову:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Її можна переписати, використовуючи умовний оператор:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Використовуйте умовний оператор у функції checkEqual, щоб перевірити чи два числа рівні, чи ні. 
Функція має повернути рядок Equal або рядок Not Equal.
*/

// 
/*
function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2) // має повернути рядок Not Equal
checkEqual(1, 1) // має повернути рядок Equal
checkEqual(1, -1) // має повернути рядок Not Equal
*/

// Використання декількох умовних (трикомпонентних) операторів
/*
У функції checkSign, використовуйте декілька умовних операторів, дотримуючись рекомендованого формату, 
що використаний у findGreaterOrEqual - для того, щоб перевірити чи число додатнє, від'ємне або нуль. 
Функція має повернути positive, negative or zero.
*/
/*
function checkSign(num) {
  // return (num  > 0) ? 'Positive' : (num < 0) ? 'Negative' : 'Zero';
  return (num > 0) ? 'Positive' 
  : (num < 0) ? 'Negative' 
  : 'Zero';
}

// checkSign має використовувати декілька умовних операторів
console.log(checkSign(10)); // має повернути рядок positive. Зверніть увагу на те, що написання з великої літери - важливе
console.log(checkSign(-12)); // має повернути рядок negative. Зверніть увагу на те, що написання з великої літери - важливе
console.log(checkSign(0)); // має повернути рядок zero. Зверніть увагу на те, що написання з великої літери - важливе
*/


// Використовуйте рекурсію для створення зворотного відліку
/*
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1); 
    arr.unshift(n);
    return arr;
  }

  // 
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }

  // 
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
}

console.log(countdown(-1)); // має повернути пустий масив.
console.log(countdown(10)); // має повернути [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(5)); // має повернути [5, 4, 3, 2, 1]
*/


// Використання рекурсії для створення діапазону чисел
/*
Ми визначили функцію під назвою rangeOfNumbers з двома параметрами. 
Функція повинна повернути масив цілих чисел, що починаються з числа, представленого параметром
startNum і закінчується числом, яке представлене параметром endNum. 
Початкове число завжди буде меншим або рівним кінцевому номеру. 
Ваша функція має використовувати рекурсію, викликаючи сама себе, але не повинна використовувати якісь цикли. 
Вона також повинна працювати у випадках, колиstartNum і endNum однакові.
*/
/*
function rangeOfNumbers(startNum, endNum) {
  // if (startNum === endNum) {
  //   return [startNum];
  // } else {
  //   const arr = rangeOfNumbers(startNum, endNum - 1);
  //   arr.push(endNum);
  //   return arr;
  // }

  // variant 2
  // return (startNum === endNum) ? [startNum] : rangeOfNumbers(startNum, endNum - 1).concat(endNum);

  // variant 3
  return startNum === endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
};

console.log(rangeOfNumbers(1, 5)); // повинен повертати [1, 2, 3, 4, 5].
console.log(rangeOfNumbers(6, 9)); // повинен повертати [6, 7, 8, 9].
console.log(rangeOfNumbers(4, 4)); // повинен повертати [4].
*/

