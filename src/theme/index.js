import { createTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    light: '#2697ed',
    dark: '#0f1c24',
  },
  secondary: {
    light: '#2697ed',
    dark: '#9cd4f7'
  },
  backgroud: {
    light: '#fcfcfd',
    dark: '#031f30'
  },
  paper: {
    light: '#fcfcfd',
    dark: '#0f1c24'
  }
}

export const createThemeMUI = (type = 'dark') => {
  const theme = createTheme({
    palette: {
      type,
      primary: {
        main: palette.primary[type],
      },
      secondary: {
        main: palette.secondary[type]
      },
      background: {
        default: palette.backgroud[type],
        paper: palette.paper[type],
      }
    },
    typography: {
      htmlFontSize: 18,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });

  return theme
}
