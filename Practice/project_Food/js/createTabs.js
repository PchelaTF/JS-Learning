"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    // скрываем все не нужные табы 
    function hideTabsContent() {
        // переберераем полученный псевдомассив. Через forEach
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // удаляем класс активности у каждого таба
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // функция которая будет показывать табы
    function showTabsContent(i = 0) { // i это конкретный элемен. i = 0 параметры по умолчанию. По умолчанию, когда функция вызыв. без аргументп
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
});