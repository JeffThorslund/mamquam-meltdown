import React from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { MainHeader } from "./components/MainHeader";
import { customTheme } from "./_utils/theme";

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={customTheme} full background={"light-1"}>
        <Box fill>
          <MainHeader />
          <Box responsive={true} width={"xlarge"} alignSelf={"center"}>
            <Router />
          </Box>
        </Box>
      </Grommet>
    </BrowserRouter>
  );
}

App.args = {
  full: true,
};

export default App;
