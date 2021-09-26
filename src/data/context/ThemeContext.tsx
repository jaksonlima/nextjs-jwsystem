import { createContext, useEffect, useState } from 'react'

import { Theme, themeDark, themeLight, themeType } from '../../styles/theme'

interface ContextProps {
  mode?: Theme,
  onChangeTheme?: () => void
}

const ThemeContext = createContext<ContextProps>({})

interface ThemeProviderProps {
  children: any
}

export function ThemeProviderContext(props: ThemeProviderProps) {
  const [mode, setMode] = useState<Theme>(themeDark)

  useEffect(() => {
    let themeCookie = localStorage.getItem(themeType) as Theme

    if (themeCookie) {
      setMode(themeCookie)
    }
  }, [])

  function onChangeTheme() {
    const findTheme = mode === themeDark ? themeLight : themeDark
    localStorage.setItem(themeType, findTheme)
    setMode(findTheme)
  }

  return (
    <ThemeContext.Provider value={{
      mode,
      onChangeTheme
    }} >
      {props.children}
    </ThemeContext.Provider>
  )
}

export const AppConsumer = ThemeContext.Consumer

export default ThemeContext
