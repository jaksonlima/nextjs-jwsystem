import { ThemeProvider } from "@mui/material"
import { ThemeProvider as ThemeProviderStyledComponent } from 'styled-components'
import { useMemo } from "react"

import useThemeContext from "../../data/hooks/useThemeContext"
import handleCreateTheme from "../../styles/theme"

interface MyThemeProviderProps {
  children: any
}

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const { mode } = useThemeContext()

  const theme = useMemo(() => handleCreateTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderStyledComponent theme={theme}>
        {children}
      </ThemeProviderStyledComponent>
    </ThemeProvider>
  )
}

export default MyThemeProvider