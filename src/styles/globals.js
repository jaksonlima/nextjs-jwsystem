import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0 !important;
    margin: 0 !important;
  }

  a {
   text-decoration: none !important;
  }

  * {
   box-sizing: border-box !important;
  }
`

export default GlobalStyle