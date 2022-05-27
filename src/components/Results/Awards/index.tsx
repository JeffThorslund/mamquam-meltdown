import {
  RacerInfoMap,
  RaceRosterElement,
  Results as ResultsType,
} from "../../../types";
import { Box } from "grommet";
import React from "react";
import { buildRaceRoster } from "./_utils/buildRaceRoster";

export function Awards(props: { results: ResultsType; names: RacerInfoMap }) {
  const raceRoster = buildRaceRoster(props.results, props.names);

  const data = [
    {
      award: "Fastest Male",
      name: (raceRoster: RaceRosterElement[]) =>
        Math.min(
          ...raceRoster.map((rr) => {
            if (typeof rr.adjustedTime === "number") {
              return rr.adjustedTime;
            }

            return Infinity;
          })
        ),
    },
  ];

  return (
    <Box pad="medium">
      {data.map(({ award, name }) => {
        return <div>{award + name(raceRoster)}</div>;
      })}
    </Box>
  );
}
