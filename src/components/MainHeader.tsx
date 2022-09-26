import { Box, Header, Text } from "grommet";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../types";
import { dark } from "../_utils/color";

export function MainHeader() {
  const navigation = useNavigate();

  return (
    <Header pad="medium" background={dark}>
      <Box direction="row" justify="between" fill>
        <Header onClick={() => navigation(Routes.Home)}>
          <Text weight={"bold"}>Mamquam Meltdown</Text>
        </Header>
        <Header onClick={() => navigation(Routes.Results)}>2022 Results</Header>
      </Box>
    </Header>
  );
}
