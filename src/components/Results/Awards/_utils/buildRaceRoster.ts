import { NameLookup, Results, RaceRosterElement } from "../../../../types";
import {
  getAdjustedTimeStatus,
  getTimeStatus,
} from "../../../_utils/getRaceTime";

export function buildRaceRoster(
  results: Results,
  names: NameLookup
): RaceRosterElement[] {
  const mutatedData = [];

  // prepare race data
  for (const resultsKey in results) {
    for (const raceElement of results[resultsKey]) {
      const totalTime = getTimeStatus(raceElement);

      mutatedData.push({
        ...raceElement,
        racerId: resultsKey,
        racerName: names[resultsKey],
        totalTime: totalTime,
        adjustedTime: getAdjustedTimeStatus(raceElement),
      });
    }
  }
  return mutatedData;
}
