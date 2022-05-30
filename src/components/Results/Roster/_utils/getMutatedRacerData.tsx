import { RaceRecord, RacerInfoMap, Results } from "../../../../types";
import { DataDic } from "../../Racers";
import { getRaceTime } from "../../../_utils/getRaceTime";
import { formatUnixSecondsToTime } from "./formatUnixSecondsToTime";

export const getTimeProperties = (race: RaceRecord) => {
  if (race.endTime && race.startTime) {
    const totalTime = race.endTime - race.startTime;

    return {
      startTime: formatUnixSecondsToTime(race.startTime),
      endTime: formatUnixSecondsToTime(race.endTime),
      totalTime: totalTime,
      adjustedTime: totalTime + 50 * Number(race.missedGates),
    };
  }

  if (race.endTime) {
    const status = "DNS";

    return {
      startTime: status,
      endTime: formatUnixSecondsToTime(race.endTime),
      totalTime: status,
      adjustedTime: status,
    };
  }

  if (race.startTime) {
    const status = "DNF";

    return {
      startTime: formatUnixSecondsToTime(race.startTime),
      endTime: status,
      totalTime: status,
      adjustedTime: status,
    };
  }

  const status = "Invalid";

  return {
    startTime: status,
    endTime: status,
    totalTime: status,
    adjustedTime: status,
  };
};

export function getMutatedRacerData(props: {
  results: Results;
  names: RacerInfoMap;
}) {
  const dataDic: DataDic = {};

  for (let resultKey in props.results) {
    const races = props.results[resultKey];

    const racesTimes = races
      .filter((rt) => {
        return rt.startTime && rt.endTime;
      })
      .map((race) => getTimeProperties(race).adjustedTime as number);

    const fastestLap = racesTimes.length ? Math.min(...racesTimes) : 0;

    const indexOfFastestRace = racesTimes.indexOf(fastestLap);

    dataDic[resultKey] = {
      numberOfRaces: props.results[resultKey].length,
      fastestLap: fastestLap,
      fastestLapIndex: indexOfFastestRace + 1,
      racerName: props.names[resultKey]
        ? props.names[resultKey].name
        : "Invalid",
    };
  }

  return Object.values(dataDic);
}
