"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    // modalTrigger.addEventListener('click', () => {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    // });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });
});