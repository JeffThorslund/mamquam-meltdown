import { Box } from "grommet";
import { InputModule } from "./InputModule";
import React from "react";

export function RawData(props: {
  starts: string;
  setStarts: (value: ((prevState: string) => string) | string) => void;
  ends: string;
  setEnds: (value: ((prevState: string) => string) | string) => void;
  names: string;
  setNames: (value: ((prevState: string) => string) | string) => void;
}) {
  return (
    <Box fill overflow="auto" pad="small" direction={"row"} justify={"center"}>
      <InputModule
        value={props.starts}
        setData={props.setStarts}
        placeholder={"1,2\n2,3"}
        title={"Starts"}
      />
      <InputModule
        value={props.ends}
        setData={props.setEnds}
        placeholder={"1,4\n2,6"}
        title={"Ends"}
      />
      <InputModule
        value={props.names}
        setData={props.setNames}
        placeholder={"1,Archie\n2,Jeff"}
        title={"Names"}
      />
    </Box>
  );
}
