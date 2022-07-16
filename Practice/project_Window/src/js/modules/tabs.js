export const tabs = (options) => {
    const header = document.querySelector(options.header);
    const tab = document.querySelectorAll(options.tabsSelector);
    const content = document.querySelectorAll(options.tabsContentSelector);

    function hideTabsContent() {
        tab.forEach(item => item.classList.remove(options.activeClass));
        tab.forEach(item => item.parentNode.classList.remove(options.activeClass));
        content.forEach(item => item.style.display = 'none');
    }

    function showTabsContant(i = 0) {
        tab[i].classList.add(options.activeClass);
        tab[i].parentNode.classList.add(options.activeClass);
        content[i].style.display = 'block';
    }

    hideTabsContent();
    showTabsContant();

    header.addEventListener('click', e => {
        const target = e.target;

        // if (target &&
        //     (target.classList.contains(options.tabsSelector.replace(/\./, '')) ||
        //         target.parentNode.classList.contains(options.tabsSelector.replace(/\./, '')))) {
        //     tab.forEach((item, i) => {
        //         if (target == item || target.parentNode == item) {
        //             hideTabsContent();
        //             showTabsContant(i);
        //         }
        //     });
        // }

        if (target) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContant(i);
                }
            });
        }
    });
};