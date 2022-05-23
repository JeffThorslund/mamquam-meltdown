interface Instance {
  id: string;
  time: number;
}

interface TypedInstance extends Instance {
  type: string;
}

const mergeLists = (starts: Instance[], ends: Instance[]): TypedInstance[] => {
  let sIndex = 0;
  let eIndex = 0;

  const mergedList: TypedInstance[] = [];

  while (sIndex < starts.length - 1 && eIndex < ends.length - 1) {
    console.log(sIndex);

    //use starts
    if (starts[sIndex].time < ends[eIndex].time) {
      mergedList.push({ ...starts[sIndex], type: "start" });
      sIndex++;
    } else {
      mergedList.push({ ...ends[eIndex], type: "end" });
      eIndex++;
    }
  }

  if (sIndex < starts.length) {
    mergedList.push(
      ...starts.slice(sIndex).map((i) => ({ ...i, type: "start" }))
    );
  } else {
    mergedList.push(...ends.slice(eIndex).map((i) => ({ ...i, type: "end" })));
  }

  return mergedList;
};

const timing = (starts: Instance[], ends: Instance[]) => {
  const baseRaceInstanceTrackingStructure =
    createBaseRaceInstanceTrackingStructure(starts);

  let sIndex = 0;
  let eIndex = 0;

  while (sIndex < starts.length - 1 && eIndex < ends.length - 1) {
    // use start time
    if (starts[sIndex].time < ends[eIndex].time) {
    }

    //use end time
  }

  const baseResultsTrackingStructure =
    createBaseResultsTrackingStructure(starts);

  /**
   * Do we want to first MERGE the lists sorted by time?
   * The right algo probably won't require that. It will check,
   * is the next end instance after the start instance? If yes,
   * use that end instance, if not, use next start instance.
   * Use pointers to keep track of where we are in each array.
   * */

  /**
   * This will be an array traversal problem.
   * We can create a hashmap that's different from baseResultsTrackingStructure, as it only
   * records a single race instance per racer (aka the CURRENT race). It records the start time,
   * */

  return { "1": [], "2": [] };
};

interface RaceRecord {
  startTime: number;
  endTime: number;
}

interface Results {
  [key: string]: RaceRecord[];
}

const createBaseResultsTrackingStructure = (starts: Instance[]) => {
  return starts.reduce((results, startInstance) => {
    results[startInstance.id] = [];

    return results;
  }, {} as Results);
};

interface RaceBase {
  [key: string]: undefined | number;
}

const createBaseRaceInstanceTrackingStructure = (starts: Instance[]) => {
  return starts.reduce((results, startInstance) => {
    results[startInstance.id] = undefined;

    return results;
  }, {} as RaceBase);
};

export { timing, createBaseResultsTrackingStructure, mergeLists };
