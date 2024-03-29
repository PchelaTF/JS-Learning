import { cnangeModalState } from "./modules/changeModalState";
import { forms } from "./modules/forms";
import { images } from "./modules/images";
import { modal } from "./modules/modal";
import { tabs } from "./modules/tabs";
import { timer } from "./modules/timer";
import "./slider";

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let deadline = '2022-10-01';

    modal();

    const glazingTabs = tabs({
        header: '.glazing_slider',
        tabsSelector: '.glazing_block a',
        tabsContentSelector: '.glazing_content',
        activeClass: "active",
        display: "block"
    });

    const decorationTabs = tabs({
        header: '.decoration_slider',
        tabsSelector: '.no_click a',
        tabsContentSelector: '.decoration_content > div > div',
        activeClass: "after_click",
        display: "block"
    });

    forms(modalState);
guk
    const calcTabs = tabs({
        header: '.balcon_icons',
        tabsSelector: '.balcon_icons_img img',
        tabsContentSelector: '.big_img > img',
        activeClass: "do_image_more",
        display: "inline-block"
    });

    cnangeModalState(modalState);

    timer('.container1', deadline);

    images();
}); 