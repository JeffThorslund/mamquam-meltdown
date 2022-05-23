export const pushResultAndUpdateRaces = (
  entry: MixedEntry,
  races: CurrentRaceStatus,
  results: Results
): void => {
  const entryType = entry.type;
  const entryTime = entry.time;
  const currentRaceStatus = races[entry.racerId];

  // No end time was recorded for the racer before the next race start.
  if (entryType === EntryType.START && currentRaceStatus) {
    races[entry.racerId] = entryTime;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: null,
    });
  }

  // Racer is successfully starting a new race
  else if (entryType === EntryType.START && !currentRaceStatus) {
    races[entry.racerId] = entryTime;
  }

  // Racer is successfully ending a race
  else if (entryType === EntryType.END && currentRaceStatus) {
    races[entry.racerId] = undefined;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: entry.time,
    });
  }

  // Racer is ending race but never started one
  else if (entryType === EntryType.END && !currentRaceStatus) {
    results[entry.racerId].push({
      startTime: null,
      endTime: entry.time,
    });
  }

  // Some other error
  else {
    results[entry.racerId].push({
      startTime: null,
      endTime: null,
    });
  }
};
