// получает информацию от Actions
import Store from './Store';
import Action from './Action';

export default class Dispatcher {
  private readonly instance: Dispatcher | null = null;
  private stores: Store[] = [];

  constructor(...stores: Store[]) {
    if (!this.instance) {
      this.instance = this;
      stores.push(...stores);
    } else {
      return this.instance;
    }
  }

  public dispatch(action: Action): void {
    this.stores.forEach(store => store.apply(action));
  }

  public registerStore(...stores: Store[]) {
    this.stores.push(...stores);
  }
}
