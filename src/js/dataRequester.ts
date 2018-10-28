import { IEventsData } from './interfaces';

export async function getEventsObject() : Promise<IEventsData> {
  return await fetch('data/events.json')
      .then(response =>
        response
          .text()
          .then(text => JSON.parse(text)));
}
