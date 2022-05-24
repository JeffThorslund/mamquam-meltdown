import React, { useState } from "react";
import { buildResults } from "./_utils/buildResults";
import { Box, Grommet, Tab, Tabs } from "grommet";
import { buildNameLookup } from "./_utils/buildNamesLookup/buildNameLookup";
import { RawData } from "./components/RawData";
import { Roster } from "./components/Roster";
import { Racers } from "./components/Racers";
import {
  names as testNames,
  starts as testStarts,
  ends as testEnds,
} from "./testData";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [starts, setStarts] = useState<string>(testStarts);
  const [ends, setEnds] = useState<string>(testEnds);
  const [names, setNames] = useState<string>(testNames);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(2);

  const results = buildResults(starts, ends);
  const namesLookup = buildNameLookup(names);

  return (
    <Grommet theme={theme} full>
      <Box fill>
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
      </Box>
    </Grommet>
  );
}

App.args = {
  full: true,
};

export default App;
