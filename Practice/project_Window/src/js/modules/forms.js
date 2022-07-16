export const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

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