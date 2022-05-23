interface Entry {
  racerId: string;
  time: number;
}

enum EntryType {
  START = "START",
  END = "END",
}

interface StartEntry extends Entry {
  type: EntryType.START;
}

interface EndEntry extends Entry {
  type: EntryType.END;
}

interface MixedEntry extends Entry {
  type: keyof typeof EntryType;
}

interface Results {
  [key: string]: RaceRecord[];
}

interface RaceRecord {
  startTime: number | null;
  endTime: number | null;
}

interface CurrentRaceStatus {
  [key: string]: undefined | number;
}
