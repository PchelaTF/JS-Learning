export const modal = () => {

    function initModal(modalSelector, modalOpenBtn, modalCloseBtn) {
        const openBtn = document.querySelectorAll(modalOpenBtn);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelector(modalCloseBtn);

        openBtn.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function openModalByTime(modalSelector, time) {
        setTimeout(() => {
            const modal = document.querySelector(modalSelector);

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    initModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    initModal('.popup', '.phone_link', '.popup .popup_close');

    openModalByTime('.popup', 60000);
};