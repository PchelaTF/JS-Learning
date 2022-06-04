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
        item.addEventListener('click', () => {
            // modal.classList.add('show');
            // modal.classList.remove('hide');

            // через toggle
            modal.classList.toggle('show');

            document.body.style.overflow = 'hidden';
        });
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
});