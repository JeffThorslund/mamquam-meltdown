import React, { useState } from "react";
import { buildResults } from "./_utils/buildResults";
import {
  Box,
  Grommet,
  Tab,
  Tabs,
  Header,
  ResponsiveContext,
  Menu,
  Nav,
  Anchor,
  Text,
  Avatar,
  Image,
} from "grommet";
import { buildNameLookup } from "./_utils/buildNamesLookup/buildNameLookup";
import { RawData } from "./components/RawData";
import { Roster } from "./components/Roster";
import { Racers } from "./components/Racers";
import {
  names as testNames,
  starts as testStarts,
  ends as testEnds,
} from "./testData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./meltdownlogo.png";
import { deepMerge } from "grommet/utils";
import { style } from "./style";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hi</div>} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
};

const Results = () => {
  const [starts, setStarts] = useState<string>(testStarts);
  const [ends, setEnds] = useState<string>(testEnds);
  const [names, setNames] = useState<string>(testNames);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(2);

  const results = buildResults(starts, ends);
  const namesLookup = buildNameLookup(names);

  return (
    <Tabs flex activeIndex={activeTabIndex} onActive={setActiveTabIndex}>
      <Tab title="Raw Data">
        <RawData
          starts={starts}
          setStarts={setStarts}
          ends={ends}
          setEnds={setEnds}
          names={names}
          setNames={setNames}
        />
      </Tab>
      <Tab title="Roster">
        <Roster results={results} names={namesLookup} />
      </Tab>
      <Tab title="Index">
        <Racers results={results} names={namesLookup} />
      </Tab>
      <Tab title="Awards">
        <Box pad="medium">Awards</Box>
      </Tab>
    </Tabs>
  );
};

function MainHeader() {
  return (
    <Header pad="medium">
      <Box direction="row" justify="between" fill>
        <Anchor href="/" label="Mamquam Meltdown" />
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === "small" ? (
              <Menu
                label="Click me"
                items={[
                  {
                    label: "Results",
                    onClick: () => {},
                  },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor href="/info" label="Info" />
                <Anchor href="/results" label="Results" />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Header>
  );
}

function App() {
  /*
              --pacific-blue: #469EB2ff;
              --sky-blue: #95D8F1ff;
              --big-dip-oruby: #A6003Eff;
              --yellow: #FFFB00ff;
              --black: #000000ff;
              --white: #FFFFFFff;
               */

  const customTheme = {
    anchor: { color: "#95D8f1" },

    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
      colors: {
        brand: {
          dark: "#95D8f1",
          light: "#469EB2",
        },
        text: {
          dark: "#f8f8f8",
          light: "#444444",
        },
        background: {
          dark: "#000000",
          light: "#FFFFF",
        },
        focus: "#469EB2",
      },
    },
  };

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
