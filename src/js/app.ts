import { ISmartHouseEvent } from './interfaces';
import { getEventsObject } from './dataRequester';
import { generateTile } from './templates';
import View from './flux/View';
import MyFlux from './flux/MyFlux';
import { actions, state } from './store';
import Action from './flux/Action';


const eventsComponent: View = new View('#events', (storeState) => {
  const newElement = document.createElement('div');
  newElement.classList.add('main__events-grid');
  storeState.events.forEach((event: ISmartHouseEvent) =>
    newElement.insertBefore(generateTile(event), null));
  return newElement;
});

const myFlux = new MyFlux(state, actions, [eventsComponent]);
myFlux.dispatch(new Action('load-events', {}));

getEventsObject().then((data) => {
  myFlux.dispatch(new Action('set-events', data));
});

// Open menu from hamburger icon
const hamburgerMenu: HTMLElement | null = document.querySelector('.header__menu-toggle');
const headerMenu: HTMLElement | null = document.querySelector('.header__header-menu');

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

export { myFlux };
