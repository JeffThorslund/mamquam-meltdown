import { mergeAndSortEntries } from "./mergeAndSortEntries";
import { createRaces, createResults } from "./createMaps";
import { pushResultAndUpdateRaces } from "./pushResultAndUpdateRaces";
import {
  Entry,
  EndEntry,
  StartEntry,
  MixedEntry,
  EntryType,
} from "../../types";

export const parseRecords = (starts: Entry[], ends: Entry[]) => {
  const typedStarts: StartEntry[] = starts.map((start) => ({
    ...start,
    type: EntryType.START,
  }));
  const typedEnds: EndEntry[] = ends.map((end) => ({
    ...end,
    type: EntryType.END,
  }));

  //merge entries
  const mergedEntries = mergeAndSortEntries(typedStarts, typedEnds);

  // create dictionaries
  const races = createRaces(mergedEntries);
  const results = createResults(mergedEntries);

  // push to `results` while mutating race
  mergedEntries.forEach((entry: MixedEntry) => {
    pushResultAndUpdateRaces(entry, races, results);
  });

  // finish unfinished races
  for (const racerId in races) {
    const currentRaceStatus = races[racerId];

    if (currentRaceStatus) {
      results[racerId].push({ startTime: currentRaceStatus, endTime: null });
    }
  }

  return results;
};
