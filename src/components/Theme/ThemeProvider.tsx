import { ThemeProvider } from "@material-ui/core"
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
      {children}
    </ThemeProvider>
  )
}

export default MyThemeProvider