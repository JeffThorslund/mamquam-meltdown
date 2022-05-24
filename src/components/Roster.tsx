import { NameLookup, RaceRecord, Results } from "../types";
import { Box, DataTable, Text } from "grommet";
import React from "react";

function getTimeStatus(raceElement: RaceRecord) {
  if (!raceElement.startTime && !raceElement.endTime) return "Invalid";
  if (!raceElement.startTime) return "DNS";
  if (!raceElement.endTime) return "DNF";

  return raceElement.endTime - raceElement.startTime;
}

export function Roster(props: { results: Results; names: NameLookup }) {
  const mutatedData = [];

  for (const resultsKey in props.results) {
    for (const raceElement of props.results[resultsKey]) {
      mutatedData.push({
        ...raceElement,
        racerId: resultsKey,
        racerName: props.names[resultsKey],
        totalTime: getTimeStatus(raceElement),
      });
    }
  }

  return (
    <Box pad="medium">
      <DataTable
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
        ]}
        data={mutatedData}
      />
    </Box>
  );
}
