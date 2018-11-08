import ILooseObject from './interface/ILooseObject';
import View from './View';

export default class EventEmitter {
  private subscribers: {
    [eventType: string]: Array<View>;
  } = {};

  subscribe(eventType: string, view: View) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(view);
  }

  unsubscribe(eventType: string, view: View) {
    this.subscribers[eventType] =
      this.subscribers[eventType].filter(subscriber => subscriber !== view);
  }

  broadcast(eventType:string, state: ILooseObject) {
    this.subscribers[eventType].forEach(subscriber => subscriber.update(state));
  }
}
