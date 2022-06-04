"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

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
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
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
});