import { CurrentRaceStatus, Results } from "../../types";
import { pushRaceFinishToUnfinishedRace } from "./pushRaceFinishToUnfinishedRace";

export function finishUnfinishedRaces(
  races: CurrentRaceStatus,
  results: Results
) {
  for (const racerId in races) {
    const currentRaceStatus = races[racerId];

    if (currentRaceStatus) {
      pushRaceFinishToUnfinishedRace(results, racerId, currentRaceStatus);
    }
  }
}
