"use strict";

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

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
            item.classList.remove(activeClass);
        });
    }

    // функция которая будет показывать табы
    function showTabsContent(i = 0) { // i это конкретный элемен. i = 0 параметры по умолчанию. По умолчанию, когда функция вызыв. без аргумента
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;