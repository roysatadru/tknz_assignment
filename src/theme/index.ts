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
    divider: '#353535',
  },
  shape: {
    borderRadius: '0.1875rem',
  },
  typography: {
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
    h1: {
      fontFamily: '"Arimo", sans-serif',
      fontSize: '1.60rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#fba428',
      
      '@media only screen and (min-width: 430px)': {
        fontSize: '1.85rem',
        fontWeight: 400,
      },
    },
    h2: {
      fontFamily: '"Arimo", sans-serif',
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      fontWeight: 400,
    },
    body1: {
      color: '#e0e0e0',
      fontSize: '0.8rem',
      letterSpacing: '0.02rem',
    },
    body2: {
      color: '#828282',
      fontSize: '0.6rem',
      letterSpacing: '0.05rem',
      margin: '0.9rem 0',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Fira Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: '0.05rem',
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          height: '2.5rem',
          padding: '0 2rem',
          boxShadow: '0 0 0.625rem 0 rgba(0, 0, 0, 0.05)',
          transition: 'all 300ms ease-in',
          lineHeight: '2.5rem',
          verticalAlign: 'middle',
        },
        containedPrimary: {
          '&:hover': {
            color: '#000',
            backgroundColor: '#fba428',
            boxShadow: '0 0 1.25rem 0 rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            '0 0 0.625rem 0 rgb(76 87 125 / 16%), 0 0.09375rem 0.125rem 0 rgba(255, 255, 255, 0.15) inset',
        },
      },
    },
  },
};
