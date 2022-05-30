import { RacerInfoMap, RaceRosterElement, Results } from "../../../../types";

import { DateTime } from "luxon";
import { getTimeProperties } from "./getTimeProperties";

export const formatUnixSecondsToTime = (unixTimestamp: number): string =>
  DateTime.fromSeconds(Number(unixTimestamp), {
    zone: "utc",
  }).toLocaleString(DateTime.TIME_WITH_SECONDS);

export const buildListOfRaces = (
  results: Results,
  names: RacerInfoMap
): RaceRosterElement[] => {
  const raceRoster = [];

  // prepare race data
  for (const racerId in results) {
    for (const race of results[racerId]) {
      raceRoster.push({
        ...getTimeProperties(race),
        missedGates: race.missedGates,
        racerId: racerId,
        racerName: names[racerId] ? names[racerId].name : "undefined",
      });
    }
  }
  return raceRoster;
};
