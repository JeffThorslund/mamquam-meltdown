import {
  RaceRecord,
  RacerId,
  RacerInfoMap,
  RaceRosterElement,
  Results,
} from "../../../../types";
import { getTimeProperties } from "./getTimeProperties";

export const flattenListOfRaces = (results: Results) => {
  const list = [];

  for (const racerId in results) {
    for (const race of results[racerId]) {
      list.push({ ...race, racerId: racerId });
    }
  }

  return list;
};

interface RaceRecordWithRacerId extends RaceRecord {
  racerId: RacerId;
}

export const appendExtraDataToList = (
  listOfRaces: RaceRecordWithRacerId[],
  names: RacerInfoMap
): RaceRosterElement[] => {
  return listOfRaces.map((race) => {
    return {
      ...getTimeProperties(race),
      missedGates: race.missedGates,
      racerId: race.racerId,
      racerName: names[race.racerId] ? names[race.racerId].name : "undefined",
    };
  });
};
