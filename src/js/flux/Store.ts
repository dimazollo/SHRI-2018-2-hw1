import ILooseObject from './interface/ILooseObject';
import Action from './Action';
import HandlerManager from './HandlerManager';
import { fluxChangeEvent } from './interface/eventTypes';

export default class Store extends HandlerManager {
  private state: ILooseObject = {};

  constructor(state?: ILooseObject) {
    super();
    if (state) {
      this.state = state;
    }
  }

  public apply(action: Action) {
    this.state = this.handleAction(this.state, action);
    document.dispatchEvent(new CustomEvent(fluxChangeEvent));
  }

  public setState(newState: ILooseObject) {
    this.state = newState;
  }

  public getState() {
    return this.state;
  }
}
