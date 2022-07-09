"use strict";

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
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
        item.addEventListener('click', () => openModal(modalSelector));
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

    // !


    // modalCloseBtn.addEventListener('click', closeModal); // сделаем что бы можно было использовать динамические файлы 


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {   // сделаем что бы можно было использовать динамические файлы 
            // modal.classList.toggle('show');
            // document.body.style.overflow = '';

            closeModal(modalSelector);
        }
    });

    // закрытие модального окна при нажатии клавиши Esc
    // && только при открытом модальном окне 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    // делаем что бы при пролистывании страницы до конца выскакиволо модальное окно
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    //         openModal();
    //     }
    // });

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export { openModal, closeModal };