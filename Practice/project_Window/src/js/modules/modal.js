export const modal = () => {

    function initModal(modalSelector, modalOpenBtn, modalCloseBtn, closeClickOverlay = true) {
        const openBtn = document.querySelectorAll(modalOpenBtn);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelector(modalCloseBtn);
        const windows = document.querySelectorAll('[data-modal]');

        openBtn.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => window.style.display = 'none');

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = function () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(window => window.style.display = 'none');
        };

        closeBtn.addEventListener('click', (e) => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                windows.forEach(window => window.style.display = 'none');
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

    initModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    initModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    initModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
};