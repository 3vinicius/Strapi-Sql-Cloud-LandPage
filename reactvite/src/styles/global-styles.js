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
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    font-family:${({ theme }) => theme.fonts.family.default};
    margin-top:70px;
    @media (max-width:768px){
      margin-top: 0px;
    }
  }

  h1,h2,h3,h4,h5,h6{
    font-family:${({ theme }) => theme.fonts.family.secondary};
    margin: ${({ theme }) => theme.spacings.mlarge} 0;
  }
  a{
    text-decoration: none;
    color: black;
  }

  p{
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul,ol{
    margin: ${({ theme }) => theme.spacings.medium};
    padding:  ${({ theme }) => theme.spacings.medium};
  }


  table{
  width: 100%;
}


.table{
  @media(max-width: 650px){
  width: 100%;
  overflow: auto;
}
}

tr{
  padding: 30px;
  height: 50px;
  @media(max-width: 650px){
    height: 100px;
  }
}

td{
  padding: 10px
}

.container-icon-footer{
  padding-bottom: 20px;
}

.container-icon-footer > a {
  margin-left: 20px;
}

`;
