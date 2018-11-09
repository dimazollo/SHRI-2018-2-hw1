import ILooseObject from './ILooseObject';

export default interface IEventHandler {
  handleEvent: (eventType: string, eventData: ILooseObject) => void;
}
