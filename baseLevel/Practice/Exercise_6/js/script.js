/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () =>{ //Эта хрень запустит скрипт, только когда DOM страницы будет заргужен
    
    // обьект с которым работаем
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // обьявлем переменные
    const promo_adv = document.querySelectorAll('.promo__adv img');
    const promo_genre = document.querySelector('.promo__genre');
    const promo_bg = document.querySelector('.promo__bg');
    const promo_interactiveList = document.querySelector('.promo__interactive-list');
    const formAdd = document.querySelector('.add');
    const inputAdd = formAdd.querySelector('.adding__input');
    const checkbox = formAdd.querySelector('[type="checkbox"]');
    
    // пишем функционал
    // удаление рекламы 
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    deleteAdv(promo_adv);

    // делаем изменения 
    const makeChanges = () => {
        promo_genre.textContent = 'драма';
    
        promo_bg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';
    };

    makeChanges();

    // функция сортировки
    const sortArr = (arr) => {
        arr.sort();
    };
    
    sortArr(movieDB.movies);

    // функция добавления фильмов интерактив
    function createMovieList(films, parents) {
        parents.innerHTML = ''; // очищение элемента
        sortArr(films);
        
        films.forEach((film, i) => {
            parents.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        // при клике на корзинку удаляет фильм
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parents); // список будет заново перестраиваться 
            });
        });
    } 
    
    createMovieList(movieDB.movies, promo_interactiveList);

    // добавление новыъ фильмов через форму на сайте
    formAdd.addEventListener('submit', event => {
        event.preventDefault();

        let newFilm = inputAdd.value;
        const favorite = checkbox.checked;

        if (newFilm) {  // делаем так, что бы не попадала пустая строка if (true)

            if (newFilm.length > 21) { // если строка больше 21 символа будет выводить ...
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, promo_interactiveList);
        }

        event.target.reset(); // сбрасываем форму
    });

});
