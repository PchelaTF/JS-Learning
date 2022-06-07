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
                    // statusMessage.textContent = message.sucsess;

                    showThanksModal(message.sucsess);

                    // очистка формы 
                    form.reset();

                    // убираем сообщение об "успехе"
                    // setTimeout(() => {
                    //     statusMessage.remove();
                    // }, 2000);
                    statusMessage.remove();
                } else {
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                }
            });
        });
    }

    // дабавим красивое оповещение пользователя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        // openModal();
        const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal');
        function openModal() {
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            // clearInterval(modalTimerId);
        }
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal_dialog');
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

            // closeModal();

            function closeModal() {
                modal.classList.toggle('show');
                document.body.style.overflow = '';
            }

            closeModal();

        }, 4000);
    }
});
