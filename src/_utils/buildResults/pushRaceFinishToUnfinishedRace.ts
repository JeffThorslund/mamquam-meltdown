import { Results } from "../../types";

export function pushRaceFinishToUnfinishedRace(
  results: Results,
  racerId: string,
  currentRaceStatus: number
) {
  results[racerId].push({
    startTime: currentRaceStatus,
    endTime: null,
    missedGates: 0,
  });
}
