import IActionHandler from './flux/interface/IActionHandler';
import ILooseObject from './flux/interface/ILooseObject';
import { ISmartHouseEvent } from './interfaces';

export const state: ILooseObject = {
  events: [],
};

export const actions: Array<{type: string, handler: IActionHandler}> = [
  {
    type: 'close-event',
    handler: {
      handleAction(storeState, payload) {
        storeState.events = storeState.events.filter(
          (event: ISmartHouseEvent) => event.id !== payload.eventId);
        return storeState;
      },
    },
  },
  {
    type: 'set-events',
    handler: {
      handleAction(storeState, eventsObject) {
        storeState.events = eventsObject.events;
        return storeState;
      },
    },
  },
];
