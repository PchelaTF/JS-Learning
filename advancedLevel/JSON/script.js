"use strict";

// JSON (англ. JavaScript Object Notation, обычно произносится как /ˈdʒeɪsən/ JAY-sən[3]) — текстовый формат обмена данными, основанный на JavaScript. Как и многие другие текстовые форматы, JSON легко читается людьми. Формат JSON был разработан Дугласом Крокфордом[4].

const persone = {
    name: 'Alex',
    tel: '+380950000000',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.parse(JSON.stringify(persone)));

// JSON.stringify(persone) - из обьекта в JSON формат

// JSON.parse(JSON.stringify(persone)) - из JSON формата в обьек


// Глубокое копирование объектов
// Глубокая копия продублирует каждый объект на пути копирования. Оригинал и скопированный объект не будут иметь ничего общего и совместно использоваться не будут, в общем, это будет копия оригинала. А вот и решение проблемы с который мы столкнулись при использовании Object.assign(). Давайте посмотрим.
// Использование JSON.parse(JSON.stringify(object));
// Этот подход решает предыдущую проблему. Теперь newObj.b это копия, а не отсылка к оригинальному объекту! Вот так делается глубокое копирование объектов.

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);