import { fluxChangeEvent } from './interface/eventTypes';
import Store from './Store';
import ILooseObject from './interface/ILooseObject';

export default class View {
  private rootElement: Element;
  private store: Store | null = null;
  private render: (state: ILooseObject) => Element;

  constructor(rootElementSelector: string, drawFunction: (state: ILooseObject) => Element) {
    const rootElement = document.querySelector(rootElementSelector);
    if (rootElement) {
      this.rootElement = rootElement;
    } else {
      throw new Error('Can\'t find element using selector: ' + rootElementSelector);
    }
    this.render = drawFunction;
    document.addEventListener(fluxChangeEvent, () => {
      this.update();
    });
  }

  setStore(store: Store) {
    this.store = store;
  }

  connectToFlux(store: Store) {
    this.setStore(store);
    this.update();
  }

  update(): void {
    if (this.store) {
      const newView = this.render(this.store.getState());
      while (this.rootElement.firstChild) {
        this.rootElement.removeChild(this.rootElement.firstChild);
      }
      this.rootElement.insertBefore(newView, null);
    } else {
      throw new Error('Store has not been set!');
    }
  }
}
