import { createContext, useEffect, useState } from 'react'

export enum Theme {
  TYPE = 'theme',
  DARK = 'dark',
  LIGT = 'light'
}

function findThemeToValue(theme: string): Theme {
  for (let themeKey of Object.keys(Theme)) {
    const themeEnum: Theme = Theme[themeKey]
    if (themeEnum === theme) {
      return theme;
    }
  }
}

interface ContextProps {
  type?: Theme,
  onChangeTheme?: () => void
}

const ThemeContext = createContext<ContextProps>({})

interface ThemeProviderProps {
  children: any
}

export function ThemeProviderContext(props: ThemeProviderProps) {
  const [type, setTheme] = useState<Theme>(Theme.DARK)

  useEffect(() => {
    let themeCookie = localStorage.getItem(Theme.TYPE)

    if (themeCookie) {
      setTheme(findThemeToValue(themeCookie))
    }
  }, [])

  function onChangeTheme() {
    const findTheme = type === Theme.DARK ? Theme.LIGT : Theme.DARK
    localStorage.setItem(Theme.TYPE, findTheme)
    setTheme(findTheme)
  }

  return (
    <ThemeContext.Provider value={{
      type,
      onChangeTheme
    }} >
      {props.children}
    </ThemeContext.Provider>
  )
}

export const AppConsumer = ThemeContext.Consumer

export default ThemeContext
