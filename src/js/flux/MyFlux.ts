import IActionHandler from './interface/IActionHandler';
import ILooseObject from './interface/ILooseObject';
import Store from './Store';
import Dispatcher from './Dispatcher';
import Action from './Action';
import View from './View';

export default class MyFlux {
  private readonly store: Store;
  private readonly dispatcher: Dispatcher = new Dispatcher();

  constructor(state: ILooseObject,
    actions: Array<{type: string, handler: IActionHandler}>,
    views: Array<View>,
  ) {
    this.store = new Store(state);
    this.dispatcher.registerStore(this.store);
    actions.forEach(action =>
      this.store.registerHandler(action.type, action.handler));
    views.forEach(view => view.connectToFlux(this.store));
  }

  public dispatch(action: Action) {
    this.dispatcher.dispatch(action);
  }
}
