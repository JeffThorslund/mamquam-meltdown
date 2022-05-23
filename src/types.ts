export type CsvData = string;

export type CsvRow = string[];

export interface Entry {
  racerId: RacerId;
  time: Time;
}

export type RacerId = string;

export type Time = number;

export interface StartEntry extends Entry {
  type: EntryType.START;
}

export interface EndEntry extends Entry {
  type: EntryType.END;
}

export interface MixedEntry extends Entry {
  type: EntryType;
}

export enum EntryType {
  START,
  END,
}

export interface Results {
  [key: string]: RaceRecord[];
}

export interface RaceRecord {
  startTime: number | null;
  endTime: number | null;
}

export interface CurrentRaceStatus {
  [key: string]: RaceStatus;
}

export type RaceStatus = undefined | number;
