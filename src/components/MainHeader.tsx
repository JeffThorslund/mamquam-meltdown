import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from "grommet";
import React from "react";

export function MainHeader() {
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
