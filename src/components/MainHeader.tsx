import { Anchor, Box, Header, Nav, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

export function MainHeader() {
  return (
    <Header pad="medium">
      <Box direction="row" justify="between" fill>
        <Link to="/">
          <Text>Mamquam Meltdown</Text>
        </Link>
        <Nav direction="row">
          <Link to="/results">
            <Anchor>Results</Anchor>
          </Link>
        </Nav>
      </Box>
    </Header>
  );
}
