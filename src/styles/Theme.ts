import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette {
    terciary: Palette['primary'];
  }
  interface PaletteOptions {
    terciary?: PaletteOptions['primary'];
  }
  interface BreakpointOverrides {
    xsm: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    terciary: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FCF7F1',
      contrastText: '#696462',
    },
    secondary: {
      main: '#382E2D',
      contrastText: '#bebab6',
    },
    terciary: {
      main: '#edb39b',
      contrastText: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
