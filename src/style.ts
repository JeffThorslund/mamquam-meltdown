export const style = {
  name: "mm",
  rounding: 6,
  spacing: 16,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        dark: "#95D8f1",
        light: "#469EB2",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: '"Roboto"',
      size: "12px",
      height: "16px",
      maxWidth: "192px",
      face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    control: {
      border: {
        radius: "6px",
      },
    },
    drop: {
      border: {
        radius: "6px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "8px",
      xlarge: "16px",
    },
    breakpoints: {
      small: {
        value: 512,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "3px",
          large: "4px",
          xlarge: "8px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "2px",
          small: "4px",
          medium: "8px",
          large: "16px",
          xlarge: "32px",
        },
        size: {
          xxsmall: "16px",
          xsmall: "32px",
          small: "64px",
          medium: "128px",
          large: "256px",
          xlarge: "512px",
          full: "100%",
        },
      },
      medium: {
        value: 1024,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "2px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "32px",
      xlarge: "64px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "8px",
      weight: 600,
    },
    spacing: "16px",
    size: {
      xxsmall: "32px",
      xsmall: "64px",
      small: "128px",
      medium: "256px",
      large: "512px",
      xlarge: "768px",
      xxlarge: "1024px",
      full: "100%",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: "background",
      },
      elevation: "none",
      round: false,
    },
  },
  button: {
    border: {
      width: "2px",
      radius: "12px",
    },
    padding: {
      vertical: "2px",
      horizontal: "14px",
    },
  },
  checkBox: {
    check: {
      radius: "6px",
    },
    toggle: {
      radius: "16px",
      size: "32px",
    },
    size: "16px",
  },
  radioButton: {
    size: "16px",
  },
  formField: {
    border: {
      color: "border",
      error: {
        color: {
          dark: "white",
          light: "status-critical",
        },
      },
      position: "inner",
      side: "bottom",
    },
    content: {
      pad: "small",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "dark-3",
      margin: {
        start: "small",
      },
    },
    info: {
      color: "text-xweak",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    margin: {
      bottom: "small",
    },
    round: "6px",
  },
  calendar: {
    small: {
      fontSize: "9.333333333333334px",
      lineHeight: 1.375,
      daySize: "18.29px",
    },
    medium: {
      fontSize: "12px",
      lineHeight: 1.45,
      daySize: "36.57px",
    },
    large: {
      fontSize: "20px",
      lineHeight: 1.11,
      daySize: "73.14px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "5px",
        size: "16px",
      },
      minute: {
        width: "3px",
        size: "8px",
      },
      second: {
        width: "2px",
        size: "6px",
      },
      size: {
        small: "48px",
        medium: "64px",
        large: "96px",
        xlarge: "144px",
        huge: "192px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "6.666666666666667px",
          height: 1.5,
        },
        small: {
          size: "9.333333333333334px",
          height: 1.43,
        },
        medium: {
          size: "12px",
          height: 1.375,
        },
        large: {
          size: "14.666666666666666px",
          height: 1.167,
        },
        xlarge: {
          size: "17.333333333333332px",
          height: 1.1875,
        },
        xxlarge: {
          size: "22.666666666666664px",
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
        medium: {
          size: "33px",
          height: "37px",
          maxWidth: "533px",
        },
        large: {
          size: "55px",
          height: "59px",
          maxWidth: "875px",
        },
        xlarge: {
          size: "76px",
          height: "80px",
          maxWidth: "1216px",
        },
      },
      "2": {
        small: {
          size: "20px",
          height: "24px",
          maxWidth: "320px",
        },
        medium: {
          size: "28px",
          height: "32px",
          maxWidth: "448px",
        },
        large: {
          size: "36px",
          height: "40px",
          maxWidth: "576px",
        },
        xlarge: {
          size: "44px",
          height: "48px",
          maxWidth: "704px",
        },
      },
      "3": {
        small: {
          size: "17px",
          height: "21px",
          maxWidth: "277px",
        },
        medium: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
        large: {
          size: "28px",
          height: "32px",
          maxWidth: "448px",
        },
        xlarge: {
          size: "33px",
          height: "37px",
          maxWidth: "533px",
        },
      },
      "4": {
        small: {
          size: "15px",
          height: "19px",
          maxWidth: "235px",
        },
        medium: {
          size: "17px",
          height: "21px",
          maxWidth: "277px",
        },
        large: {
          size: "20px",
          height: "24px",
          maxWidth: "320px",
        },
        xlarge: {
          size: "23px",
          height: "27px",
          maxWidth: "363px",
        },
      },
      "5": {
        small: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        medium: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        large: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
        xlarge: {
          size: "11px",
          height: "15px",
          maxWidth: "171px",
        },
      },
      "6": {
        small: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        medium: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        large: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
        xlarge: {
          size: "9px",
          height: "13px",
          maxWidth: "149px",
        },
      },
    },
  },
  paragraph: {
    small: {
      size: "11px",
      height: "15px",
      maxWidth: "171px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "235px",
    },
    xlarge: {
      size: "17px",
      height: "21px",
      maxWidth: "277px",
    },
    xxlarge: {
      size: "23px",
      height: "27px",
      maxWidth: "363px",
    },
  },
  text: {
    xsmall: {
      size: "9px",
      height: "13px",
      maxWidth: "149px",
    },
    small: {
      size: "11px",
      height: "15px",
      maxWidth: "171px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "235px",
    },
    xlarge: {
      size: "17px",
      height: "21px",
      maxWidth: "277px",
    },
    xxlarge: {
      size: "23px",
      height: "27px",
      maxWidth: "363px",
    },
  },
  scale: 1,
};
