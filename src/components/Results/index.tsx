import React, { useState, useMemo } from "react";
import { buildResults } from "../../_utils/buildResults";
import { buildRacerInfoLookup } from "../../_utils/buildNamesLookup/buildRacerInfoLookup";
import { Tab, Tabs } from "grommet";
import { RawData } from "./RawData";
import { Roster } from "./Roster";
import { Racers } from "./Racers";
import { Awards } from "./Awards";
import { parse } from "papaparse";
import { CsvRow } from "../../types";
import { names } from "../../results/2022/names";
import { beginner, advanced } from "../../results/2022/data";

export const Results = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(2);
  const results = buildResults(advanced.starts, advanced.ends);
  const racerInfoLookup = buildRacerInfoLookup(names);

  return (
    <Tabs flex activeIndex={activeTabIndex} onActive={setActiveTabIndex}>
      <Tab title="Roster">
        <Roster results={results} names={racerInfoLookup} />
      </Tab>
      <Tab title="Racers">
        <Racers results={results} names={racerInfoLookup} />
      </Tab>
      <Tab title="Awards">
        <Awards results={results} names={racerInfoLookup} />
      </Tab>
    </Tabs>
  );
};
export { buildRaceRoster } from "./Awards/_utils/buildRaceRoster";
