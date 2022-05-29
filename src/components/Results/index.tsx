import React, { useState, useMemo } from "react";
import {
  names as testNames,
  beginnerStarts,
  beginnerEnds,
  expertStarts,
  expertEnds,
} from "../../testData";
import { buildResults } from "../../_utils/buildResults";
import { buildRacerInfoLookup } from "../../_utils/buildNamesLookup/buildRacerInfoLookup";
import { Tab, Tabs } from "grommet";
import { RawData } from "./RawData";
import { Roster } from "./Roster";
import { Racers } from "./Racers";
import { Awards } from "./Awards";
import { parse } from "papaparse";
import { CsvRow } from "../../types";

export const Results = () => {
  console.log(parse<CsvRow>(testNames).data);

  const [starts, setStarts] = useState<string>(expertStarts);
  const [ends, setEnds] = useState<string>(expertEnds);
  const [names, setNames] = useState<string>(testNames);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(2);

  const results = useMemo(() => buildResults(starts, ends), [starts, ends]);
  const racerInfoLookup = useMemo(() => buildRacerInfoLookup(names), [names]);

  return (
    <Tabs flex activeIndex={activeTabIndex} onActive={setActiveTabIndex}>
      <Tab title="Raw Data">
        <RawData
          starts={starts}
          setStarts={setStarts}
          ends={ends}
          setEnds={setEnds}
          names={names}
          setNames={setNames}
        />
      </Tab>
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
