import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#373fc5',
    },
    secondary: {
      main: '#fba428',
    },
    background: {
      default: '#161616',
      paper: '#232323',
    },
  },
  typography: {
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
    h1: {
      fontFamily: '"Arimo", sans-serif',
      fontSize: '2rem',
      textTransform: 'uppercase',
      fontWeight: 400,
      color: '#fba428',
    },
    h2: {
      fontFamily: '"Arimo", sans-serif',
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 400,
    },
  },
};
