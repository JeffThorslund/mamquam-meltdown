import React from "react";
import { Box, Image } from "grommet";
import logo from "../../meltdownlogo.png";

export function Home() {
  return (
    <Box>
      <Image src={logo} fill={"vertical"} fit={"contain"} />
    </Box>
  );
}
