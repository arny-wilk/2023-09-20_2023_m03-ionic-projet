import {BaseEntity} from "./BasEntity";

export interface Schedule {
  id: number;
  date: string;
  dateReadable: string;
  tracks: [{title: string}];
  timeslots: [{startTime: string, endTime: string, sessions: [id: BaseEntity]}]
}
