import { ThemeType } from "grommet";

export const customTheme: ThemeType = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  tabs: {
    header: {
      border: {
        style: "none",
      },
    },
  },
  tab: {
    border: {
      side: "bottom",
      size: "small",
      color: "none",
      active: {
        color: "accent-1",
      },
      hover: {
        color: "dark-4",
      },
    },
  },
};
