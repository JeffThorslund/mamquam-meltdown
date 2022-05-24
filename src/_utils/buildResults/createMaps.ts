import { MixedEntry, CurrentRaceStatus, Results } from "../../types";

export const createRaces = (entries: MixedEntry[]) => {
  return entries.reduce((results, startInstance) => {
    results[startInstance.racerId] = undefined;

    return results;
  }, {} as CurrentRaceStatus);
};

export const createResults = (entry: MixedEntry[]) => {
  return entry.reduce((results, startInstance) => {
    results[startInstance.racerId] = [];

    return results;
  }, {} as Results);
};
