import IActionHandler from './interface/IActionHandler';
import Action from './Action';
import ILooseObject from './interface/ILooseObject';
import { fluxChangeEvent } from './interface/eventTypes';

export default class HandlerManager {
  private handlers: {
    [handlerName: string]: IActionHandler;
  } = {};

  protected handleAction(previousState: ILooseObject, action: Action): ILooseObject {
    const handler = this.handlers[action.type];
    if (handler) {
      const newState: ILooseObject = handler.handleAction(previousState, action.payload);
      // document.dispatchEvent(new CustomEvent(fluxChangeEvent));
      return newState;
    }
    return previousState;
  }

  public registerHandler(actionType: string, handler: IActionHandler) {
    if (!this.handlers[actionType]) {
      this.handlers[actionType] = handler;
    } else {
      throw new Error('Action with type "' + actionType + '" has been already registered');
    }
  }

  public unregisterHandler(actionType: string) {
    delete this.handlers[actionType];
  }
}
