import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    dashboard: Palette['primary'];
    dashboardText: {
      primary: string;
      secondary: string;
      white: string;
      
    };
  }
  interface PaletteOptions {
    dashboard?: PaletteOptions['primary'];
    dashboardText?: {
      primary: string;
      secondary: string;
      white: string;
    };
    hover?: {
      main: string;
    };
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      main: "#6F2C6F",
    },
    secondary: {
      main: "#F3E6F3",
    },
    background: {
      default: "#FFFFFF",
    },
    error: {
      main: "#D55A5A",
    },
    warning: {
      main: "#D55A5A",
    },
    success: {
      main: "#3AAB67",
    },
    text: {
      primary: "#6F2C6F",
      secondary: "#252428",
    },
    dashboardText: {
      white: "#FFFFFF",
      primary: "#B39EB3",
      secondary: "#252428",
    },
    dashboard: {
      main: "#400D40",
    },
    hover: {
      main: "#4D1A4D",
    }
  },
});

export default theme;
