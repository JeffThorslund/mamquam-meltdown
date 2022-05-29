import { Anchor, Box, Header, Nav, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../types";

export function MainHeader() {
  return (
    <Header pad="medium">
      <Box direction="row" justify="between" fill>
        <Link to={Routes.Home}>
          <Text>Mamquam Meltdown</Text>
        </Link>
        <Nav direction="row">
          <Link to={Routes.Results}>
            <Anchor>Results</Anchor>
          </Link>
        </Nav>
      </Box>
    </Header>
  );
}
