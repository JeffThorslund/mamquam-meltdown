import { RaceRecord } from "../../types";

enum RaceStatus {
  INVALID,
  DID_NOT_START,
  DID_NOT_FINISH,
  VALID,
}

const getRaceStatus = (race: RaceRecord): RaceStatus => {
  if (race.startTime === null && race.endTime === null) {
    return RaceStatus.INVALID;
  }

  if (race.startTime === null) {
    return RaceStatus.DID_NOT_START;
  }

  if (race.endTime === null) {
    return RaceStatus.DID_NOT_FINISH;
  }

  return RaceStatus.VALID;
};

const isRaceValid = (race: RaceRecord): boolean => {
  return getRaceStatus(race) === RaceStatus.VALID;
};

const getSingleRaceTime = (race: RaceRecord): number => {
  const startTime = race.startTime as number;
  const endTime = race.endTime as number;

  return endTime - startTime;
};

export const getRaceTime = (race: RaceRecord) => {
  if (isRaceValid(race)) return getSingleRaceTime(race);

  return 0;
};

export const getTimeStatus = (race: RaceRecord) => {
  const raceStatus = getRaceStatus(race);

  if (raceStatus === RaceStatus.INVALID) return "Invalid";
  if (raceStatus === RaceStatus.DID_NOT_START) return "DNS";
  if (raceStatus === RaceStatus.DID_NOT_FINISH) return "DNF";

  return getSingleRaceTime(race);
};