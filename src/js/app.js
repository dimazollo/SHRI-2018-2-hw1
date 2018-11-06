"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataRequester_1 = require("./dataRequester");
const templates_1 = require("./templates");
(() => {
    const t = dataRequester_1.getEventsObject();
    let events;
    t.then((data) => {
        events = data.events;
        const tileContainer = document.querySelector('#events');
        if (tileContainer) {
            events.forEach((event) => {
                templates_1.generateTile(tileContainer, event);
            });
        }
    });
    // Open menu from hamburger icon
    const hamburgerMenu = document.querySelector('.header__menu-toggle');
    const headerMenu = document.querySelector('.header__header-menu');
    if (hamburgerMenu && headerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            headerMenu.classList.toggle('header__header-menu_slide_out');
        });
        window.addEventListener('resize', () => {
            headerMenu.classList.remove('header__header-menu_slide_out');
        });
    }
    else {
        throw new Error('Hamburger or header menu has not been found');
    }
})();
//# sourceMappingURL=app.js.map