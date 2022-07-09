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

    // создадим функцию get запросов
    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) { // в ручном режиме выкидываем ошибку
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

    // use libriary axios
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    // альтернативное создание карточек без использования классов
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector('.menu .container').append(element);
    //     });
    // }

    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu .container'
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     14,
    //     '.menu .container',
    //     'menu__item'
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     21,
    //     '.menu .container',
    //     'menu__item'
    // ).render();

    // ? METHOD POST 

    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/form/spinner.svg',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // сделаем функцию для общения с сервером
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
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

            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // * преобразим формдату
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

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
            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'applecation/json'
            //     },
            //     // body: formData
            //     body: JSON.stringify(object)
            // })
            postData('http://localhost:3000/requests', json) // JSON.stringify(object)
                // .then(data => data.text())
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

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    // ? Slider 
    // * более простой слайдер

    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total');
    let slidesIndex = 1;

    // * пересенные для более сожного слайдера
    const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesFild = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;

    // showSlides(slidesIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {

    //     if (n > slides.length) {
    //         slidesIndex = 1;
    //     }

    //     if (n < 1) {
    //         slidesIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slidesIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slidesIndex}`;
    //     } else {
    //         current.textContent = slidesIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slidesIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    // * более сложный слайдер

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slidesIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slidesIndex;
    }

    slidesFild.style.width = 100 * slides.length + '%';
    slidesFild.style.display = 'flex';
    slidesFild.style.transsition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function widthReplaceDeleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {
        if (offset == widthReplaceDeleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += widthReplaceDeleteNotDigits(width);
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == slides.length) {
            slidesIndex = 1;
        } else {
            slidesIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slidesIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = widthReplaceDeleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= widthReplaceDeleteNotDigits(width);
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == 1) {
            slidesIndex = slides.length;
        } else {
            slidesIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slidesIndex - 1].style.opacity = 1;
    });

    // * dots for slider
    const slider = document.querySelector('.offer__slider');
    const indicators = [];

    slider.style.position = 'relative';

    const dots = document.createElement('ol');
    dots.classList.add('carousel-indicators');

    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.append(dot);

        indicators.push(dot);
    }

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slidesIndex = slideTo;

            offset = /*+width.slice(0, width.length - 2)*/ +width.replace(/\D/g, '') * (slideTo - 1);

            slidesFild.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slidesIndex}`;
            } else {
                current.textContent = slidesIndex;
            }

            indicators.forEach(dot => dot.style.opacity = '.5');
            indicators[slidesIndex - 1].style.opacity = 1;
        });
    });

    // ? Calc

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            el.classList.remove(activeClass);

            if (el.getAttribute('id') === localStorage.getItem('sex')) {
                el.classList.add(activeClass);
            }

            if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                el.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInfarmotion(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        // ! Делегирование событий не всегда удобно использовать. В данном случае клик на подложку будет приводит к багу
        // document.querySelector(parentSelector).addEventListener('click', (e) => {
        //     if (e.target.getAttribute('data-ratio')) {
        //         ratio = +e.target.getAttribute('data-ratio');
        //     } else {
        //         sex = e.target.getAttribute('id');
        //     }

        //     elements.forEach(elem => {
        //         elem.classList.remove(activeClass);
        //     });

        //     e.target.classList.add(activeClass);

        //     calcTotal();
        // });

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInfarmotion('#gender div', 'calculating__choose-item_active');
    getStaticInfarmotion('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInfarmotion(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInfarmotion('#height');
    getDynamicInfarmotion('#weight');
    getDynamicInfarmotion('#age');
});