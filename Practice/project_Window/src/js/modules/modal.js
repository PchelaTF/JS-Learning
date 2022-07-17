export const modal = () => {

    function initModal(modalSelector, modalOpenBtn, modalCloseBtn, closeClickOverlay = true) {
        const openBtn = document.querySelectorAll(modalOpenBtn);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelector(modalCloseBtn);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        openBtn.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => window.style.display = 'none');

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                document.body.style.marginRight = `${scroll}px`;
            });
        });

        const closeModal = function () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(window => window.style.display = 'none');

            document.body.style.marginRight = `0px`;
        };

        closeBtn.addEventListener('click', (e) => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                windows.forEach(window => window.style.display = 'none');

                document.body.style.marginRight = `0px`;
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

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    initModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    initModal('.popup', '.phone_link', '.popup .popup_close');

    openModalByTime('.popup', 60000);

    initModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    initModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    initModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
};