import { ISmartHouseEvent } from './interfaces';
import { getEventsObject } from './dataRequester';
import { generateTile } from './templates';

(() => {
  const t = getEventsObject();
  let events : Array<ISmartHouseEvent>;
  t.then((data: any) => {
    events = data.events;
    const tileContainer : HTMLElement | null = document.querySelector('#events');
    if (tileContainer) {
      events.forEach((event) => {
        generateTile(tileContainer, event);
      });
    }
  });

  // Open menu from hamburger icon
  const hamburgerMenu : HTMLElement | null = document.querySelector('.header__menu-toggle');
  const headerMenu : HTMLElement | null = document.querySelector('.header__header-menu');

  if (hamburgerMenu && headerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      headerMenu.classList.toggle('header__header-menu_slide_out');
    });
    window.addEventListener('resize', () => {
      headerMenu.classList.remove('header__header-menu_slide_out');
    });
  } else {
    throw new Error('Hamburger or header menu has not been found');
  }
})();
