import ILooseObject from './interface/ILooseObject';

export default class View {
  private rootElement: Element;
  private render: (state: ILooseObject) => Element;

  constructor(rootElementSelector: string, drawFunction: (state: ILooseObject) => Element) {
    const rootElement = document.querySelector(rootElementSelector);
    if (rootElement) {
      this.rootElement = rootElement;
    } else {
      throw new Error('Can\'t find element using selector: ' + rootElementSelector);
    }
    this.render = drawFunction;
  }

  update(state: ILooseObject): void {
    const newView = this.render(state);
    while (this.rootElement.firstChild) {
      this.rootElement.removeChild(this.rootElement.firstChild);
    }
    this.rootElement.insertBefore(newView, null);
  }
}
