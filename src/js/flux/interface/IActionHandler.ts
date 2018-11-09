import ILooseObject from './ILooseObject';

export default interface IActionHandler {
  handleAction: (previousState: ILooseObject, actionPayload: ILooseObject) => ILooseObject;
}
