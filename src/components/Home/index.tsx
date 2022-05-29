import React from "react";
import { Box, Header, Image } from "grommet";
import logo from "../../meltdownlogo.png";

export function Home() {
  return (
    <Box>
      {/*<Header>Results Coming Soon...</Header>*/}
      <Image src={logo} fill={"vertical"} fit={"contain"} />
    </Box>
  );
}
