export interface ISmartHouseEvent {
  id: string;
  type: string;
  title: string;
  source: string;
  time: string;
  description: string | null;
  icon: string;
  data: any;
  size: string;
}

export interface IEventsData {
  events: Array<ISmartHouseEvent>;
}
