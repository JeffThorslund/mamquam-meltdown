import React, { useState } from "react";
import { parseRecords } from "./_utils/parseRecords";
import { Box, Grommet, Tab, Tabs } from "grommet";
import { createNameLookup } from "./_utils/parseRecords/createNameLookup";
import { RawData } from "./components/RawData";
import { Roster } from "./components/Roster";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  tabs: {},
  tab: {},
};

function App() {
  const testStarts = "1,1\n2,2\n3,3\n1,5";
  const testEnds = "1,4\n2,7\n3,10\n1,14";
  const testNames = "1,Jeff\n2,Archie\n3,Nat";

  const [starts, setStarts] = useState<string>(testStarts);
  const [ends, setEnds] = useState<string>(testEnds);
  const [names, setNames] = useState<string>(testNames);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

  const results = parseRecords(starts, ends);

  const namesLookup = createNameLookup(names);

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
