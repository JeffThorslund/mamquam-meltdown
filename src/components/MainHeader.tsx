import { Box, Header, Nav, Text } from "grommet";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../types";

export function MainHeader() {
  const navigation = useNavigate();

  return (
    <Header pad="medium">
      <Box direction="row" justify="between" fill>
        <Header onClick={() => navigation(Routes.Home)}>
          Mamquam Meltdown
        </Header>
        <Header onClick={() => navigation(Routes.Results)}>Results</Header>
      </Box>
    </Header>
  );
}
