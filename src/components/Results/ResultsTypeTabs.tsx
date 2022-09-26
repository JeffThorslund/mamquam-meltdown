import { CsvData } from "../../types";
import { buildResults } from "../../_utils/buildResults";
import { buildRacerInfoLookup } from "../../_utils/buildNamesLookup/buildRacerInfoLookup";
import { names } from "../../results/2022/names";
import { Tab, Tabs, Box, Text } from "grommet";
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
        <Tab title={<Text>Race Results</Text>}>
          <RaceList results={results} names={racerInfoLookup} />
        </Tab>
        <Tab title={<Text>Racer Statistics</Text>}>
          <Racers results={results} names={racerInfoLookup} />
        </Tab>
      </Tabs>
    </Box>
  );
};
