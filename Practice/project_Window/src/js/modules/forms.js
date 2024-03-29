import { checkNumInputs } from './checkNumInputs';

export const forms = (state) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        sucsess: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так....'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
    };

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            form.appendChild(statusMessage);

            const formData = new FormData(form);

            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.sucsess;
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                }).finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 4000);
                });
        });
    });
};