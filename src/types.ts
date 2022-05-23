export interface Entry {
  racerId: string;
  time: number;
}

export enum EntryType {
  START,
  END,
}

export interface StartEntry extends Entry {
  type: EntryType.START;
}

export interface EndEntry extends Entry {
  type: EntryType.END;
}

export interface MixedEntry extends Entry {
  type: EntryType;
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
