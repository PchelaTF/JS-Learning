import { forms } from "./modules/forms";
import { modal } from "./modules/modal";
import { tabs } from "./modules/tabs";
import "./slider";

window.addEventListener('DOMContentLoaded', () => {

    modal();
    const glazingTabs = tabs({
        header: '.glazing_slider',
        tabsSelector: '.glazing_block a',
        tabsContentSelector: '.glazing_content',
        activeClass: "active"
    });
    const decorationTabs = tabs({
        header: '.decoration_slider',
        tabsSelector: '.no_click a',
        tabsContentSelector: '.decoration_content > div > div',
        activeClass: "after_click"
    });
    forms();
});