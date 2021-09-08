import { createTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    light: '#3c9ae8',
    dark: '#177ddc'
  },
  secondary: {
    light: '#33bcb7',
    dark: '#138585'
  }
}

export const createThemeMUI = (type = 'dark') => {
  const theme = createTheme({
    palette: {
      type,
      primary: {
        main: palette.primary[type]
      },
      secondary: {
        main: palette.secondary[type]
      }
    },
  });

  return theme
}
