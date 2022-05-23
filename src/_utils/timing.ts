export interface Entry {
  racerId: string;
  time: number;
}

interface TypedEntry extends Entry {
  type: string;
}

interface Results {
  [key: string]: RaceRecord[];
}

interface RaceRecord {
  startTime: number | null;
  endTime: number | null;
}

interface CurrentRaceStatus {
  [key: string]: undefined | number;
}

const timing = (starts: Entry[], ends: Entry[]) => {
  const mergedEntries = mergeEntries(starts, ends);
  const races = createRaces(mergedEntries);
  const results = createResults(mergedEntries);

  mergedEntries.forEach((entry) => {
    pushResultAndMutatedRaces(entry, races, results);
  });

  // finish unfinished races
  for (const racerId in races) {
    const currentRaceStatus = races[racerId];

    if (currentRaceStatus) {
      results[racerId].push({ startTime: currentRaceStatus, endTime: null });
    }
  }

  return results;
};

const mergeEntries = (starts: Entry[], ends: Entry[]): TypedEntry[] => {
  const typedStarts = starts.map((start) => ({ ...start, type: "start" }));
  const typedEnds = ends.map((end) => ({ ...end, type: "end" }));

  return [...typedStarts, ...typedEnds].sort((a, b) => a.time - b.time);
};
const createRaces = (starts: Entry[]) => {
  return starts.reduce((results, startInstance) => {
    results[startInstance.racerId] = undefined;

    return results;
  }, {} as CurrentRaceStatus);
};
const createResults = (starts: Entry[]) => {
  return starts.reduce((results, startInstance) => {
    results[startInstance.racerId] = [];

    return results;
  }, {} as Results);
};

const pushResultAndMutatedRaces = (
  entry: TypedEntry,
  races: CurrentRaceStatus,
  results: Results
): void => {
  const entryType = entry.type;
  const entryTime = entry.time;
  const currentRaceStatus = races[entry.racerId];

  // No end time was recorded for the racer before the next race start.
  if (entryType === "start" && currentRaceStatus) {
    races[entry.racerId] = entryTime;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: null,
    });
  }

  // Racer is successfully starting a new race
  else if (entryType === "start" && !currentRaceStatus) {
    races[entry.racerId] = entryTime;
  }

  // Racer is successfully ending a race
  else if (entryType === "end" && currentRaceStatus) {
    races[entry.racerId] = undefined;

    results[entry.racerId].push({
      startTime: currentRaceStatus,
      endTime: entry.time,
    });
  }

  // Racer is ending race but never started one
  else if (entryType === "end" && !currentRaceStatus) {
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

export { timing, createResults, mergeEntries };
