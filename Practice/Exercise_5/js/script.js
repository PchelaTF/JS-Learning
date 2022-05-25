/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promo_adv = document.querySelector('.promo__adv');
const promo_advImage = promo_adv.querySelectorAll('img');
// Можно было сделать через .... querySelectorAll('.promo__adv img');

// promo_adv.remove(); // Удалит полностью со страницы
promo_advImage.forEach(item => {
    item.remove();
});

// через обычную функцию
promo_advImage.forEach(function (item) {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const promo_genre = document.querySelector('.promo__genre');

promo_genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//     Реализовать только при помощи JS
const promo_bg = document.querySelector('.promo__bg');

promo_bg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//     Отсортировать их по алфавиту
// + 5) Добавить нумерацию выведенных фильмов
const promo_interactiveList = document.querySelector('.promo__interactive-list');
const promo_interactiveItem = promo_interactiveList.querySelectorAll('.promo__interactive-item'); // Не нужен по факту.

promo_interactiveList.innerHTML = ''; // очищение элемента

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promo_interactiveList.innerHTML += `
     <li class="promo__interactive-item">
        ${i + 1}. ${film}
        <div class="delete"></div>
     </li>
    `;
});

// a = a + 1;
// a += 1;

promo_interactiveItem.innerHTML = ''; // Не сработает из-за псевдомассива