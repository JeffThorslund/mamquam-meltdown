import { MixedEntry, CurrentRaceStatus, Results, EntryType } from "../../types";
import { pushRaceFinishToUnfinishedRace } from "./pushRaceFinishToUnfinishedRace";

export const pushResultAndUpdateRaces = (
  entry: MixedEntry,
  races: CurrentRaceStatus,
  results: Results
): void => {
  const { type, time, racerId } = entry;

  const currentRaceStatus = races[entry.racerId];

  // did not start
  if (type === EntryType.END && !currentRaceStatus) {
    results[racerId].push({
      startTime: null,
      endTime: time,
      missedGates: entry.missedGates,
    });

    return;
  }

  // successful start
  if (type === EntryType.START && !currentRaceStatus) {
    races[racerId] = time;

    return;
  }

  // successful finish
  if (type === EntryType.END && currentRaceStatus) {
    races[racerId] = undefined;

    results[racerId].push({
      startTime: currentRaceStatus,
      endTime: time,
      missedGates: entry.missedGates,
    });

    return;
  }

  // did not finish
  if (type === EntryType.START && currentRaceStatus) {
    races[racerId] = time;

    pushRaceFinishToUnfinishedRace(results, racerId, currentRaceStatus);
  }

  return;
};
