import ILooseObject from './interface/ILooseObject';
import IEventHandler from './interface/IEventHandler';

export default class EventEmitter {
  private subscribers: {
    [eventType: string]: Array<IEventHandler>;
  } = {};

  subscribe(eventType: string, subscriber: IEventHandler) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(subscriber);
  }

  unsubscribe(eventType: string, subscriberToRemove: IEventHandler) {
    this.subscribers[eventType] =
      this.subscribers[eventType].filter(subscriber => subscriber !== subscriberToRemove);
  }

  broadcast(eventType: string, state: ILooseObject) {
    this.subscribers[eventType].forEach(subscriber => subscriber.handleEvent(eventType, state));
  }
}
