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
      handleAction(previousState, payload) {
        const newState = Object.assign({}, previousState);
        newState.events = newState.events.filter(
          (event: ISmartHouseEvent) => event.id !== payload.eventId);
        return newState;
      },
    },
  },
  {
    type: 'set-events',
    handler: {
      handleAction(previousState, eventsObject) {
        const newState = Object.assign({}, previousState);
        newState.events = eventsObject.events;
        return newState;
      },
    },
  },
];
