import { MixedEntry, CurrentRaceStatus, Results, EntryType } from "../../types";

export const pushResultAndUpdateRaces = (
  entry: MixedEntry,
  races: CurrentRaceStatus,
  results: Results
): void => {
  const entryType = entry.type;
  const entryTime = entry.time;
  const currentRaceStatus = races[entry.racerId];

  // did not start
  if (entryType === EntryType.END && !currentRaceStatus) {
    results[entry.racerId].push({
      startTime: null,
      endTime: entry.time,
    });

    return;
  }

  // successful start
  if (entryType === EntryType.START && !currentRaceStatus) {
    races[entry.racerId] = entryTime;

    return;
  }

  // successful finish
  if (entryType === EntryType.END && currentRaceStatus) {
    races[entry.racerId] = undefined;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: entry.time,
    });

    return;
  }

  if (entryType === EntryType.START && currentRaceStatus) {
    races[entry.racerId] = entryTime;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: null,
    });
  }

  return;
};
