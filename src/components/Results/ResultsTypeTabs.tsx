import { CsvData } from "../../types";
import { buildResults } from "../../_utils/buildResults";
import { buildRacerInfoLookup } from "../../_utils/buildNamesLookup/buildRacerInfoLookup";
import { names } from "../../results/2022/names";
import { Tab, Tabs } from "grommet";
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
    <Tabs flex>
      <Tab title="Results">
        <RaceList results={results} names={racerInfoLookup} />
      </Tab>
      {/*<Tab title="Roster">*/}
      {/*  <Racers results={results} names={racerInfoLookup} />*/}
      {/*</Tab>*/}
    </Tabs>
  );
};
