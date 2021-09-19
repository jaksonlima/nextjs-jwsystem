import { ThemeProvider } from "@material-ui/core"
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components'
import { useMemo } from "react"

import useThemeContext from "../../data/hooks/useThemeContext"
import { createThemeMUI } from "../../theme"

interface MyThemeProviderProps {
  children: any
}

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const { type } = useThemeContext()

  const theme = useMemo(() => createThemeMUI(type), [type])

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderStyledComponent theme={theme}>
        {children}
      </ThemeProviderStyledComponent>
    </ThemeProvider>
  )
}

export default MyThemeProvider