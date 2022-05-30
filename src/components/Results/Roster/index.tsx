import { RacerInfoMap, Results } from "../../../types";
import { Box, DataTable, Text } from "grommet";
import React, { useState } from "react";
import {
  appendExtraDataToList,
  flattenListOfRaces,
} from "./_utils/buildListOfRaces";
import { getTimeProperties } from "./_utils/getTimeProperties";

interface Sort {
  direction: "desc" | "asc";
  external: boolean;
  property: string;
}

export function RaceList(props: { results: Results; names: RacerInfoMap }) {
  const [sort, setSort] = useState<Sort>({
    direction: "desc",
    external: true,
    property: "adjustedTime",
  });

  const listOfResults = flattenListOfRaces(props.results);

  const sortedResults = listOfResults.sort((a, b) => {
    if (sort.property === "adjustedTime" || sort.property === "totalTime") {
      const aa = getTimeProperties(a);
      const bb = getTimeProperties(b);

      // equal items sort equally
      if (aa[sort.property] === bb[sort.property]) {
        return 0;
      }
      // nulls sort after anything else
      else if (typeof aa[sort.property] === "string") {
        return 1;
      } else if (typeof bb[sort.property] === "string") {
        return -1;
      }

      if (sort.direction === "desc") {
        return aa[sort.property] > bb[sort.property] ? -1 : 1;
      }
      // otherwise, if we're ascending, lowest sorts first
      return aa[sort.property] < bb[sort.property] ? -1 : 1;
    } else if (sort.property === "racerName") {
      const racerNameA = props.names[a.racerId]
        ? props.names[a.racerId].name
        : "undefined";
      const racerNameB = props.names[b.racerId]
        ? props.names[b.racerId].name
        : "undefined";

      if (sort.direction === "desc") {
        return racerNameB.localeCompare(racerNameA);
      }

      return racerNameA.localeCompare(racerNameB);
    }

    if (sort.property === "startTime" || sort.property === "endTime") {
      if (a[sort.property] === null) {
        return 1;
      }

      if (b[sort.property] === null) {
        return -1;
      }

      if (a[sort.property] !== null && b[sort.property] !== null) {
        if (sort.direction === "desc") {
          // @ts-ignore
          return a[sort.property] - b[sort.property];
        }
        // @ts-ignore
        return b[sort.property] - a[sort.property];
      }
      return 0;
    }

    if (sort.property === "missedGates") {
      if (sort.direction === "desc") {
        return a[sort.property] - b[sort.property];
      }
      return b[sort.property] - a[sort.property];
    }

    return 0;
  });

  const data = appendExtraDataToList(sortedResults, props.names);

  return (
    <Box pad="medium">
      <DataTable
        step={data.length}
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
        data={data}
        onSort={setSort as any}
        sort={sort}
      />
    </Box>
  );
}
