import { mergeAndSortEntries } from "./mergeAndSortEntries";
import { createRaces, createResults } from "./createMaps";
import { pushResultAndUpdateRaces } from "./pushResultAndUpdateRaces";
import {
  CsvData,
  EndEntry,
  EntryType,
  MixedEntry,
  StartEntry,
} from "../../types";
import { parseAndTypeEntries } from "./parseAndTypeEntries";

export const buildResults = (starts: CsvData, ends: CsvData) => {
  // parse start and end strings into entries
  const typedStarts: StartEntry[] = parseAndTypeEntries<EntryType.START>(
    starts,
    EntryType.START
  );

  const typedEnds: EndEntry[] = parseAndTypeEntries<EntryType.END>(
    ends,
    EntryType.END
  );

  //merge entries
  const mergedEntries = mergeAndSortEntries(typedStarts, typedEnds);

  console.log(mergedEntries);

  // create blank dictionaries
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
