import { CsvData } from "../../types";
import { buildResults } from "../../_utils/buildResults";
import { buildRacerInfoLookup } from "../../_utils/buildNamesLookup/buildRacerInfoLookup";
import { names } from "../../results/2022/names";
import { Tab, Tabs, Box } from "grommet";
import { RaceList } from "./Roster";
import { Racers } from "./Racers";
import React from "react";

export const ResultsTypeTabs = (props: {
  starts: CsvData;
  ends: CsvData;
  names: CsvData;
}) => {
  const results = buildResults(props.starts, props.ends);
  const racerInfoLookup = buildRacerInfoLookup(names);

  return (
    <Box>
      <Tabs flex>
        <Tab title="Race Results">
          <RaceList results={results} names={racerInfoLookup} />
        </Tab>
        <Tab title="Racer Statistics">
          <Racers results={results} names={racerInfoLookup} />
        </Tab>
      </Tabs>
    </Box>
  );
};
