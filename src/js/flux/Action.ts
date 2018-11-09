import ILooseObject from './interface/iLooseObject';

export default class Action {
  private readonly _type: string = '';
  private readonly _payload: ILooseObject = {};

  constructor(type: string, payload?: ILooseObject) {
    this._type = type;
    if (payload) {
      this._payload = payload;
    }
  }

  get type() {
    return this._type;
  }

  get payload() {
    return this._payload;
  }
}
