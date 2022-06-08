"use strict";

window.addEventListener('DOMContentLoaded', () => {


    // ? TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // ? TIMER

    const deadline = '2022-07-02';
    // const deadline = '2022-05-02';

    function getTimeRemaining(endtime) {

        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // ? MODAL WiNDOW

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    // modalCloseBtn = document.querySelector('[data-close]'); // сделаем что бы можно было использовать динамические файлы 

    // modalTrigger.addEventListener('click', () => {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    // });

    modalTrigger.forEach(item => {
        // item.addEventListener('click', () => {
        //     // modal.classList.add('show');
        //     // modal.classList.remove('hide');

        //     // через toggle
        //     // modal.classList.toggle('show');

        //     // document.body.style.overflow = 'hidden';

        //     openModal();
        item.addEventListener('click', openModal);
        // });
    });

    // modalCloseBtn.addEventListener('click', () => {
    //     // modal.classList.add('hide');
    //     // modal.classList.remove('show');

    //     // через toggle
    //     modal.classList.toggle('show');

    //     document.body.style.overflow = '';
    // });

    // Do not repeat yor self 
    // если код повторяется, лучше всего использовать функции

    function openModal() {
        // modal.classList.toggle('show');

        modal.classList.add('show');
        modal.classList.remove('hide');

        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        // modal.classList.toggle('show');

        modal.classList.add('hide');
        modal.classList.remove('show');

        document.body.style.overflow = '';
    }

    // modalCloseBtn.addEventListener('click', closeModal); // сделаем что бы можно было использовать динамические файлы 


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {   // сделаем что бы можно было использовать динамические файлы 
            // modal.classList.toggle('show');
            // document.body.style.overflow = '';

            closeModal();
        }
    });

    // закрытие модального окна при нажатии клавиши Esc
    // && только при открытом модальном окне 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // установим через которое модальное окно будет показыватся на сайте 
    // для этого сделаем функцию открытия модального окна строка 43
    const modalTimerId = setTimeout(openModal, 20000);

    // делаем что бы при пролистывании страницы до конца выскакиволо модальное окно
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    //         openModal();
    //     }
    // });

    window.addEventListener('scroll', showModalByScroll);

    // ? USE CLASSES

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { // добавим сюда rest оператор
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; // это будезт массив
            this.parentSelector = document.querySelector(parentSelector);
            this.transfer = 35;
            this.changeToUAN();
        }

        changeToUAN() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            // довами класс по умолчанию. Для случаев если он не будет передан в аргумент
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); // добавление к элементу(div на 25й) и добавляем к нему каждый класс который будет нажодится в массиве
            }

            // отредактируем верстку чуть-чуть
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parentSelector.append(element);
        }
    }

    // const div = new MenuCard();
    // div.render();

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render();

    // ? METHOD POST 

    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/form/spinner.svg',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // const statusMessage = document.createElement('div');
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            // statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            // будем использовать более гибкую команду для вставки statusMessage 
            form.insertAdjacentElement('afterend', statusMessage);

            // ? заменим XMLHttpRequest на Fetch();
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            // ! при использовании связки XMLHttpRequest + form-data заголовок ставанавливать не нужно, он устанавливается автоматически

            // формат JSON
            // request.setRequestHeader('Content-type', 'applecation/json');

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            // const json = JSON.stringify(object);

            // request.send(formData);
            // request.send(json);

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         // statusMessage.textContent = message.sucsess;

            //         showThanksModal(message.sucsess);

            //         // очистка формы 
            //         form.reset();

            //         // убираем сообщение об "успехе"
            //         // setTimeout(() => {
            //         //     statusMessage.remove();
            //         // }, 2000);
            //         statusMessage.remove();
            //     } else {
            //         // statusMessage.textContent = message.failure;
            //         showThanksModal(message.failure);
            //     }
            // });

            // ? заменим XMLHttpRequest на Fetch();
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'applecation/json'
                },
                // body: formData
                body: JSON.stringify(object)
            }).then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.sucsess);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

        });
    }

    // дабавим красивое оповещение пользователя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>    
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');

            closeModal();
        }, 4000);
    }
});