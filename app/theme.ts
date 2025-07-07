import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    dashboard: Palette['primary'];
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
    };
    dashIcons: {
      main: string;
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
    lighert?: {
      main: string;
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
  typography: {
    fontFamily: 'Poppins',
    // h1: {
    //   fontSize: '2.5rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '2rem',
    //   },
    // },
    // h2: {
    //   fontSize: '2rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1.75rem',
    //   },
    // },
    // h3: {
    //   fontSize: '1.75rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1.5rem',
    //   },
    // },
    // h4: {
    //   fontSize: '1.5rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1.25rem',
    //   },
    // },
    // h5: {
    //   fontSize: '1.25rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1.125rem',
    //   },
    // },
    // h6: {
    //   fontSize: '1.125rem',
    //   fontWeight: 600,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1rem',
    //   },
    // },
    // subtitle1: {
    //   fontSize: '1.125rem',
    //   fontWeight: 500,
    //   '@media (max-width: 600px)': {
    //     fontSize: '1rem',
    //   },
    // },
    // subtitle2: {
    //   fontSize: '1rem',
    //   fontWeight: 500,
    //   '@media (max-width: 600px)': {
    //     fontSize: '0.875rem',
    //   },
    // },
    // body1: {
    //   fontSize: '1rem',
    //   fontWeight: 400,
    //   '@media (max-width: 600px)': {
    //     fontSize: '0.875rem',
    //   },
    // },
    // body2: {
    //   fontSize: '0.875rem',
    //   fontWeight: 400,
    //   '@media (max-width: 600px)': {
    //     fontSize: '0.75rem',
    //   },
    // },
    // caption: {
    //   fontSize: '0.75rem',
    //   fontWeight: 400,
    //   '@media (max-width: 600px)': {
    //     fontSize: '0.625rem',
    //   },
    // },
    // button: {
    //   fontSize: '0.875rem',
    //   fontWeight: 500,
    //   '@media (max-width: 600px)': {
    //     fontSize: '0.75rem',
    //   },
    // },
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
