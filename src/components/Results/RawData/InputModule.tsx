import { Box, TextArea } from "grommet";
import React from "react";

export const InputModule = (props: {
  value: string;
  setData: (value: string) => void;
  placeholder: string;
  title: string;
}) => {
  return (
    <Box pad="small">
      {props.title}
      <TextArea
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setData(event.target.value)}
        fill
        resize={false}
      />
    </Box>
  );
};
