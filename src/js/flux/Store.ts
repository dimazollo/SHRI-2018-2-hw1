import ILooseObject from './interface/ILooseObject';
import Action from './Action';
import HandlerManager from './HandlerManager';
import EventEmitter from './EventEmitter';

export default class Store extends HandlerManager {
  private state: ILooseObject = {};
  public eventEmitter: EventEmitter = new EventEmitter();

  constructor(state?: ILooseObject) {
    super();
    if (state) {
      this.state = state;
    }
  }

  public apply(action: Action) {
    this.state = this.handleAction(this.state, action);
    this.eventEmitter.broadcast(
      'change',
      Object.assign({}, this.state),
    );
  }

  public getState() {
    return this.state;
  }
}
