import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root{
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after{ box-sizing: border-box; }
  a{ text-decoration: none; color: inherit; }
  h1,h2,h3,h4,h5,h6{ margin: 0 }
`;