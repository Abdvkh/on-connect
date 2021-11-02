export enum Status {
  FullySatisfied = 'Тулик канаотлантирилган'
}

export interface Act {
  id: string;
  download_date: Date;
  action_date: Date;
  title: string;
  status: Status;
}
