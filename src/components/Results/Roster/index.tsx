import { RacerInfoMap, Results } from "../../../types";
import { Box, DataTable, Text } from "grommet";
import React from "react";
import { buildListOfRaces } from "./_utils/buildListOfRaces";

export function RaceList(props: { results: Results; names: RacerInfoMap }) {
  const raceRoster = buildListOfRaces(props.results, props.names).sort(
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

  const [sort, setSort] = React.useState({
    property: "name",
    direction: "desc",
  });

  return (
    <Box pad="medium">
      <DataTable
        step={raceRoster.length}
        primaryKey={false}
        columns={[
          {
            property: "racerName",
            header: <Text>Name</Text>,
          },
          {
            property: "startTime",
            header: <Text>Start Time</Text>,
          },
          {
            property: "endTime",
            header: <Text>End Time</Text>,
          },
          {
            property: "totalTime",
            header: <Text>Total Time (seconds)</Text>,
          },
          {
            property: "missedGates",
            header: <Text>Missed Gates</Text>,
          },
          {
            property: "adjustedTime",
            header: <Text>Adjusted Time (seconds)</Text>,
          },
        ]}
        data={raceRoster}
        sort={{
          property: "adjustedTime",
          direction: "asc",
        }}
      />
    </Box>
  );
}
