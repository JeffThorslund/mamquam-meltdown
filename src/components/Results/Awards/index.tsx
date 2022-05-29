import {
  RacerGender,
  RacerInfoMap,
  RaceRosterElement,
  RaceRosterElementNum,
  Results as ResultsType,
} from "../../../types";
import { Box, List } from "grommet";
import React from "react";
import { buildRaceRoster } from "./_utils/buildRaceRoster";

export function Awards(props: { results: ResultsType; names: RacerInfoMap }) {
  const raceRoster = buildRaceRoster(props.results, props.names);

  const [m1, m2, m3] = getFastestMen(raceRoster, props.names);
  const [f1, f2, f3] = getFastestWomen(raceRoster, props.names);

  const data: any = [];

  return (
    <Box>
      <List primaryKey="award" secondaryKey="data" data={data} />
    </Box>
  );
}

/*
interface A1 { }
interface A2 { text: string }
type A = A1 | A2;
const array: A[] = [{}, { text: "hello" }, {}, { text: "world" }];
const a2s: A2[] = array
    .filter((e): e is A2 => e.hasOwnProperty('text'));
const lengths = a2s
    .map(e => e.text.length);

// no compile errors
 */

const removeInvalidRaces = (
  raceRoster: RaceRosterElement[]
): RaceRosterElementNum[] => {
  const validRaces: RaceRosterElementNum[] = [];

  for (let race of raceRoster) {
    if (typeof race.adjustedTime === "number") {
      validRaces.push(race as RaceRosterElementNum);
    }
  }

  return validRaces;
};

const sortByFastest = (
  raceRoster: RaceRosterElement[]
): RaceRosterElementNum[] => {
  const validRaces = removeInvalidRaces(raceRoster);

  return validRaces.sort((a, b) => a.adjustedTime - b.adjustedTime);
};

const getFastestMen = (
  racerRoster: RaceRosterElement[],
  names: RacerInfoMap
) => {
  const men = racerRoster.filter(
    (race) => names[race.racerId].gender === RacerGender.Male
  );

  return sortByFastest(men);
};

const getFastestWomen = (
  racerRoster: RaceRosterElement[],
  names: RacerInfoMap
) => {
  const women = racerRoster.filter(
    (race) => names[race.racerId].gender === RacerGender.Female
  );

  return sortByFastest(women);
};
