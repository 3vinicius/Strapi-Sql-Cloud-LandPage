import { createGlobalStyle } from 'styled-components';
// font-family: 'Montserrat', sans-serif;
// font-family: 'Open Sans', sans-serif;

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family:${({ theme }) => theme.fonts.family.default};
  }

  h1,h2,h3,h4,h5,h6{
    font-family:${({ theme }) => theme.fonts.family.secondary};
  }
  a{
    text-decoration: none;
    color: black;
  }

`;
