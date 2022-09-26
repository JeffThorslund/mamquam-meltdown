import React from "react";
import { Tab, Tabs, Text } from "grommet";
import { names } from "../../results/2022/names";
import { advanced, beginner } from "../../results/2022/data";
import { ResultsTypeTabs } from "./ResultsTypeTabs";

export const EventTypeTabs = () => {
  return (
    <Tabs flex>
      <Tab title={<Text size={"large"}>Slalom Race</Text>}>
        <ResultsTypeTabs
          starts={advanced.starts}
          ends={advanced.ends}
          names={names}
        />
      </Tab>
      <Tab title={<Text size={"large"}>Eddy Hopper Race</Text>}>
        <ResultsTypeTabs
          starts={beginner.starts}
          ends={beginner.ends}
          names={names}
        />
      </Tab>
    </Tabs>
  );
};
