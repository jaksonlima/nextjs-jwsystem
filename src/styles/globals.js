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

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
    scrollbar-width: 6px;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #7a7a90c9;
  }
`

export default GlobalStyle