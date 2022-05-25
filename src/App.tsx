import React from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { MainHeader } from "./components/MainHeader";
import { customTheme } from "./_utils/theme";

/*
--pacific-blue: #469EB2ff;
--sky-blue: #95D8F1ff;
--big-dip-oruby: #A6003Eff;
--yellow: #FFFB00ff;
--black: #000000ff;
--white: #FFFFFFff;
 */

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={customTheme} themeMode={"dark"} full>
        <Box fill>
          <MainHeader />
          <Router />
        </Box>
      </Grommet>
    </BrowserRouter>
  );
}

App.args = {
  full: true,
};

export default App;
