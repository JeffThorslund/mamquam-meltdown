import { RaceRecord } from "../../../../types";
import { formatUnixSecondsToTime } from "./buildListOfRaces";

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
