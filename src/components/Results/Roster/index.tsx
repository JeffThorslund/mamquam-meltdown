import { RacerInfoMap, Results } from "../../../types";
import { Box, DataTable, Text } from "grommet";
import React from "react";
import { buildRaceRoster } from "../Awards/_utils/buildRaceRoster";

export function Roster(props: { results: Results; names: RacerInfoMap }) {
  const raceRoster = buildRaceRoster(props.results, props.names).sort(
    (a, b) => {
      // equal items sort equally
      if (a.adjustedTime === b.adjustedTime) {
        return 0;
      }
      // nulls sort after anything else
      else if (typeof a.adjustedTime === "string") {
        return 1;
      } else if (typeof b.adjustedTime === "string") {
        return -1;
      }
      // otherwise, if we're ascending, lowest sorts first

      return a.adjustedTime < b.adjustedTime ? -1 : 1;
    }
  );

  console.log({ raceRoster });

  return (
    <Box pad="medium">
      <DataTable
        step={raceRoster.length}
        primaryKey={true}
        // sortable={true}
        // sort={{
        //   direction: "desc",
        //   external: false,
        //   property: "adjustedTime",
        // }}
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
