import { NameLookup, Results } from "../../../types";
import { Box, DataTable, Text } from "grommet";
import React from "react";
import { buildRaceRoster } from "../Awards/_utils/buildRaceRoster";

export function Roster(props: { results: Results; names: NameLookup }) {
  const raceRoster = buildRaceRoster(props.results, props.names);

  return (
    <Box pad="medium">
      <DataTable
        step={raceRoster.length}
        primaryKey={true}
        sortable={true}
        sort={{
          direction: "desc",
          external: false,
          property: "startTime",
        }}
        columns={[
          {
            property: "racerName",
            header: <Text>Name</Text>,
          },
          {
            property: "startTime",
            primary: true,
            header: <Text>Start Time</Text>,
          },
          {
            property: "endTime",
            header: <Text>End Time</Text>,
          },
          {
            property: "totalTime",
            header: <Text>Total</Text>,
          },
          {
            property: "missedGates",
            header: <Text>Missed Gates</Text>,
          },
          {
            property: "adjustedTime",
            header: <Text>Adjusted Time</Text>,
          },
        ]}
        data={raceRoster}
      />
    </Box>
  );
}
