import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dashboard: Palette["primary"];
    dashboardText: {
      primary: string;
      secondary: string;
      white: string;
    };
    hover: {
      main: string;
    };
    lighert: {
      main: string;
      text: string;
    };
    dashIcons: {
      main: string;
    };
  }
  interface PaletteOptions {
    dashboard?: PaletteOptions["primary"];
    dashboardText?: {
      primary: string;
      secondary: string;
      white: string;
    };
    hover?: {
      main: string;
    };
    lighert?: {
      main: string;
      text: string;
    };
    dashIcons?: {
      main: string;
    };
    light?: {
      main: string;
      gray: string;
    };
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",

    h1: {
      fontSize: "34px",
      fontWeight: 600,
      textTransform: "none",
      lineHeight: 1.2,
      color: "text.primary",

      "@media (max-width: 599px)": {
        fontSize: "32px",
      },
      "@media (max-width: 375px)": {
        fontSize: "28px",
      },
    },
    h2: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: 1.3,
      textTransform: "none",
      color: "text.primary",
      "@media (max-width: 599px)": {
        fontSize: "24px",
      },
      "@media (max-width: 375px)": {
        fontSize: "22px",
      },
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: "none",
      color: "text.primary",
      "@media (max-width: 599px)": {
        fontSize: "22px",
      },
      "@media (max-width: 375px)": {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "18px",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: 1.5,
      color: "text.primary",
      "@media (max-width: 599px)": {
        fontSize: "16px",
      },
      "@media (max-width: 375px)": {
        fontSize: "14px",
      },
    },
    h5: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: "none",
      color: "text.primary",
      "@media (max-width: 599px)": {
        fontSize: "13px",
      },
      "@media (max-width: 375px)": {
        fontSize: "12px",
      },
    },
    h6: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: "none",
      color: "text.primary",
      "@media (max-width: 599px)": {
        fontSize: "12px",
      },
      "@media (max-width: 375px)": {
        fontSize: "10px",
      },
    },
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
    },
    lighert: {
      main: "#F3E6F3",
      text: '#7F7C86'
    },
    dashIcons: {
      main: "#FFFFFF",
    },
    light: {
      main: "#B39EB3",
      gray: "#E0E0E0",
    },
  },
});

export default theme;
