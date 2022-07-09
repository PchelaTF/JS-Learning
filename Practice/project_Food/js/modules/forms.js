"use strict";

import { openModal, closeModal } from './modal';
import { postData } from '../services/services';

function forms(modalSelector, modalTimerId) {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/form/spinner.svg',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

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

        openModal(modalSelector, modalTimerId);

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

            closeModal(modalSelector);
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

export default forms;