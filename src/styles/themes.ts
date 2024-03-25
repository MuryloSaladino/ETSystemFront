import { ThemeOptions } from "@mui/material";

export const lightPalette:ThemeOptions = {
  palette: {
    primary: {
      light: "#007bc0",
      main: "#00629a",
      dark: "#004975"
    },
    secondary: {
      light: "#9e2896",
      main: "#791d73",
      dark: "#551151"
    },
    error: {
      light: "#ed0007",
      main: "#be0004",
      dark: "#920002"
    },
    warning: {
      light: "#ffcf00",
      main: "#deb300",
      dark: "#bd9900"
    },
    info: {
      light: "#18837e",
      main: "#116864",
      dark: "#0a4f4b"
    },
    success: {
      light: "#00884a",
      main: "#006c3a",
      dark: "#00512a"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F4F6",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },
  },
};

export const darkPalette:ThemeOptions = {
  palette: {
    primary: {
      light: "#007bc0",
      main: "#00629a",
      dark: "#004975",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#9e2896",
      main: "#791d73",
      dark: "#551151",
      contrastText: "#ffffff",
    },
    error: {
      light: "#ed0007",
      main: "#be0004",
      dark: "#920002",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#ffcf00",
      main: "#deb300",
      dark: "#bd9900",
      contrastText: "#ffffff",
    },
    info: {
      light: "#18837e",
      main: "#116864",
      dark: "#0a4f4b",
      contrastText: "#ffffff",
    },
    success: {
      light: "#00884a",
      main: "#006c3a",
      dark: "#00512a",
      contrastText: "#ffffff",
    },
    background: {
      default: "#212121",
      paper: "#303030",
    },
    text: {
      primary: "#ffffff",
      secondary: "#888888",
      disabled: "#666666",
    },
  },
};