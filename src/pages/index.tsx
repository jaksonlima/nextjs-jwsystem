import useThemeContext from "../data/hooks/useThemeContext"

export default function Home() {
  const { onChangeTheme } = useThemeContext()
  return (
    <div>
      <h1>Jakson</h1>
      <button onClick={onChangeTheme}>theme</button>
    </div>
  )
}
