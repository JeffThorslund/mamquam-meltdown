import { RaceRecord } from "../../types";

enum RaceStatus {
  INVALID,
  DID_NOT_START,
  DID_NOT_FINISH,
  VALID,
}

export const getRaceStatus = (race: RaceRecord): RaceStatus => {
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

export const isRaceValid = (race: RaceRecord): boolean => {
  return getRaceStatus(race) === RaceStatus.VALID;
};

const getSingleRaceTime = (race: RaceRecord): any => {
  const startTime = Number(race.startTime) as number;
  const endTime = Number(race.endTime) as number;

  return endTime - startTime;
};

export const getRaceTime = (race: RaceRecord) => {
  if (isRaceValid(race)) return getSingleRaceTime(race);

  return 0;
};
