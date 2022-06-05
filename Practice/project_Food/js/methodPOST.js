"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Forms
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            // ! при использовании связки XMLHttpRequest + form-data заголовок ставанавливать не нужно, он устанавливается автоматически

            // формат JSON
            request.setRequestHeader('Content-type', 'applecation/json');

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            // request.send(formData);
            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.sucsess;

                    // очистка формы 
                    form.reset();

                    // убираем сообщение об "успехе"
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
});
