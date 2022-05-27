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
  missedGates: MissedGates;
  type: EntryType.END;
}

export type MissedGates = number;

export type MixedEntry = StartEntry | EndEntry;

export enum EntryType {
  START,
  END,
}

export interface RacerInfoMap {
  [key: RacerId]: RacerInfoEntry;
}

export interface RacerInfoEntry {
  name: RacerName;
  gender: RacerGender;
}

export enum RacerGender {
  Male = "MALE",
  Female = "FEMALE",
  None = "NONE",
}

export type RacerName = string;

export interface Results {
  [key: RacerId]: RaceRecord[];
}

export interface RaceRecord {
  startTime: number | null;
  endTime: number | null;
  missedGates: MissedGates;
}

export interface CurrentRaceStatus {
  [key: RacerId]: RaceStatus;
}

export type RaceStatus = undefined | number;

export interface RaceRosterElement extends RaceRecord {
  racerId: RacerId;
  racerName: RacerName;
  totalTime: number | string;
  adjustedTime: number | string;
}
