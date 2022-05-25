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
    if (!entry.time) {
      console.log(entry, "dns");
    }

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

    if (!entry.time) {
      console.log(entry, "succ");
    }

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: entry.time,
    });

    return;
  }

  // did not finish
  if (entryType === EntryType.START && currentRaceStatus) {
    races[entry.racerId] = entryTime;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: null,
    });
  }

  return;
};
