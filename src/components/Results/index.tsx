import React from "react";
import { Tab, Tabs } from "grommet";
import { names } from "../../results/2022/names";
import { advanced, beginner } from "../../results/2022/data";
import { ResultsTypeTabs } from "./ResultsTypeTabs";

export const EventTypeTabs = () => {
  return (
    <Tabs flex>
      <Tab title="Slalom Race">
        <ResultsTypeTabs
          starts={advanced.starts}
          ends={advanced.ends}
          names={names}
        />
      </Tab>
      <Tab title="Eddy Hopper Race">
        <ResultsTypeTabs
          starts={beginner.starts}
          ends={beginner.ends}
          names={names}
        />
      </Tab>
    </Tabs>
  );
};
