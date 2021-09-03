import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
   padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
   color: inherit;
   text-decoration: none;
  }

  * {
   box-sizing: border-box;
  }
`

export default GlobalStyle