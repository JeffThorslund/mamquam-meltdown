import React, { useState } from "react";
import {
  ends as testEnds,
  names as testNames,
  starts as testStarts,
} from "../../testData";
import { buildResults } from "../../_utils/buildResults";
import { buildNameLookup } from "../../_utils/buildNamesLookup/buildNameLookup";
import { Box, Tab, Tabs } from "grommet";
import { RawData } from "./RawData";
import { Roster } from "./Roster";
import { Racers } from "./Racers";

export const Results = () => {
  const [starts, setStarts] = useState<string>(testStarts);
  const [ends, setEnds] = useState<string>(testEnds);
  const [names, setNames] = useState<string>(testNames);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(2);

  const results = buildResults(starts, ends);
  const namesLookup = buildNameLookup(names);

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
        <Roster results={results} names={namesLookup} />
      </Tab>
      <Tab title="Index">
        <Racers results={results} names={namesLookup} />
      </Tab>
      <Tab title="Awards">
        <Box pad="medium">Awards</Box>
      </Tab>
    </Tabs>
  );
};
