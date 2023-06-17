import styled, { css } from 'styled-components';

const darkMode = (theme) => css`
  color: ${theme.colors.colorWhite};
  background: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.colorWhite};
    color: ${theme.colors.primaryColor};
    padding-top: ${theme.spacings.xhuge};

    ${background && darkMode(theme)};
    min-height: 100vh;
    display: block;
    align-items: center;

    & > *:first-child{
    max-width: 100rem;
    margin: auto;
    padding: ${theme.spacings.medium};
  }
  `}


`;
