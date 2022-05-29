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
import { parseEndEntries, parseStartEntries } from "./parseAndTypeEntries";
import { finishUnfinishedRaces } from "./finishUnfinishedRaces";

export const buildResults = (starts: CsvData, ends: CsvData) => {
  // parse start and end strings into entries
  const typedStarts: StartEntry[] = parseStartEntries<EntryType.START>(
    starts,
    EntryType.START
  );

  const typedEnds: EndEntry[] = parseEndEntries<EntryType.END>(
    ends,
    EntryType.END
  );

  //merge entries
  const mergedEntries = mergeAndSortEntries(typedStarts, typedEnds);

  // create blank dictionaries
  const races = createRaces(mergedEntries);
  const results = createResults(mergedEntries);

  // push to `results` while mutating race
  mergedEntries.forEach((entry: MixedEntry) => {
    pushResultAndUpdateRaces(entry, races, results);
  });

  // finish unfinished races
  finishUnfinishedRaces(races, results);

  return results;
};
