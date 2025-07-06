import { createTheme } from "@mui/material";

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
        //tertiary: "#7F7C86",

      },
    },
});

export default theme;

