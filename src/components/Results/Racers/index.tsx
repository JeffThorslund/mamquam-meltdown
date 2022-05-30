import { Box, DataTable, Text } from "grommet";
import React from "react";
import { RacerInfoMap, Results } from "../../../types";
import { getMutatedRacerData } from "../Roster/_utils/getMutatedRacerData";

export interface DataDic {
  [key: string]: TableData;
}

interface TableData {
  numberOfRaces: number;
  fastestLapIndex: number;
  fastestLap: number;
  racerName: string;
}

export function Racers(props: { results: Results; names: RacerInfoMap }) {
  const mutatedData = getMutatedRacerData(props);

  return (
    <Box>
      <DataTable
        step={mutatedData.length}
        sort={{
          direction: "asc",
          external: false,
          property: "racerName",
        }}
        columns={[
          {
            property: "racerName",
            header: <Text>Name</Text>,
          },
          {
            property: "fastestLapIndex",
            header: <Text>Fastest Lap</Text>,
          },
          {
            property: "fastestLap",
            header: <Text>Fastest Lap Time (seconds)</Text>,
          },
          {
            property: "numberOfRaces",
            header: <Text>Number Of Races</Text>,
          },
        ]}
        data={mutatedData}
      />
    </Box>
  );
}
