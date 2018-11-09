import IActionHandler from './interface/IActionHandler';
import Action from './Action';
import ILooseObject from './interface/ILooseObject';

export default class HandlerManager {
  private handlers: {
    [handlerName: string]: IActionHandler;
  } = {};

  protected handleAction(previousState: ILooseObject, action: Action): ILooseObject {
    const handler = this.handlers[action.type];
    if (handler) {
      return handler.handleAction(previousState, action.payload);
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
