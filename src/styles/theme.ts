import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export type Theme = 'dark' | 'light'
export const themeDark = 'dark'
export const themeLight = 'light'
export const themeType = 'theme'

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
    light: '#fff',
    dark: '#031f30'
  },
  paper: {
    light: '#fcfcfd',
    dark: '#0f1c24'
  }
}

function handleCreateTheme(mode: Theme = 'dark') {
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: palette.primary[mode],
      },
      secondary: {
        main: palette.secondary[mode],
      },
      error: {
        main: red.A400,
      },
      background: {
        default: palette.backgroud[mode],
        paper: palette.paper[mode]
      }
    },
    typography: {
      fontSize: 13,
    }
  });

  return theme
}

export default handleCreateTheme;
