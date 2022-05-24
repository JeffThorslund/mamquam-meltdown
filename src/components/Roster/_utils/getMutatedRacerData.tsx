import { NameLookup, Results } from "../../../types";
import { DataDic } from "../../Racers";
import { getRaceTime } from "../../_utils/getRaceTime";

export function getMutatedRacerData(props: {
  results: Results;
  names: NameLookup;
}) {
  const dataDic: DataDic = {};

  for (let resultKey in props.results) {
    const races = props.results[resultKey];

    const racesTimes = races.map((race) => getRaceTime(race));

    const fastestLap = Math.min(...racesTimes);

    const indexOfFastestRace = racesTimes.indexOf(fastestLap);

    dataDic[resultKey] = {
      numberOfRaces: props.results[resultKey].length,
      fastestLapIndex: getRaceTime(races[indexOfFastestRace]),
      fastestLap: indexOfFastestRace + 1,
      racerName: props.names[resultKey],
    };
  }

  return Object.values(dataDic);
}
