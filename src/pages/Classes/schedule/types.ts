import { type Color } from './card/types';

export type Schedule = Record<
  string,
  Array<{
    time: string;
    day: string;
    modality: string;
    color: Color;
    category: string;
  }>
>;

export interface Class {
  id: number;
  attributes: {
    time: string;
    day: string;
    modality: string;
    color: Color;
    category: string;
  };
}

export interface IuseSchedule {
  classes: Schedule;
}
