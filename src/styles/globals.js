import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #ddd !important;
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
    background: #4d4d5799;
  }
`

export default GlobalStyle